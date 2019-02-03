import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Search
                </Button>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="canteen-result"
                    aria-describedby="canteen-result-description"
                >
                    <DialogTitle id="canteen-result">
                        {"Yay we have already found a couter you may like!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="canteen-result-description">
                            <Card className={this.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="canteen-picture"
                                        className={this.media}
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="canteen-picture"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Canteen 13 - Tian Yi Dian
                                        </Typography>
                                        <Typography component="p">
                                            Scrumptious Si Chuan mixed rice. They provide both spicy and non-spicy food
                                         </Typography>
                                        <Typography gutterBottom variant="h6">
`                                           Dishes
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

SearchResult.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default SearchResult;
import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import withStyles from "@material-ui/core/styles/withStyles";
import Collapse from "@material-ui/core/Collapse";

const styles = theme => ({
    card: {
        backgroundColor: "#00a8ff",
        marginTop: '1rem',
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class Example extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (
            <div>
                <Card onClick={this.toggle}>
                    <CardActionArea>
                        <CardMedia
                            height="20"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: "#ffffff"}}>
                                <i className="fas fa-bullhorn fa-3x" style={{color: "white", padding: 12}}/>
                                Announcement
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Collapse in={this.state.collapse}>
                        <Card>
                            <CardContent>
                                Chinese luner new year holiday is from 4th Febrary to 6th Febrary.
                            </CardContent>
                        </Card>
                    </Collapse>
                </Card>

                <Card style={{backgroundColor: "#00a8ff", marginTop: '1rem'}} onClick={this.toggle}>
                    <CardActionArea>
                        <CardMedia
                            height="20"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: "#ffffff"}}>
                                <i className="fas fa-hands-helping fa-3x" style={{color: "white", padding: 12}}/>
                                Financial Aids
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardContent>
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                            </CardContent>
                        </Card>
                    </Collapse>
                </Card>

                <Card style={{backgroundColor: "#00a8ff", marginTop: '1rem'}} onClick={this.toggle}>
                    <CardActionArea>
                        <CardMedia
                            height="20"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{color: "#ffffff"}}>
                                <i className="fas fa-skull-crossbones fa-3x" style={{color: "white", padding: 12}}/>
                                Deadline
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardContent>
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                            </CardContent>
                        </Card>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

Collapse.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.node,
    navbar: PropTypes.bool,
    cssModule: PropTypes.object,
    innerRef: PropTypes.object,
};

export default withStyles(styles)(Example);
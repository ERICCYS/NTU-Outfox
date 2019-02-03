import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";

const styles = {
    card: {
        maxWidth: 400,
        margin: '2%'
    },
    media: {
        objectFit: 'cover',
    },
    root: {
        width: '100%',
    },
    inline: {
        display: 'inline',
    },
};

class CanteenCard extends React.Component {

    handleClick = () => {
        // do something meaningful, Promises, if/else, whatever, and then
        this.props.history.push(`/canteen/food-on-the-way`)
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid className={classes.root} spacing={24} container>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Canteen 13 - Tian Yi Dian
                        </Typography>
                        <Typography component="p">
                            Scrumptious Si Chuan mixed rice. They provide both spicy and non-spicy food
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="canteen-picture"
                        className={classes.media}
                        height="140"
                        image="http://www.ntu.edu.sg/has/FnB/PublishingImages/Canteen_14_1_280x180.png"
                        title="canteen-picture"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6">
                            Dishes
                        </Typography>
                        <List className={classes.root}>
                            <ListItem alignItems="flex-start">
                                <CardActionArea onClick={this.handleClick}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp"
                                                src="https://tokyo-kitchen.icook.network/uploads/recipe/cover/46241/large_fc426cd0a3125e35.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="西红柿炒鸡蛋"
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline}
                                                            color="textPrimary">
                                                    Translation
                                                </Typography>
                                                {" Egg with Tomato"}
                                            </React.Fragment>
                                        }
                                    >
                                    </ListItemText>
                                </CardActionArea>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <CardActionArea onClick={this.handleClick}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp"
                                                src="http://ali.xinshipu.cn/20100506/original/1273127528984.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="回锅肉"
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline}
                                                            color="textPrimary">
                                                    Translation
                                                </Typography>
                                                {" Twice cooked pork with vegatables"}
                                            </React.Fragment>
                                        }
                                    />
                                </CardActionArea>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <CardActionArea onClick={this.handleClick}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp"
                                                src="http://ali.xinshipu.cn/20140910/original/1410358049556.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="宫保鸡丁"
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline}
                                                            color="textPrimary">
                                                    Translation
                                                </Typography>
                                                {" balabala"}
                                            </React.Fragment>
                                        }
                                    />
                                </CardActionArea>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Canteen 9 - Jiu Li Xiang
                        </Typography>
                        <Typography component="p">
                            Scrumptious Si Chuan mixed rice. They provide both spicy and non-spicy food
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="canteen-picture"
                        className={classes.media}
                        height="140"
                        image="http://www.ntu.edu.sg/has/FnB/PublishingImages/Canteen_14_1_280x180.png"
                        title="canteen-picture"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6">
                            Dishes
                        </Typography>
                        <List className={classes.root}>
                            <ListItem alignItems="flex-start">
                                <CardActionArea onClick={this.handleClick}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp"
                                                src="http://www.ddmeishi.com/uploads/allimg/170808/7-1FPQ62K1.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="沸腾鱼"
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline}
                                                            color="textPrimary">
                                                    Translation
                                                </Typography>
                                                {" Spicy fish with cabbage"}
                                            </React.Fragment>
                                        }
                                    />
                                </CardActionArea>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <CardActionArea onClick={this.handleClick}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp"
                                                src="http://ali.xinshipu.cn/20120830/original/1346317244651.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="地三鲜"
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline}
                                                            color="textPrimary">
                                                    Translation
                                                </Typography>
                                                {" Potato, green peper and eggplant"}
                                            </React.Fragment>
                                        }
                                    />
                                </CardActionArea>
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <CardActionArea onClick={this.handleClick}>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp"
                                                src="http://ali.xinshipu.cn/20130410/original/1365589504242.jpg"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="酸汤肥牛"
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline}
                                                            color="textPrimary">
                                                    Translation
                                                </Typography>
                                                {" balabala"}
                                            </React.Fragment>
                                        }
                                    />
                                </CardActionArea>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>

            </Grid>
        )
    }
}

CanteenCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CanteenCard);
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Typography} from '@material-ui/core';
import FunctionCard from '../common/FunctionCard'
import FavItems from './FavItems';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flex: 1,
    },
    bigAvatar: {
        margin: 20,
        width: 150,
        height: 150,
    },
    info: {
        margin: 20
    },
    girditem: {
        margin: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10
    }
});

function ImageGridList(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={12}>
                <Grid item xs={12}>
                    <img style={{ width: '100%', height: 400 }} src={"https://wallpapertag.com/wallpaper/full/b/2/6/114219-new-galaxy-background-tumblr-1920x1200-for-ipad.jpg"}></img>
                </Grid>
                <Grid item xs={3}>
                    <Avatar
                        src="https://cdn1.vectorstock.com/i/1000x1000/19/45/user-avatar-icon-sign-symbol-vector-4001945.jpg"
                        className={classes.bigAvatar} />
                </Grid>
                <Grid item xs={9}>
                    <Typography className={classes.info} variant="h4">Username: ABCDE</Typography>
                    <Typography className={classes.info} variant="h4">School: SCSE</Typography>
                    <Typography className={classes.info} variant="h4">GPA: 0</Typography>
                </Grid>
            </Grid>

            <Divider variant="middle"/>
            <Grid container spacing={12} center>
                <Grid item xs={12}>
                    <Typography className={classes.info} variant="h4">Announcements</Typography>
                </Grid>
                <Grid item xs={12} className={classes.girditem}>
                    <Grid item xs={3} center>
                        <Typography className={classes.info} variant="h5">Announcement 1</Typography>
                    </Grid>
                    <Grid item xs={9} center>
                        <Typography className={classes.info} variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                    </Grid>
                </Grid>
                
            </Grid>
            <Divider variant="middle"/>
            <Grid container spacing={12}>
                <Grid item xs={12}>
                    <Typography className={classes.info} variant="h4">News</Typography>
                </Grid>
                <Grid item xs={12} className={classes.girditem}>
                    <Grid item xs={3} center>
                        <Typography className={classes.info} variant="h5">News 1</Typography>
                    </Grid>
                    <Grid item xs={9} center>
                        <Typography className={classes.info} variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                    </Grid>
                </Grid>
                
            </Grid>

            <Grid item xs={12}>
                <Grid xs={12}>
                    <Typography className={classes.info} variant="h4">Guess you will like:</Typography>
                </Grid>
                <Grid>
                    <FavItems></FavItems>
                </Grid>
            </Grid>

        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Typography } from '@material-ui/core';
// import tileData from './tileData';

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
    }
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function ImageGridList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={12}>
                <Grid item xs={12}>
                    <img style={{ width: '100%', height: 400 }} src={"https://wallpapertag.com/wallpaper/full/b/2/6/114219-new-galaxy-background-tumblr-1920x1200-for-ipad.jpg"}></img>
                </Grid>
                <Grid item xs={2}>
                    <Avatar
                        src="https://cdn1.vectorstock.com/i/1000x1000/19/45/user-avatar-icon-sign-symbol-vector-4001945.jpg"
                        className={classes.bigAvatar} />
                </Grid>
                <Grid item xs={10}>
                    <Typography className={classes.info} variant="h3">Username</Typography>
                    <Typography className={classes.info} variant="h3">School</Typography>
                </Grid>
                <Divider />
            </Grid>
        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
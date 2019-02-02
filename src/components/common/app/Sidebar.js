import React from 'react';
import Drawer from "@material-ui/core/Drawer/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import HeaderPlaceHolder from "../HeaderPlaceholder";
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexShrink: 0,
    },
    titleRoot: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    drawerPaper: {
        backgroundColor: theme.palette.grey[50],
    },
    toolbar: theme.mixins.toolbar,
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.grey[50],
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    img: {
        height: 36,
        '@media (max-width: 840px)': {
            height: 0,
        },
    },
    headerItem: {
        marginRight: 20,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});

class Sidebar extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };


    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;

        return (
            <div className="drawer">
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <HeaderPlaceHolder />
                <CssBaseline />
                <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                <List>
                    <ListItem button key={"Events"}
                        component={props => <Link to={'/events'} {...props} />}>
                        <i className="far fa-calendar-check"></i>
                        <ListItemText primary={"Events"}>
                        </ListItemText>
                    </ListItem>
                    <ListItem button key={"Canteen"}>
                        <i className="fas fa-utensils"></i>
                        <ListItemText primary={"Canteen"}>
                        </ListItemText>
                    </ListItem>
                    <ListItem button key={"Shuttlebus"}>
                        <i className="fas fa-bus"></i>
                        <ListItemText primary={"Shuttlebus"}>
                        </ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key={"Report"}>
                        <i className="fas fa-exclamation-triangle"></i>
                        <ListItemText primary={"Report"}>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                </main>
            </div>
        )
     }
    }
        Sidebar.propTypes = {
            classes: PropTypes.object.isRequired,
        };

        export default withStyles(styles)(Sidebar);
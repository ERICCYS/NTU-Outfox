import React from 'react';
import Drawer from "@material-ui/core/Drawer/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import * as PropTypes from "prop-types";
import {Link} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexShrink: 0,
    },
    titleRoot: {
        paddingTop: 0,
        paddingBottom: 0,
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
    headerItem: {
        marginRight: 20,
    },
});

const Sidebar = ({classes, on, theme, handleClose}) => (
    <Drawer
        className={classes.drawer}
        anchor="left"
        open={on}
        classes={{paper: classes.drawerPaper}}
        onClose={handleClose}
    >
        <CssBaseline/>
        <List>
            <ListItem button key={"Events"}
                      component={props => <Link to={'/events'} {...props} />}
                      onClick={handleClose}
            >
                <i className="far fa-calendar-check"/>
                <ListItemText primary={"Events"}>
                </ListItemText>
            </ListItem>
            <ListItem button key={"Canteen"}
                      component={props => <Link to={'/canteen'} {...props} />}
                      onClick={handleClose}
            >
                <i className="fas fa-utensils"/>
                <ListItemText primary={"Canteen"}>
                </ListItemText>
            </ListItem>
            <ListItem button key={"Shuttlebus"}
                      component={props => <Link to={'/bus'} {...props} />}
                      onClick={handleClose}
            >
                <i className="fas fa-bus"/>
                <ListItemText primary={"Shuttlebus"}>
                </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem button key={"Feedback"}
                      component={props => <Link to={'/feedback'} {...props} />}
                      onClick="window.open('https://itunes.apple.com/sg/app/ntu-go/id1004510295?mt=8')"
            >
                <i className="fas fa-exclamation-triangle"/>
                <ListItemText primary={"Report"}>
                </ListItemText>
            </ListItem>
        </List>
    </Drawer>
);

Sidebar.defaultProps = {
    open: false,
};

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    on: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default withStyles(styles, {withTheme: true})(Sidebar);
import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Main from "./cards";

const styles = () => ({
    root: {
        flexGrow: 1,
    },
});

const HomeApp = ({classes}) => (
        <div className={classes.root}>
            <Main/>
        </div>
    );

HomeApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeApp);

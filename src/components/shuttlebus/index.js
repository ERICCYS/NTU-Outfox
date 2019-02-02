import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from '@material-ui/core/es';

const styles = () => ({
    root: {
        flexGrow: 1,
	},
	title: {
		textAlign: 'center',
	}
});

const BusApp = ({classes}) => {  
    return (
        <div className={classes.root}>
			<div className={classes.title}>
				<Typography variant="h2">Welcome to take NTU Shuttle Bus!</Typography>
			</div>
        </div>
    );

BusApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusApp);


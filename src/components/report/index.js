import React from 'react';
import * as PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import ReportForm from './ReportForm'

const styles = () => ({
    root: {
        flexGrow: 1,
    },
    title: {
        textAlign: 'center',
    }
});

const ReportApp = ({classes}) => {
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h2" gutterBottom>
                    Tell us, we can do better!
                </Typography>
            </div>
            <div>
                <ReportForm/>
            </div>
        </div>
    );
};

ReportApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReportApp);

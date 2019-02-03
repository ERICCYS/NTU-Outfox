import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ReportForm from './ReportForm'
import Drawer from "@material-ui/core/Drawer";
import {CardContent, CardHeader, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseRounded";

const styles = () => ({});

const FeedbackApp = ({classes, open, handleClose}) => (
    <Drawer anchor="bottom" open={open}>
        <CardHeader title="Feedback" action={
            <IconButton onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
        }/>
        <CardContent>
            <ReportForm handleClose={handleClose}/>
        </CardContent>
    </Drawer>
);

FeedbackApp.defaultProps = {
    open: false,
};

FeedbackApp.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default withStyles(styles)(FeedbackApp);

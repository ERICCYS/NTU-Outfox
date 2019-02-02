import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import EventCard from '../event/index.js'
import eventInfo from './eventInfo.json';
 

const styles = () => ({
    root: {
        flexGrow: 1,
    },
    header: {
        textAlign: 'center',
    },
});

const displayEvents = () => {
    let events = []
    console.log(eventInfo)
    
    return events
}

const EventApp = ({classes}) => {
    return (
        <div className={classes.root}>
          <div>
              {displayEvents()}
          </div>
        </div>
    );
};

EventApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventApp);
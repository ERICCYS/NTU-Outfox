import React from 'react';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import EventCard from './EventCard.js';
import eventInfo from './eventInfo.json';

const styles = () => ({
	root: {
		flexGrow: 1
	},
	header: {
		textAlign: 'center'
	}
});

const EventApp = ({ classes }) => {
	return (
		<div className={classes.root}>
			<div>
				{eventInfo.map(event => (
					<EventCard
						key={event.title}
						abbr={event.abbr}
						title={event.title}
						subheader={event.subheader}
						brief={event.brief}
						description={event.description}
					/>
				))}
			</div>
		</div>
	);
};

EventApp.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventApp);

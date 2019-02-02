import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import RouteWrapper from './routes/RouteWrapper';
import PageNotFound from './components/common/app/PageNotFound';
import HomeApp from './components/home/';
import EventApp from './components/event/';
import CanteenApp from './components/canteen/';
import ReportApp from './components/report/';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from './components/common/app/Header';
import Footer from './components/common/app/Footer';

const history = createBrowserHistory();

const classes = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%'
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minWidth: 0,
		minHeight: '100%'
	},
	toolbar: theme.mixins.toolbar
});

const RootRouter = ({ classes }) => (
	<Router>
		<div className={classes.root}>
			<Header />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Switch>
					<Route exact path="/" component={HomeApp} />
					<Route path="/events" component={EventApp} />
					<Route path="/report" component={ReportApp} />
					<Route path="/canteen" component={CanteenApp} />
					<Route component={PageNotFound} />
				</Switch>
			</main>
			<Footer />
		</div>
	</Router>
);

export default withStyles(classes)(RootRouter);

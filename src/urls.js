import React from 'react';
import Switch from 'react-router-dom/Switch';
import ReactRouter from "react-router-dom/Router";
import createBrowserHistory from 'history/createBrowserHistory';
import RouteWrapper from "./routes/RouteWrapper";
import PageNotFound from "./components/common/app/PageNotFound";
import HomeApp from "./components/home/index";
import EventApp from "./components/event/index";
import CanteenApp from "./components/canteen/index";
import ReportApp from './components/report/index'
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "./components/common/app/Header";
import Footer from "./components/common/app/Footer";

const history = createBrowserHistory();

const classes = theme => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        minHeight: "100%",
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
        minHeight: "100%",
    },
    toolbar: theme.mixins.toolbar,
});

const RootRouter = ({classes}) => (
    <ReactRouter history={history}> 
        <div className={classes.root}>
            <Header/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    {RouteWrapper({path: '/', exact: true, component: HomeApp})}
                    {RouteWrapper({path: '/events', exact: true, component: EventApp})}
                    {RouteWrapper({component: PageNotFound})}
                </Switch>
            </main>
            <Footer/>
        </div>
    </ReactRouter>
);

export default withStyles(classes)(RootRouter);

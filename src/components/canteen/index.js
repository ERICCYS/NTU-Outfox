import React from 'react';
import * as PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import FunctionCard from '../common/FunctionCard'
import CounterGrid from './CounterGird'
import CounterCard from './CounterCard'
import recentViewed from './recentViewed.json'
import popular from './popular.json'
import canteenInfo from '../../asset/canteenInfo.json'

const styles = () => ({
    root: {
        flexGrow: 1,
    },
    header: {
        textAlign: 'center',
    },
    candiv: {
        marginBottom: 30,
    },
    subtitle: {
        marginBottom: 10,
        marginLeft: '2%'
    }
});

const displayCanteens = () => {
    let canteens = [];
    canteenInfo.forEach((canteen) => {
        let children = () => {
            return (
                <div>
                    <CounterGrid 
                        counters={canteen.counters}
                        canteenStatus={`${canteen.status}`}
                    />
                </div>
            )
        };
        canteens.push(
            <FunctionCard 
                children={children()}
                title={`${canteen.name}`}
            />
        )
    });
    return canteens
};

const displaySearch = () => {
    return (
        <div>
            Search Canteen.
        </div>
    )
}

const CanteenApp = ({classes}) => (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant="h3">Welcome to eat @ NTU</Typography>
            </div>
            <div className={classes.candiv}>
                <Typography className={classes.subtitle} variant="h4">Search cantens</Typography>
            </div>
            <div className={classes.candiv}>
                <Typography className={classes.subtitle} variant="h4">Recently Viewed Counters</Typography>
                <Grid className={classes.root} spacing={8} container>
                {
                    recentViewed.map((counter, index) => (
                        <Grid key={index} item>
                            <CounterCard
                                counter={counter}
                            />
                        </Grid>
                    ))
                }
                </Grid>
            </div>
            <div className={classes.candiv}>
                <Typography className={classes.subtitle} variant="h4">Popular Counters</Typography>
                <Grid className={classes.root} spacing={8} container>
                {
                    popular.map((counter, index) => (
                        <Grid key={index} item>
                            <CounterCard
                                counter={counter}
                            />
                        </Grid>
                    ))
                }
                </Grid>
            </div>
            <div className={classes.candiv}>
                <Typography className={classes.subtitle} variant="h4">Explore More</Typography>
                {displayCanteens()}
            </div>
        </div>
);

CanteenApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CanteenApp);

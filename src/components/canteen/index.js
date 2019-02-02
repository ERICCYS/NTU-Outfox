import React from 'react';
import * as ReactDom from "react-dom";
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "../common/app/Footer";
import FunctionCard from '../common/FunctionCard'
import Card from "@material-ui/core/Card";
import CounterGrid from './CounterGird'
import canteenInfo from './canteenInfo.json'
 

const styles = () => ({
    root: {
        flexGrow: 1,
    },
    header: {
        textAlign: 'center',
    },
    canteen_cards: {
        marginButton: 20,
    }
});

const displayCanteens = () => {
    let canteens = []
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
    })
    return canteens
}

const CanteenApp = ({classes}) => {
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <h1>Welcome to eat @ NTU</h1>
            </div>
            <div className={classes.canteens}>
                <h2>Canteens</h2>
            </div>
            <div>
                {displayCanteens()}
            </div>
        </div>
    );
};

CanteenApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CanteenApp);

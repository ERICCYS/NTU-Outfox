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
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
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
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        borderColor: "blue",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
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



// const displaySearch = () => {
//     const { classes } = this.props;
//     return (
//         <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//             />
//           </div>
//     )
// }

class CanteenApp extends React.Component {


    search = (e) => {
        if (e.key === 'Enter') {
            this.props.history.push(`/canteen/search-result`);
        }
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.header}>
                    <Typography variant="h3">Welcome to eat @ NTU</Typography>
                </div>
                <div className={classes.candiv}>
                    <Typography className={classes.subtitle} variant="h4">Search cantens</Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onKeyPress={this.search}
                        />
                    </div>
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
        )
    }
};

CanteenApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CanteenApp);
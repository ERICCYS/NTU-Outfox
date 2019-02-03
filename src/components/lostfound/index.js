import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';
import ItemCard from './ItemCard'
// import ReportFrom from './ReportSection'
import lostItems from './lostItems.json'
import ReportSection from './ReportSection';
import SearchIcon from '@material-ui/icons/Search';
import {fade} from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        textAlign: 'center',
        marginBottom: 30
    },
    subtitle: {
        marginBottom: 10,
        marginLeft: '2%'
    },
    section: {
        padding: 10,
        marginBottom: 30,

        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dashed',
        borderRadius: 10
    },
    candiv: {
        marginBottom: 30,
    },
    search: {
        position: 'relative',
        borderRadius: 16,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.palette.grey[500],
        transition: [["border-color", "0.1s"]],
        '&:hover': {
            boarderColor: fade(theme.palette.common.black, 0.25),
        },
        marginLeft: "5%",
        width: '80%',
    },
    searchIcon: {
        width: "100%",
        height: '100%',
        position: 'absolute',
        display: 'flex',
        pointerEvents: "none",
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: "95%",
        boxSizing: "border-box"
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 2,
        transition: theme.transitions.create('width'),
        width: '80%',
    },
});

class LostFoundApp extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.title} >
                    <Typography variant="h3">Lost and Found Forum</Typography>
                </div>
                <div className={classes.candiv}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon
                                color="primary"
                                onClick={this.handleSearch}
                                style={{cursor: "pointer", pointerEvents: "all"}}
                            />
                        </div>
                        <InputBase
                            placeholder="Which item do you want to check?"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            onKeyPress={this.search}
                        />
                    </div>
                </div>
                <div className={classes.section}>
                    <Typography className={classes.subtitle} variant="h4">Report your lost</Typography>
                    <ReportSection></ReportSection>
                </div>
                <div className={classes.section}>
                    <Typography className={classes.subtitle} variant="h4">Found Items</Typography>
                    <Grid className={classes.root} spacing={8} container>
                        {
                            lostItems.map((lostitem, index) => (
                                <Grid key={index} item>
                                    <ItemCard
                                        lostitem={lostitem}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
                
            </div>
        )
    }
}

LostFoundApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LostFoundApp);

import React from 'react';
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';
import ItemCard from './ItemCard'
import ReportFrom from './ReportSection'
import lostItems from './lostItems.json'
import ReportSection from './ReportSection';

const styles = () => ({
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
    }
});

class LostFoundApp extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.title} >
                    <Typography variant="h3">Lost and Found Forum</Typography>
                </div>
                <div className={classes.section}>
                    <Typography className={classes.subtitle} variant="h4">Search your lost item</Typography>
                    
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

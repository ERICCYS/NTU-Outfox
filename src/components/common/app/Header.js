import React from 'react';
import * as PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search"
import {withStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import {fade} from "@material-ui/core/styles/colorManipulator";
import Link from "../Link";
import Grid from "@material-ui/core/Grid/Grid";
import classNames from "classnames";

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1,
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    logo: {
        marginLeft: 2 * theme.spacing.unit,
        marginRight: 4 * theme.spacing.unit,
    },
    imgContainer: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    img: {
        height: 36,
        '@media (max-width: 840px)': {
            height: 0,
        },
    },
    headerItem: {
        marginRight: 20,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.buttonBorderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.05),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.1),
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

const header = {
    name: ['APIs',],
    url: ['/api',]
};

const Header = ({classes}) => (
    <AppBar className={classes.root} color="default" position="fixed">
        <Toolbar>
            <Grid item className={classes.imgContainer}>
                <img className={classes.img} src={require('../../../asset/logo.svg')} alt={'NTU ---'}/>
            </Grid>
            <Link className={classes.logo} aira-label={'Outfox'} href={'/home'} noWrap>
                Outfox
            </Link>
            {header.name.map((item, key) =>
                <Link key={key} aira-label={item} className={classes.headerItem} to={header.url[key]}
                      variant={'subtitle1'} noWrap>
                    {item}
                </Link>)}
            <div className={classes.grow}/>
            <div className={classNames(classes.headerItem, classes.search)}>
                <div className={classes.searchIcon}>
                    <SearchIcon/>
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>
        </Toolbar>
    </AppBar>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);

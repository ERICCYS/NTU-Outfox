import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '../Link';
import Grid from '@material-ui/core/Grid/Grid';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: theme.palette.grey[50]
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	img: {
		height: 36,
		'@media (max-width: 840px)': {
			height: 0
		}
	},
	headerItem: {
		marginRight: 20
	}
});

class Header extends React.Component {
	state = {
		open: false
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<AppBar
					position="fixed"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Grid item className={classes.imgContainer}>
							<img
								className={classes.img}
								src={require('../../../asset/logo.svg')}
								alt={'NTU ---'}
							/>
						</Grid>
						<Link className={classes.logo} aira-label={'Outfox'} href={'/home'} noWrap>
							Outfox
						</Link>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					</div>
					<Divider />
					<List>
						<Link to="/events">
							<ListItem button key={'Events'}>
								<i className="far fa-calendar-check" />
								<ListItemText primary={'Events'} />
							</ListItem>
						</Link>
						<Link to="/canteen">
							<ListItem button key={'Canteen'}>
								<i className="fas fa-utensils" />
								<ListItemText primary={'Canteen'} />
							</ListItem>
						</Link>
						<Link to="/bus">
							<ListItem button key={'Shuttlebus'}>
								<i className="fas fa-bus" />
								<ListItemText primary={'Shuttlebus'} />
							</ListItem>
						</Link>
					</List>
					<Divider />
					<List>
						<Link to="/report">
							<ListItem button key={'Report'}>
								<i className="fas fa-exclamation-triangle" />
								<ListItemText primary={'Report'} />
							</ListItem>
						</Link>
					</List>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
				</main>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);

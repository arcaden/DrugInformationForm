import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/es/Divider/Divider";
import List from "@material-ui/core/es/List/List";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar"

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
		height: '100vh',
		zIndex: 1,
		overflowX: 'hidden',
		overflowY: 'auto',
		position: 'relative',
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
		border: 'none',
	},
	content: {
		flexGrow: 1,
		backgroundColor: 'white',
		padding: theme.spacing.unit * 3,
		paddingLeft: 0,
		margin: 0,
		minWidth: 0, // So the Typography noWrap works
	},
	toolbar: theme.mixins.toolbar,
});

function Layout(props) {
	const { classes } = props;

	return <div className={classes.root}>
		<AppBar position="absolute" className={classes.appBar}>
			<Toolbar>
				<Typography variant="title" color="inherit" noWrap>
					Pill Passport
				</Typography>
			</Toolbar>
		</AppBar>
		<Drawer
		    variant="permanent"
		    classes={{
			    paper: classes.drawerPaper,
		    }}
		>
			<div className={classes.toolbar}/>
			<Sidebar/>
		</Drawer>
		<main className={classes.content}>
			<div className={classes.toolbar}/>
				{props.children}
		</main>
	</div>;
}

Layout.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
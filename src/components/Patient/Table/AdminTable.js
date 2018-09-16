import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		width: '100%',
		display: 'block',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
		maxWidth: 1000,
	},
	table: {
		maxWidth: 1000,
		marginLeft: 0
	},
});

let id = 0;

function createActiveMediactions(Drug, Dose, Adminstration, Compliance) {
	id += 1;
	return {id, Drug, Dose, Adminstration, Compliance}
}

const drugRows = [
	createActiveMediactions('Weed', 10, 'TID', 88),
	createActiveMediactions('Crack', 10, 'TID', 88),
	createActiveMediactions('Cocaine', 10, 'TID', 88),
	createActiveMediactions('Crystal', 10, 'TID', 88),
]
function AdminTable(props) {
	const { classes } = props;

	return (
	    <Paper className={classes.root} style = {{marginLeft:58}}>
		    <Table className={classes.table}>
			    <TableHead>
				    <TableRow>
					    <TableCell>Drug</TableCell>
					    <TableCell numeric> Dose (mg) </TableCell>
					    <TableCell numeric> Administration</TableCell>
					    <TableCell numeric> Compliance (%)</TableCell>
				    </TableRow>
			    </TableHead>
			    <TableBody>
				    {drugRows.map(drugRows => {
					    return (
						  <TableRow key={drugRows.id}>
							  <TableCell component="th" scope="row">
								  {drugRows.Drug}
							  </TableCell>
							  <TableCell numeric>
								  {drugRows.Dose}
							  </TableCell>
							  <TableCell numeric>
								  {drugRows.Adminstration}
							  </TableCell>
							  <TableCell numeric>
								  {drugRows.Compliance}
							  </TableCell>
						  </TableRow>
					    );
				    })}
			    </TableBody>
		    </Table>
	    </Paper>
	);
}

AdminTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminTable);

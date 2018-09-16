import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";

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
function createData(Name, day1, day2, day3, day4) {
	id += 1;
	return { id, Name, day1, day2, day3, day4 };
}

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

const rows = [
	createData('Weed', true, 6.0, 24, 4.0),
	createData('Crack', false, 9.0, 37, 4.3),
	createData('Heroin', true, 16.0, 24, 6.0),
	createData('Crystal', false, 9.0, 37, 4.3),
];

function DrugTable(props) {
	const { classes } = props;

	return (
	    <Paper className={classes.root} style = {{marginLeft:58}}>
		    <Table className={classes.table}>
			    <TableHead>
				    <TableRow>
					    <TableCell>Drug</TableCell>
					    <TableCell numeric>Day 1</TableCell>
					    <TableCell numeric>Day 2</TableCell>
					    <TableCell numeric>Day 3</TableCell>
					    <TableCell numeric>Day 4</TableCell>
				    </TableRow>
			    </TableHead>
			    <TableBody>
				    {rows.map(row => {
					    return (
						  <TableRow key={row.id}>
							  <TableCell component="th" scope="row">
								  {row.Name}
							  </TableCell>
							  <TableCell numeric>
								  <Checkbox
									checked={row.day1}
								  />
							  </TableCell>
							  <TableCell numeric>
								  <Checkbox
									checked={row.day2}
								  />
							  </TableCell>
							  <TableCell numeric>
								  <Checkbox
									checked={row.day3}
								  />
							  </TableCell>
							  <TableCell numeric>
								  <Checkbox
									checked={row.day4}
								  />
							  </TableCell>
						  </TableRow>
					    );
				    })}
			    </TableBody>
		    </Table>
	    </Paper>
	);
}

DrugTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrugTable);

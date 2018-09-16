import React from 'react'
import Grid from "@material-ui/core/es/Grid/Grid";
import dummy from '../../../assets/img/patients/placeholder.png'
import Css from './Profile.module.css'
import DrugTable from "../Table/DrugTable";
import AdminTable from "../Table/AdminTable";

const Profile = () => {
	const styles = {
		maxWidth: 250,
		maxHeight: 250,
		display: 'block',
		margin: 'auto',
		borderRadius:7,
	}

	return(
	    <div className = {Css.Holder}>
		    <Grid container direction = 'row'>
			    <Grid item md = {4} xs = {12}>
				    <img src = {dummy}  style = {styles}/>
			    </Grid>
			    <Grid item md = {8} xs = {12}>
				  <h2> Patient Name </h2>
				  <h4> Doctor Name </h4>
				  <h4> DD/MM/ YY </h4>
			    </Grid>
		    </Grid>
		    <DrugTable/>
		    <AdminTable/>
	    </div>
	)
}

export default Profile
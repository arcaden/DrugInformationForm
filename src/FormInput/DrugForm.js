import React, {Component} from 'react';
import {Input, Form, FormGroup, Label} from 'reactstrap';
import DrugOptionList from "./DrugOptionList";

class DrugForm extends Component {
	state = {
		name: '',
		MRN: '',
		drugName: '',
		drugClass: '',
		brand: 0,
		pNumber: '',
		frequency: '',
		startDate:'',
		endDate:'',
		dosage:'',
		food: 0,
		notes: '',
	}

	handleMRNChange = (event) => {
		this.setState(
		    {MRN : event.target.value}
		)
	}

	handleDrugNameChange = (event) => {
		this.setState(
		    {DrugName : event.target.value}
		)
	}

	handleNameChange = (event) => {
		this.setState(
		    {name : event.target.value}
		)
	}

	handleGenChange = (event) => {
		this.setState(
		    {brand: 0}
		)
	}

	handleBrandChange = (event) => {
		this.setState(
		    {brand: 1}
		)
	}

	handlepNumberChange = (event) => {
		this.setState(
		    {pNumber : event.target.value}
		)
	}

	handleFrequencyChange = (event) => {
		this.setState(
		    {frequency : event.target.value}
		)
	}

	handleStartChange = (event) => {
		this.setState(
		    {startDate : event.target.value}
		)
	}

	handleEndChange = (event) => {
		this.setState(
		    {endDate : event.target.value}
		)
	}

	handlewithFoodChange = (event) => {
		this.setState(
		    {food: 1}
		)
	}

	handlewithoutFoodChange = (event) => {
		this.setState(
		    {food: 0}
		)
	}

	handleNoteChange = (event) => {
		this.setState(
		    {notes: event.value}
		)
	}

	handleSubmit(event) {
		console.log('Testing') //Verify your data here
		event.preventDefault()
	}

	render() {
		return (
		    <div>
			    <Form onSubmit = {this.handleSubmit}>
				    <FormGroup>
					    <Label for="name">Full Name</Label>
					    <Input type="text" name="fullName" value = {this.state.name} onChange = {this.handleNameChange}/>
				    </FormGroup>
				    <FormGroup>
					    <Label for="MRN">Patient  MRN</Label>
					    <Input type="MRN" name="MRN" value = {this.state.MRN} onChange = {this.handleMRNChange}/>
				    </FormGroup>
				    <FormGroup>
					    <Label for="Drug Name">Drug Name</Label>
					    <DrugOptionList type ='drugName'/>
				    </FormGroup>
				    <FormGroup>
					    <Label for="Drug Class">Drug Class</Label>
					    <Input type="MRN" name="MRN" value = {this.state.DrugClass} disabled/>
				    </FormGroup>
				    <FormGroup tag="fieldset">
					    <legend>Generic or Brand Name</legend>
					    <FormGroup check>
						    <Label check>
							    <Input type="radio" name="radio1"
								     onChange = {this.handleBrandChange}
								     checked = {(this.state.brand === 1)}/>
							    Brand Name
						    </Label>
					    </FormGroup>
					    <FormGroup check>
						    <Label check>
							    <Input type="radio" name="radio2"
								     checked = {(this.state.brand === 0)}
								     onChange = {this.handleGenChange}/>
							    Generic
						    </Label>
					    </FormGroup>
				    </FormGroup>
				    <FormGroup>
					    <Label for="script number">Prescription Number</Label>
					    <Input type="text" name="script number" value = {this.state.pNumber} onChange = {this.handlepNumberChange}/>
				    </FormGroup>
				    <FormGroup>
					    <Label for="frequency">Frequency</Label>
					    <Input type="text" name="frequency" value = {this.state.frequency} onChange = {this.handleFrequencyChange}/>
				    </FormGroup>
				    <FormGroup>
					    <Label for="exampleDate">Start Date</Label>
					    <Input type="date" name="date" value = {this.state.startDate} onChange = {this.handleStartChange}/>
				    </FormGroup>
				    <FormGroup>
					    <Label for="exampleDate">End Date</Label>
					    <Input type="date" name="enddate" value = {this.state.endDate} onChange = {this.handleEndChange}/>
				    </FormGroup>
				    <FormGroup tag="fieldset">
					    <legend>With or Without Food</legend>
					    <FormGroup check>
						    <Label check>
							    <Input type="radio" name="radio1"
								     onChange = {this.handlewithFoodChange}
								     checked = {(this.state.food === 1)}/>
							    With Food
						    </Label>
					    </FormGroup>
					    <FormGroup check>
						    <Label check>
							    <Input type="radio" name="radio2"
								     checked = {(this.state.food === 0)}
								     onChange = {this.handlewithoutFoodChange}/>
							    Without Food
						    </Label>
					    </FormGroup>
				    </FormGroup>
				    <FormGroup>
					    <Label for="exampleText"> Notes</Label>
					    <Input type="textarea" value = {this.state.notes} onChange = {this.handleNoteChange}/>
				    </FormGroup>
				    <input type="submit" value="Submit" />
			    </Form>
		    </div>
		)
	}
}
export default DrugForm;
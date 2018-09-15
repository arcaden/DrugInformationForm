import React from 'react'
import {Input} from 'reactstrap';


const DrugOptionList = (props) => {
	if (props.type === 'drugName') {
		return (<Input type="select" name="drugList">
			<option value=" ">Select the drug name</option>
			<option>Phentermine</option>
			<option>Acetaminophen</option>
			<option>Amphetamine</option>
			<option>Zolpidem</option>
			<option>Alprazolam</option>
			<option>Lisinopril</option>
			<option>Amlodipine</option>
			<option>Gabapentin</option>
			<option>Tramadol HCL</option>
			<option>Amoxicillin</option>
			<option>Azithromycin</option>
			<option>Atorvastatin Calcium</option>
			<option>Clonazepam</option>
			<option>Omeprazole</option>
			<option>Escitalopram</option>
			<option>Cyclobenzaprine</option>
			<option>Ondansetron</option>
			<option>Pantoprazole</option>
			<option>Sertraline</option>
			<option>Cetirizine</option>
			<option>Oxycodone</option>
			<option>Metformin</option>
			<option>Promethazine</option>
			<option>Vitamin D</option>
			<option>Losartan</option>
			<option>Prednisone</option>
			<option>Bupropion</option>
			<option>Nebraska</option>
			<option>Duloxetine</option>
			<option>Venlafaxine</option>
			<option>Amoxicillin</option>
			<option>Lorazepam</option>
			<option>Cialis</option>
			<option>Metroprolol</option>
			<option>Ibuprofen</option>
			<option>Fluticasone</option>
			<option>Carisoprodol</option>
			<option>Simvastatin</option>
			<option>Citalopram</option>
			<option>Methocarbamol</option>
			<option>Fluoxetine</option>
			<option>Loratadine</option>
			<option>Folic Acid</option>
			<option>Lisiniopril</option>
			<option>Benzonatate</option>
			<option>Codeine</option>
			<option>Diazepam</option>
			<option>Estradiol</option>
			<option>Naproxen</option>
			<option>Atorvastin Calcium</option>
			<option>Omeprazole</option>
		</Input>)
	} else if (props.type === 'drugClass') {
		return (<Input/>)
	}
}
export default DrugOptionList
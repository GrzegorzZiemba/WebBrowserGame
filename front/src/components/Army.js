import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import {createUnits} from '../store/actions/armyActions'
import { useNavigate } from 'react-router';


const Army = () => {
    const dispatch = useDispatch()
    const userToken = localStorage.getItem("userInfo");
	let navigate = useNavigate();
    const army = useSelector((state) => state.town.town);

					

  return (
    <div>
        <Formik
        initialValues={{ qty: "" }}
        validationSchema={Yup.object({
            archerQty: Yup.number().required('ERROR: The number is required!').default(0).test(
            'Is positive?', 
            'ERROR: The number must be greater than 0!', 
            (value) => value >= 0
            ),
            knightQty: Yup.number().required('ERROR: The number is required!').default(0).test(
                'Is positive?', 
                'ERROR: The number must be greater than 0!', 
                (value) => value >= 0
            ),
            horseRidersQty: Yup.number().required('ERROR: The number is required!').default(0).test(
                'Is positive?', 
                'ERROR: The number must be greater than 0!', 
                (value) => value >= 0
            ),

        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                setSubmitting(false);
                const archerArmy = Math.floor(values.archerQty) > 0 ? Math.floor(values.archerQty)  : 0
                const knightArmy = Math.floor(values.knightQty) > 0 ? Math.floor(values.knightQty)  : 0
                const horseRiderArmy = Math.floor(values.horseRidersQty) > 0 ? Math.floor(values.horseRidersQty) : 0
                
                dispatch(createUnits({archer:archerArmy, knight: knightArmy, horseRiders: horseRiderArmy, token: userToken}))
            }, 400);
            setTimeout(() => {
                 document.querySelector('#root').scrollIntoView({
                    behavior: 'smooth'
                }, 500)
            }, 500);
        }}
    >
        <Form style={{"background": "#BCAA99", 'padding': '5px', marginBottom: "10px"}}>
            <label htmlFor="archerQty">Archer</label>
            <Field
                style={{ size: "200px", width: "100%" }}
                name="archerQty"
                type="number"
        
                
            />
            <ErrorMessage name="archerQty" component="div" style={{ color: "red" }} />
            <label htmlFor="knightQty">Knight</label>
            <Field
                style={{ size: "200px", width: "100%" }}
                name="knightQty"
                type="number"
        
                
            />
            <ErrorMessage name="knightQty" component="div" style={{ color: "red" }} />
            <label htmlFor="horseRidersQty">HorseRiders</label>
            <Field
                style={{ size: "200px", width: "100%" }}
                name="horseRidersQty"
                type="number"
        
            />
            <ErrorMessage name="horseRidersQty" component="div" style={{ color: "red" }} />

            <button style={{'margin':'5px'}} type="submit">Submit</button>
        </Form>
        
    </Formik>  
    
    <h2>
        Your Army is 
        <br />
        Archer: {army.archer} 
        <br />
        Knights: {army.knigth} 
        <br />
        HorseRiders: {army.horseRider}
    </h2>
    <h3>
        Army is building: 
        <br />
        Archer: {army.trainingArchers} 
        <br />
        Knights: {army.trainingKnights} 
        <br />
        HorseRiders: {army.trainingHorsemans}
    </h3>
</div>

)
}

export default Army
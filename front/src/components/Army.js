import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import {createUnits} from '../store/actions/armyActions'
const Army = () => {
    const dispatch = useDispatch()
    const userToken = localStorage.getItem("userInfo");

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
    </h2>
    <h3>
        Army is building
    </h3>
</div>

)
}

export default Army
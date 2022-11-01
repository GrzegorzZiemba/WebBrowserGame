import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import {createUnits} from '../store/actions/armyActions'
const Army = () => {
    const dispatch = useDispatch()
    const userToken = localStorage.getItem("userInfo");

  return (
    <Formik
    initialValues={{ qty: "" }}
    validationSchema={Yup.object({
        archerQty: Yup.number().required('ERROR: The number is required!').test(
          'Is positive?', 
          'ERROR: The number must be greater than 0!', 
          (value) => value > 0
        ),
        knightQty: Yup.number().required('ERROR: The number is required!').test(
            'Is positive?', 
            'ERROR: The number must be greater than 0!', 
            (value) => value > 0
          ),
        horseRidersQty: Yup.number().required('ERROR: The number is required!').test(
            'Is positive?', 
            'ERROR: The number must be greater than 0!', 
            (value) => value > 0
          ),

    })}
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            setSubmitting(false);

            dispatch(createUnits({archer:Math.floor(values.archerQty), knight: Math.floor(values.knightQty), horseRiders: Math.floor(values.horseRidersQty), token: userToken}))
        }, 400);
        setTimeout(() => {
            console.log(localStorage.getItem("userInfo"));
        }, 500);
    }}
>
    <Form>
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
      
        <button type="submit">Submit</button>
    </Form>
</Formik>  )
}

export default Army
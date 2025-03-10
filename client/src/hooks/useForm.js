import { useState } from "react";

export function useForm(initialValues, submitCallback){
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(currentValues => ({
            ...currentValues, 
            [e.target.name]: e.target.value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        submitCallback(values);
    }

    return {
        values,
        changeHandler,
        submitHandler
    }
}
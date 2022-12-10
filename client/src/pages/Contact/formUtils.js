import * as yup from "yup"
import axios from "axios"

const schema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup
        .string()
        .required("Email is a required field")
        .email("Must be a valid email"),
    phone: yup
        .string()
        .required("Phone is a required field")
        .min(14, "Phone should include Area Code and the 7 digits after it"),
    description: yup
        .string()
        .required("Description is a required field")
        .min(20),
})

axios.create({
    // baseURL: "http://localhost:3001",
    baseURL: "https://mvapi.vercel.app/send",
})

const submitForm = (data) => {
    console.log(JSON.stringify(data, null, 2))
    /**
     * TODO: On the backend, also send an email to the sender including their sent form
     */
}

export { schema, axios, submitForm }

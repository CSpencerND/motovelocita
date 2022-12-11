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

const submitForm = (data) => {
    const URL = "https://mvapi.vercel.app/send"
    // const URL = "http://localhost:3001/send"

    axios
        .post(URL, data)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export { schema, axios, submitForm }

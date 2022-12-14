import * as yup from "yup"

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is a required field")
        .matches(/^\b\w+\b\s\b\w+\b/, "Must contain first and last name"),
    email: yup
        .string()
        .required("Email is a required field")
        .email("Must be a valid email"),
    phone: yup
        .string()
        .required("Phone is a required field")
        .matches(
            /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
            "Phone must include area code and the 7 digits"
        ),
    description: yup
        .string()
        .required("Description is a required field")
        .min(20),
})

// const submitForm = (data) => {
//     // const URL = "https://mvapi.vercel.app/send"
//     const URL = "http://localhost:3001/send"
//
//     axios
//         .post(URL, data)
//         .then((res) => {
//             console.log(res)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

export { schema }

import React from "react";
import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

///
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  window.alert("Form submitted!");
  console.log(values);
};

// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = "Please type your name";
//   }
//   if (!values.email) {
//     errors.email = "Email is required";
//     //eslint-disable-next-line
//   } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   if (!values.channel) {
//     errors.channel = "Select your channel";
//   }
//   return errors;
// };
// ! validate alternative with Yup

const validationSchema = Yup.object({
  name: Yup.string().required("Adinizi qeyd edin"),
  email: Yup.string()
    .email("Yalnis email formati")
    .required("Emailinizi qeyd edin"),
});

//form components
const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    // !alternative yup
    validationSchema,
  });
  // console.log("Formik values", formik.values);
  // console.log("Formik errors", formik.errors);
  // console.log("Visited field", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text "
            id="name"
            name="name"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            required
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email "
            id="email"
            name="email"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text "
            id="channel"
            name="channel"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
            required
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

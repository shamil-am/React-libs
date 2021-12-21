import React from "react";
import "./form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  social: {
    facebook: "",
    twitter: "",
  },
};
const onSubmit = (values) => {
  window.alert("Form submitted!");
  console.log(values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Adinizi qeyd edin"),
  email: Yup.string()
    .email("Yalnis email formati")
    .required("Emailinizi qeyd edin"),
  channel: Yup.string().required("Kanal secin"),
});
// component
const FormExample = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text " id="name" name="name" autoComplete="off" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email " id="email" name="email" autoComplete="off" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text " id="channel" name="channel" autoComplete="off" />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="comment">Comment</label>
          <Field as="textarea" type="text" name="comment" id="comment" />
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormExample;

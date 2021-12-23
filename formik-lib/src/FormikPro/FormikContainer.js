import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Emailinizi qeyd edin.")
      .email("Yalnis email formati"),
    message: Yup.string().required("Mesaj bosh ola bilmez"),
  });
  const onSubmit = (values) => {
    window.alert("Sorgunuz qebul edildi!");
    console.log("form submitted", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form noValidate>
            <FormikControl
              control="input"
              type="email"
              id="email"
              name="email"
              label="Email unvani"
            />
            <FormikControl
              control="textarea"
              type="text"
              id="message"
              name="message"
              label="Mesajiniz"
            />

            <button type="submit">Gonder</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;

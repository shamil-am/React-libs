import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropDownOptions = [
    {
      key: "default",
      value: "",
    },
    {
      key: "AZ",
      value: "Azerbaycanca",
    },
    {
      key: "EN",
      value: "Ingilisce",
    },
  ];
  const paymentOptions = [
    {
      key: "cash",
      value: "cash",
    },
    {
      key: "MasterCard",
      value: "MasterCard",
    },
    {
      key: "Visa",
      value: "Visa",
    },
  ];
  const initialValues = {
    email: "",
    message: "",
    language: "",
    payment: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Emailinizi qeyd edin.")
      .email("Yalnis email formati"),
    message: Yup.string().required("Mesaj bosh ola bilmez"),
    language: Yup.string().required("Dil secimi edin."),
    payment: Yup.string().required("Odenis usulun secin"),
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
            <FormikControl
              control="select"
              id="language"
              name="language"
              label="Dil"
              dropDownOptions={dropDownOptions}
            />
            <FormikControl
              control="radio"
              label="Odenis usulun secin"
              name="payment"
              paymentOptions={paymentOptions}
            />
            <button type="submit">Gonder</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;

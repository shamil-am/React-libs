import React from "react";
import "./form.css";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
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
  phoneNumbers: ["0", "1"],
  countries: [""],
};
const onSubmit = (values, onSubmitProps) => {
  window.alert("Form submitted!");
  console.log(values);
  // console.log(onSubmitProps);
  onSubmitProps.resetForm();
};
const validationSchema = Yup.object({
  name: Yup.string().required("Adinizi qeyd edin"),
  email: Yup.string()
    .email("Yalnis email formati")
    .required("Emailinizi qeyd edin"),
  channel: Yup.string().required("Kanal secin"),
  social: Yup.object().shape({
    facebook: Yup.string().required("type facebook profile"),
  }),
});
// component
const FormExample = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <FastField name="name" autoComplete="off">
            {(fieldProps) => {
              console.log("rendered");
              const { field, form, meta } = fieldProps;
              return (
                <div>
                  <input type="text" id="name" {...field} />
                  {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
                </div>
              );
            }}
          </FastField>
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
          <ErrorMessage name="social.facebook" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>
        <div className="form-control">
          <label htmlFor="phoneNumber0">Number-1</label>
          <Field type="number" id="number" name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="phoneNumber1">Number-2</label>
          <Field type="number" id="phoneNumber1" name="phoneNumbers[1]" />
        </div>
        <div className="">
          <h2>Visited countries</h2>
          <FieldArray name="countries">
            {(fieldArrProp) => {
              const { push, remove, form } = fieldArrProp;
              const { values } = form;
              const { countries } = values;

              return (
                <div>
                  <button type="button" onClick={() => push(" ")}>
                    +
                  </button>
                  {countries.map((country, index) => {
                    return (
                      <div key={index} className="form-control">
                        <Field name={`countries[${index}]`} />
                        {index > 0 ? (
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormExample;

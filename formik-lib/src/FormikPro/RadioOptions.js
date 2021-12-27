import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const RadioOptions = (props) => {
  const { label, name, paymentOptions } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return paymentOptions.map((payment) => {
            return (
              <div
                key={payment.key}
                style={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <input
                  // passing field with spread mandatory
                  {...field}
                  type="radio"
                  // we must pass value after {...fiel} passed beacuse initial value is empty
                  value={payment.value}
                  id={payment.key}
                  checked={field.value === payment.value}
                  style={{ width: "50%" }}
                />
                <label style={{ width: "50%" }} htmlFor={payment.key}>
                  {payment.value}
                </label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioOptions;

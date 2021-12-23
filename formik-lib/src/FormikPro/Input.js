import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
// component
import './FormikPro.css'
function Input(props) {
  const { id, label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;

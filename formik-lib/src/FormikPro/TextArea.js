import { Field,ErrorMessage } from "formik";
import TextError from "./TextError";

const TextArea = (props) => {
  const { id, label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <Field as="textarea" name={name} id={id} cols="30" rows="10" {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;

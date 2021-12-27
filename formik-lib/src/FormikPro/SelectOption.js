import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";
const SelectOption = (props) => {
  const { id, label, name, dropDownOptions } = props;
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>

      <Field as="select" id={id} name={name}>
        {dropDownOptions.map((option) => {
          return <option key={option.key}>{option.value}</option>;
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default SelectOption;

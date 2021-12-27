import Input from "./Input";
import TextArea from "./TextArea";
import SelectOption from "./SelectOption";
import RadioOptions from "./RadioOptions";
//
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <SelectOption {...rest} />;
    case "radio":
      return <RadioOptions {...rest} />;
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;

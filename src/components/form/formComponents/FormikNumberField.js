import React from "react";
import { useField } from "formik";
import TextField from '@material-ui/core/TextField';

export const FormikNumberField = ({ name, placeholder, label, min, max }) => {
  const helpersArr = useField(name);
  const [field, { error, touched }, { setValue }] = helpersArr;

  const handleChange = (e) => {
    const { value } = e.target;

    if (value < min) {
      setValue(parseInt(min));
    } else if (value > max) {
      setValue(parseInt(max));
    } else {
      setValue(parseInt(value) || 0);
    }
  };

  return (
    <TextField
      {...field}
      className="w-100"
      onChange={handleChange}
      id={name}
      type="number"
      placeholder={placeholder}
      label={label}
      error={error && touched}
      helperText={error && touched ? error : ""}
    />
  );
};

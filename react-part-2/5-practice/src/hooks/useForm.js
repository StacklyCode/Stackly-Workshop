import { useState } from "react";

export const useForm = (
  { intialValues } = {
    intialValues: {},
  }
) => {
  const [fields, setFields] = useState(intialValues);
  const [info, setInfo] = useState({ submited: false });

  const onChange = (event) => {
    const {
      target: { value, name, type, checked },
    } = event;

    setFields({
      ...fields,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (fn) => (event) => {
    if (event) {
      event.preventDefault();
      event.persist();
    }
    setInfo((prev) => ({ ...prev, submited: true }));
    return fn(fields);
  };

  const getBaseInput = (name) => ({
    name,
    onChange,
  });

  return {
    handleSubmit,
    fields,
    info,
    getInput: (name) => ({
      ...getBaseInput(name),
      value: fields[name],
    }),
    getCheckbox: (name) => ({
      ...getBaseInput(name),
      checked: fields[name],
    }),
    getRadio: (name, value) => ({
      ...getBaseInput(name),
      checked: fields[name] === value,
    }),
    getSelect: (name) => ({
      ...getBaseInput(name),
      value: fields[name],
    }),
  };
};

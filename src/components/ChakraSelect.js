import React from "react";
import { Field } from "formik";
import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/core";

function ChakraSelect(props) {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Select id={name} {...rest} {...field}></Select>
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default ChakraSelect;

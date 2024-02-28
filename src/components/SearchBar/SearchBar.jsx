import { Field, Form, Formik } from "react";
import * as Yup from "yup";

export const SearchBar = ({ onSubmit }) => {
  const userSchema = Yup.object().shape({
    query: Yup.string()
      .min(3, "Enter min 3 symbol")
      .max(20, "To long")
      .required("required"),
  });

  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSubmit(values.query);
          actions.resetForm();
        }}
        validationSchema={userSchema}
      >
        <Form>
          <Field
            name="query"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

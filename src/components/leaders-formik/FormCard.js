import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "@material-ui/core";

export default class FormCard extends Component {
  render() {
    return (
      <div>
        {/*Formik component takes initialValues*/}
        <Formik
          initialValues={{ }}
          onSubmit={data => {
            alert(data);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form>
              <div><Field placeholder='Name' name="fullName" type="input" as={TextField} /></div>
              <div><Field placeholder='Position'name="position" type="input" as={TextField} /></div>
              <div><Field placeholder='Cell Phone' name="cellPhone" type="input" as={TextField} /></div>
              <div><Field placeholder='Email'name="email" type="input" as={TextField} /></div>
              <div><Field placeholder='Facebook'name="facebook" type="input" as={TextField} /></div>
              <div><Field placeholder='Instagram'name="instagram" type="input" as={TextField} /></div>
              <div><Field placeholder='LinkedIn'name="linkedin" type="input" as={TextField} /></div>

              <div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>

              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

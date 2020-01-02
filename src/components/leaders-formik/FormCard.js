import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "@material-ui/core";

export default class FormCard extends Component {
  render() {
    return (
      <div>
        {/*Formik component takes initialValues*/}
        <Formik
          initialValues={{
            fullName: "",
            position: "",
            cell: "",
            email: "",
            facebook: "",
            instagram: "",
            linkedin: ""
          }}
          onSubmit={(values, { resetForm }) => {
            this.props.handleSubmit(values);
            resetForm({
              values: {
                fullName: "",
                position: "",
                cell: "",
                email: "",
                facebook: "",
                instagram: "",
                linkedin: ""
              }
            });
          }}
        >
          {({ values, resetForm, handleChange, handleBlur, handleSubmit }) => (
            <Form>
              <div className="card mt-2">
                <div className="card-body">
                  <div className="container">
                    <div className="form-row">
                      <div className="form-group col">
                        <label>Name</label>
                        <div>
                          <Field name="fullName" type="input" as={TextField} />
                        </div>
                      </div>

                      <div className="form-group col">
                        <label>Position</label>
                        <div>
                          <Field name="position" type="input" as={TextField} />
                        </div>
                      </div>

                      <div className="form-group col">
                        <label>Cell Phone</label>
                        <div>
                          <Field name="cell" type="input" as={TextField} />
                        </div>
                      </div>

                      <div className="form-group col">
                        <label>Email</label>
                        <div>
                          <Field name="email" type="input" as={TextField} />
                        </div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col">
                        <label>Facebook</label>
                        <div>
                          <Field name="facebook" type="input" as={TextField} />
                        </div>
                      </div>

                      <div className="form-group col">
                        <label>Instagram</label>
                        <div>
                          <Field name="instagram" type="input" as={TextField} />
                        </div>
                      </div>

                      <div className="form-group col">
                        <label>LinkedIn</label>
                        <div>
                          <Field name="linkedin" type="input" as={TextField} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      class="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

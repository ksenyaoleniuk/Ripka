import React from "react"
import { maxLength, required, email_check, minLength } from "../../helpers/FieldLevelValidationForm"

import { Field } from "redux-form"
import Form from "../Form"
import Geocoder from "../Geocoder/Geocoder"

import "./ManipulateUser.scss"
import block from "../../helpers/BEM"
const b = block("ManipulateUser")

const ManipulateUser = ({ handleSubmit, submitting, id }) => (
  <Form className={b()} onSubmit={handleSubmit}>
    {submitting && <div className={b("carpet")} />}
    <div className={b("container")}>
      <header>
        <h1 className={b("title", ["text"])}>{id ? "Edit profile" : "Join Ripka"}</h1>
      </header>
      <Field
        name="name"
        placeholder="John Snow"
        component={Form.Input}
        validate={[required, maxLength(20), minLength(2)]}
      />

      <Field
        name="email"
        placeholder="john.snow@gmail.com"
        component={Form.Input}
        validate={[required, email_check]}
      />

      <Field name="contacts" placeholder={"+380501360805"} component={Form.Input} validate={[required, maxLength(100)]} />
      <Field
        name="location"
        enableReinitialize={true}
        placeholder={"Kiev, Ukraine"}
        component={({input}) => (
          <Form.FieldSet name="location">
            <Geocoder input={input} />
          </Form.FieldSet>
        )}
      />
      <Field name="description" placeholder={"Write about you"} component={Form.TextArea} validate={[required, minLength(20)]} />
      <Field name="interests" placeholder={"Write your interests"} component={Form.TextArea} validate={[required, minLength(20)]} />
      <Field name="photo" component={Form.PhotoUpload} />

      <Form.FieldSet>
        <Form.Button>{id ? "Edit profile" : "Register"}</Form.Button>
      </Form.FieldSet>
    </div>
  </Form>
)

export default ManipulateUser

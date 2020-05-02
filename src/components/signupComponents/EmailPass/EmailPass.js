import React from 'react';
import { Field } from 'redux-form';
import clsx from 'clsx';
import { 
  emailValidation,
  required, 
  minLength6, 
  passwordsMatch
} from '../../../validators';
import './EmailPass.scss'



const renderInput = ({
  input, 
  label, 
  meta,
  type
}) => (
  <div className="form-email-pass">
    <label className={clsx(
      "form-email-pass__label",
      (meta.invalid && meta.visited) ? "form-email-pass__label-error" 
      : ''
      )}
    >
    {
      (meta.invalid && meta.visited) ? 
      (meta.error === ' IS REQUIRED' ? label + meta.error : meta.error) 
      : label 
    }
    </label>
    <div>
      <input
        type={type} 
        {...input} 
        className="form-email-pass__input"
      />
      
    </div>
  </div>
)



export const EmailPass = () => {
  return (
    <React.Fragment>
      <Field 
        name='email' 
        component={renderInput} 
        label='EMAIL'
        validate={[required, emailValidation]}
        type="email"
      />
      <Field 
        name="password"
        type="password"
        component={renderInput} 
        label='PASSWORD'
        validate={[required, minLength6]}
      />
      <Field 
        name="confirmpassword"
        type="password"
        component={renderInput} 
        label='CONFIRMATION'
        validate={[required, passwordsMatch]}
      />
    </React.Fragment>
  )
}

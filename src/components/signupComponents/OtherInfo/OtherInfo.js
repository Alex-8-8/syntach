import React from 'react'
import { Field } from 'redux-form'
import { DatePicker } from '../DatePicker/DatePicker'
import './OtherInfo.scss'
import { required } from '../../../validators'


const renderDatePicker = ({
  input,
  label,
}) => (
  <div className="other-info">
    <label className="other-info__label">{label}</label>
    <DatePicker input={input}/>
  </div>
)

const renderGender = ({label})  => (
    <div className="other-info">
      <label className="other-info__label">{label}</label>
      <ul className="other-info__list">
        <li className="other-info__list-item">
            <Field 
              name="sex" 
              component="input" 
              type="radio" 
              value="male"
              className="other-info__radio-button"
            />
            <label className="other-info__radio-label">MALE</label>
        </li>
        <li className="other-info__list-item">
            <Field 
              name="sex" 
              component="input" 
              type="radio" 
              value="female"
              className="other-info__radio-button"
            /> 
            <label className="other-info__radio-label">FEMALE</label>
         </li>
        <li className="other-info__list-item">
            <Field 
              name="sex" 
              component="input" 
              type="radio" 
              value="unspecified"
              className="other-info__radio-button"
            /> 
            <label className="other-info__radio-label"> UNSPECIFIED </label>
        </li>
      </ul>
    </div>
  )
  

export const OtherInfo = () => {
  return (
    <React.Fragment>
      <Field 
        name="birthday" 
        component={renderDatePicker} 
        label={'DATE OF BIRTH'} 
        validate={required}
      />
      <Field 
        name="gender" 
        component={renderGender} 
        label={'GENDER'}
      />
      <div className="other-info">
        <label className="other-info__label">WHERE DID YOU HERE ABOUT US?</label>
        <div className="other-info__resource-wrapper">
          <i className="fas fa-chevron-down other-info__resource-arrow"></i>
          <Field 
            name="hearAboutUs" 
            component="select"
            className="other-info__resource-select"
          >
          <option></option>
          <option value="facebook">Facebook</option>
          <option value="linkedIn">LinkedIn</option>
          <option value="other">Other</option>
        </Field>
        </div>
      </div>
    </React.Fragment>
  )
}
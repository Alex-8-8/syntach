import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { 
  nextStepAction, 
  prevStepAction,
} from '../redux/actionCreators';
import {EmailPass} from './signupComponents/EmailPass/EmailPass';
import OtherInfo from './signupComponents/OtherInfo/OtherInfo';
import {Completed} from './signupComponents/Completed/Completed'
import './MyReduxForm.scss'

 const MyReduxForm = ({
   handleSubmit, 
   step,
   error,
   nextStep,
   prevStep,
   setError,
   valid,
   }) => {
  const getComponent = () => {
    switch(step) {
      case 1: 
        return <EmailPass/>
      case 2: 
        return <OtherInfo setError={setError}/>
      case 3: 
        return <Completed />
      default: 
        return <EmailPass />
    }
  }

  

  return (
    <div className="signup">
    <div className="signup__wrapper">
      <h3 className="signup__title">{step === 3 ? 'Thank you!' : 'Signup'}</h3>
      <div className='signup__progress'>
        <div className={clsx(
          'signup__completed', 
          step===1 ? 'signup__completed--33' 
          : step===2 ? 'signup__completed--66' 
          : step===3 ? 'signup__completed--100' 
          : ''
          )}
        />
        <div className={clsx(
          'signup__incompleted', 
          step===1 ? 'signup__incompleted--66' 
          : step===2 ? 'signup__incompleted--33' 
          : ''
          )}
        />
      </div>

      <form className="signup-inner" onSubmit={handleSubmit}>
        {getComponent()}
      </form>

      <div className={clsx(
        'signup__breakline',
        step === 3 ? 'signup__breakline--hide'
          : ''
        )}
      />
      <div className="signup__buttons-box">
        <button className={clsx(
          'signup__button',
          'signup__button--prev',
          (step === 1 || step === 3) ? 'signup__button--hide'
            : ''
        )} 
          onClick={prevStep} 
          type="button"
        >
          Prev
        </button>

        <button 
          className={clsx(
            'signup__button',
            'signup__button--next',
            step === 3 ? 'signup__button--hide'
              : ''
            )} 
          onClick={nextStep} 
          type="button"
          
          disabled={!valid || error}
        >
          Next
          <span>
            <i className={clsx(
              'fas fa-arrow-right',
              'signup__arrow',
              'signup__arrow--right',
              (!valid || error) ? 'signup__arrow--hide'
                : ''
              )}
            >
            </i>
          </span>
        </button>
      </div>
      </div>
    </div>
  );
}

const selector = formValueSelector('signup');

const MapStateToProps = (state) => ({
  step: state.mainReducer.step,
  error: state.mainReducer.error,
  password: selector(state , 'password')
})

const MapDispatchToProps = (dispatch) => ({
  nextStep: () => dispatch(nextStepAction()),
  prevStep: () => dispatch(prevStepAction())
})

const ConnectReduxForm = connect(
  MapStateToProps,
  MapDispatchToProps,
)(MyReduxForm)

const Enhanced = reduxForm({
  form: 'signup',
  onSubmit: (formData) => console.log(JSON.stringify(formData))
})(ConnectReduxForm);

export { Enhanced as MyReduxForm }
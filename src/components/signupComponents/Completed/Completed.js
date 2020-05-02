import React from 'react';
import './Completed.scss';


export const Completed = () => (
    <div className="completed">
      <i className="fas fa-check-circle completed__icon"></i>
      <button type="submit" className="completed__button">
        Go to Dashboard
        <span>
            <i className='fas fa-arrow-right completed__arrow'></i>
          </span>
      </button>
    </div>
)
import React, {useState } from 'react';
import DropdownDate from 'react-dropdown-date';
import './DatePicker.scss'

const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

  export const DatePicker = ({input, meta, onErrorChange}) => {
    const [date, setDate] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const dateNow = new Date();
    const dateNowMiliSecs = dateNow.getTime()

        return (
            <div>

                <DropdownDate
                    startDate={                        
                        '1950-01-01'                    
                    }
                    endDate={                           
                        formatDate(dateNow)                 
                    }
                    selectedDate={                      
                        selectedDate                    
                    }
                    order={                             
                        ['day', 'month', 'year']        
                    }
                    onMonthChange={(month) => {         
 
                    }}
                    onDayChange={(day) => {             

                    }}
                    onYearChange={(year) => {           

                    }}
                    onDateChange={(date) => {           
                        input.onChange(() => 
                        input.value = {
                          day: date.getDate(),
                          month: date.getMonth() + 1,
                          year: date.getFullYear()
                        }
                        )
                        setDate(date);
                        setSelectedDate(formatDate(date));
                        
                        let pickedDateMiliSecs = date.getTime();
                        const yearsOld = ((dateNowMiliSecs - pickedDateMiliSecs)/ (1000 * 3600 * 24)) / 365
                        if (yearsOld < 18) {
                          onErrorChange(true)
                        } else {
                          onErrorChange(false)
                        }
                    }}
                    ids={                               
                        {
                            year: 'select-year',
                            month: 'select-month',
                            day: 'select-day'
                        }
                    }
                    names={                             
                        {
                            year: 'year',
                            month: 'month',
                            day: 'day'
                        }
                    }
                    classes={                           
                        {
                            dateContainer: 'date-picker',
                            yearContainer: 'date-picker__field-wrapper',
                            monthContainer: 'date-picker__field-wrapper',
                            dayContainer: 'date-picker__field-wrapper',
                            year: 'date-picker__date-select',
                            month: 'date-picker__date-select',
                            day: 'date-picker__date-select',
                            yearOptions: 'date-picker__options',
                            monthOptions: 'classes',
                            dayOptions: 'classes'
                        }
                    }
                    defaultValues={                     
                        {
                            year: 'YYYY',
                            month: 'MM',
                            day: 'DD'
                        }
                    }
                    options={                           
                        {
                            yearReverse: true,              
                            monthShort: true,               
                            monthCaps: true                 
                        }
                    }
                />
            </div>
        );
}
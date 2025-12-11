import { useState } from 'react'
import './App.css'

const App = () => {
  const[primaryDate, setPrimaryDate] = useState(new Date());

  const Weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const MonthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const daysInMonth = () => {
     const dateArray = [];

     const firstDay = new Date(primaryDate.getFullYear(), primaryDate.getMonth(), 1)
     
     const SecondDay = new Date(primaryDate.getFullYear(), primaryDate.getMonth() + 1, 0)
     
     for(let i= 0; i<firstDay.getDay(); i++)
     {
      dateArray.push(null)
     }
     for(let i =1; i <= SecondDay.getDate(); i++)
     {
         dateArray.push(new Date(primaryDate.getFullYear(), primaryDate.getMonth(), i))
     }
  
  
     

     return dateArray;

  }

  const isSameDay = (date1,date2) => {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getYear() === date2.getYear() 
  }

  const handleChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10)
    setPrimaryDate(new Date(primaryDate.getFullYear(),newMonth, 1))
  }

    const handleChangeYear = (e) => {
    const newYear = parseInt(e.target.value, 10)
    setPrimaryDate(new Date(newYear,primaryDate.getMonth(), 1))
  }
  

  return (
    <div className='calender-container'>
      <div className='header'>
        <button ><i onClick={() => setPrimaryDate(new Date(primaryDate.getFullYear(), primaryDate.getMonth() -1, 1 )) } className="fa-solid fa-circle-arrow-left"></i></button>
        <select className='month' value={primaryDate.getMonth()} onChange={handleChangeMonth}>
          {MonthName.map((month,index) => (
            <option value={index} key={index}>{month}</option>
          ))}
        </select>
        <select className='year' value={primaryDate.getFullYear()} onChange={handleChangeYear}>
          {Array.from({length:10},(_,i) => primaryDate.getFullYear() - 5 + i).map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
        <button><i onClick={() => setPrimaryDate(new Date(primaryDate.getFullYear(), primaryDate.getMonth() +1, 1 )) } class="fa-solid fa-circle-arrow-right"></i></button>
      </div>
      <div className='weekdays-container'>
        {Weekdays.map((day,index) => (
          <div className='weekdays' key={index}>{day}</div>
        ))}
      </div>
      <div className='days'>
       {daysInMonth().map((day,index) => (
        <div className={day ? (isSameDay(day, new Date()) ? "date-content current" : "date-content" ) : "empty"} key={index}>{day ? day.getDate() : ""}</div>
       ))}
      </div>
    </div>
  )
}

export default App


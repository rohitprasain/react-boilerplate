import React from 'react'
import './InputField.css'

const InputField = (props) => {
  return (
    <div className='input-container'>
        <input type="text" 
        placeholder={props.placeholder} 
        onChange={props.onChange} 
        />
    </div>
  )
}

export default InputField
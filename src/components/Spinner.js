import React from 'react'
import spinner_n from './spinner_n.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img className="my-3" src={spinner_n} style={{height:"125px"}} alt='spinner_n'/>
    </div>
  )
}

export default Spinner;

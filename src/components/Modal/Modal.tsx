import React from 'react'
import './Modal.css'

const Modal = ({ active, setActive, children }) => {

  return (
    <div onClick={()=>{setActive(false)}} className={active ? 'modal active' : 'modal'}>
      <div onClick={(e)=>{e.stopPropagation()}} className="modal__content">
        <button onClick={()=>{setActive(false)}} className='modal__close'>×</button>
        {children}
      </div>
    </div>
  )
}

export default Modal

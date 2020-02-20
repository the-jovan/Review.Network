import React, { useState } from 'react'
import './../../../sass/components/product/_product-dropdown.scss'

const ProductDropDown = ({ info }) => {
  const [show, toggle] = useState(false)
  const {type, facilities} = info

  return (
    <div className='dropdown__element' onClick={() => toggle(!show)}>
      <h2>{type}</h2>
      <img src={'https://image.flaticon.com/icons/svg/32/32195.svg'} 
        style={{ transform: show ? "translateY(-1.5rem) rotateZ(180deg)" : "translateY(-1.5rem)" }}
        alt='Arrow down'
      />
      <ul className='dropdown__element__list' style = {{ display: show ? 'block' : 'none' }}>
        {facilities && facilities.map(e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  )
}

export default ProductDropDown
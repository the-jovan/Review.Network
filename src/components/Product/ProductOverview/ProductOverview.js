import React from 'react'
import './../../../sass/components/product/_product-overview.scss'

const ProductOverview = ({ info }) => {
  const { address, phone, website, email, rooms } = info
  return (
    <div className='productOverview'>
      <h2>Overview</h2>
      <p><b>Address:</b> {address}</p>
      {phone && <p><b>Phone:</b> {phone}</p>}
      {website && <p><b>Website:</b> <a href={website} target='_blank'>{website}</a></p>}
      {email && <p><b>Email:</b> {email}</p>}
      {rooms && <p><b>Rooms:</b> {rooms.join(', ')}</p>}
    </div>
  )
}

export default ProductOverview
import React, { useState } from 'react'
import './../../../sass/components/product/_product-gallery.scss'

const ProductGallery = ({images}) => {
  const [data, setData] = useState({
    images: images,
    toggle: false
  })

  const showCarousel = ({ toggle, images, img }) => {
    if (toggle) {
      return images.map(e => (
        <div className='productGallery__slideshow__image' 
          style={{backgroundImage: "url(" + e + ")", display: images[images.indexOf(img)] === e ? 'block' : 'none'}}
        />
      ))
    }
  }

  const renderCarousel = () => {
    const calcPrevious = () => {
      if (images.indexOf(data.img) - 1 >= 0) return images.indexOf(data.img) - 1
      else return images.length - 1
    }
    const calcNext = () => {
      if (images.indexOf(data.img) + 1 <= images.length - 1) return images.indexOf(data.img) + 1
      else return 0
    }
    
    return (
      <div className='productGallery__slideshow' style={{display: data.toggle ? 'flex' : 'none'}}>

        <div className='productGallery__slideshow__arrow' onClick={() => setData({...data, img: images[calcPrevious()]})}>
          &lt;
        </div>

        {showCarousel(data)}

        <div className='productGallery__slideshow__arrow' onClick={() => setData({...data, img: images[calcNext()]})}>
          &gt;
        </div>

        <div className='productGallery__slideshow__close' onClick={() => setData({...data, toggle: false})}>X</div>

    </div>
    )
  }

  return (
    <div className='productGallery'>
      {renderCarousel()}
      {images.map(e => (
        <img className='productGallery__image' key={e} src={e} alt='Product Gallery Element' onClick={() => {
          setData({...data, toggle: true, img: e})
        }}/>
      ))}
    </div>
  )
}

export default ProductGallery
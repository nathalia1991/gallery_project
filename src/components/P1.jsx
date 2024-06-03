import React from 'react'
//crear componente, e importando la imagen
import p1_ from '../images/p1.jpg'

//crear variable
const P1 = () => {
  return (//mostrar componente como imagen agrupado dentro de un div
    <div className='container image-container'>
      <img src={p1_} alt="Paisaje iglesia con lago" className='image'/>
    </div>
  )
}

export default P1

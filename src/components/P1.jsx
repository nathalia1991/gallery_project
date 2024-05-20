import React from 'react'
//crear componente, e importando la imagen
import p1_ from '../images/p1.jpg'

//crar variable
const P1 = () => {
  return (//mostrar componente como imagen agrupado dentro de un div
    <div>
      <img src={p1_} alt="Paisaje iglesia con lago" />
    </div>
  )
}

export default P1

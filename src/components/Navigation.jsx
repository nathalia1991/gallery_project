import React from 'react'
import { Link } from 'react-router-dom'
import P1 from './P1'
import P2 from './P2'
import P3 from './P3'
import P4 from './P4'
import P5 from './P5'
import P6 from './P6'
import P7 from './P7'
import P8 from './P8'
import P9 from './P9'
import P10 from './P10'

const Navigation = () => {
  return (
    <div className="container mt-4 father">
          <Link to='/p1' className="links">
               <figure className="image-size">
                    <P1/>
                    <figcaption>FOTO 1</figcaption>
               </figure>
          </Link>
          <Link to='/p2' className="links">
               <figure className="image-size">
                    <P2/>
                    <figcaption>FOTO 2</figcaption>
               </figure>
          </Link>
          <Link to='/p3'className="links">
               <figure className="image-size">
                    <P3/>
                    <figcaption>FOTO 3</figcaption>
               </figure>
          </Link>
          <Link to='/p4'className="links">
               <figure className="image-size">
                    <P4/>
                    <figcaption>FOTO 4</figcaption>
               </figure>
          </Link>
          <Link to='/p5'className="links">
               <figure className="image-size">
                    <P5/>
                    <figcaption>FOTO 5</figcaption>
               </figure>
          </Link>
          <Link to='/p6'className="links">
               <figure className="image-size">
                    <P6/>
                    <figcaption>FOTO 6</figcaption>
               </figure>
          </Link>
          <Link to='/p7'className="links">
               <figure className="image-size">
                    <P7/>
                    <figcaption>FOTO 7</figcaption>
               </figure>
          </Link>
          <Link to='/p8'className="links">
               <figure className="image-size">
                    <P8/>
                    <figcaption>FOTO 8</figcaption>
               </figure>
          </Link>
          <Link to='/p9'className="links">
               <figure className="image-size">
                    <P9/>
                    <figcaption>FOTO 9</figcaption>
               </figure>
          </Link>
          <Link to='/p10'className="links">
               <figure className="image-size">
                    <P10/>
                    <figcaption>FOTO 10</figcaption>
               </figure>
          </Link>
          
    </div>
  )
}

export default Navigation

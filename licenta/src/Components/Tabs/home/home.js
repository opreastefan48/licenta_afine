import { useState } from "react";
import poza_detalii from './problem.png';
import cules from './cules.png'
import total from './total.png'
import fertil from './fertilizare.png'
import './home.css'

export default function Home() {
  return(
    <div className="images">

      
      <div className="image1">
        <a href="/detalii">
          <img src={poza_detalii} width={300}/>
        </a>
      </div>

      <div className="image2">
        <a href="/cules">
          <img src={cules} width={300}/>
        </a>
      </div>
  

      <div className="image3">
        <a href="/total">
          <img src={total} width={300}/>
        </a>
      </div>

      <div className="image3">
        <a href="/fertilizare">
          <img src={fertil} width={300}/>
        </a>
      </div>


    </div>
  );
}

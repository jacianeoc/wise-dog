import axios from 'axios';
import { useState } from 'react';
import '../styles/wise.css';

export function WiseRoom() {
  const [wise, setWise] = useState("clique no botão");
  const [imageDog, setImageDog] = useState('');

  /**
   * take a message (wise), using api adviceslip
   */
  async function handleWise() {
    await axios.get('https://api.adviceslip.com/advice').then(
      res => setWise(res.data.slip.advice)
    ) 
  }

  /**
   * take a random url dog, on api random dog
   */
  async function handleImageDog() {
    await axios.get('https://random.dog/woof.json').then(
      res => setImageDog(res.data.url)
    ) 
    if (imageDog.substr(-3) ==='ebm') {
      handleImageDog();
    } 
  }
  
  async function handleOtherCard() {
    await handleWise();
    await handleImageDog();
  }


  return(
    <div className="main-container-wise">
      <div className="container-wise">
        <div className="card-wise">
          {wise} 
          {console.log(wise)}     
        </div>
        <div className="imagine-dog">
          {imageDog.substr(-3) ==='mp4'

          ? <video width="200px" loop="true" autoplay="autoplay" controls muted>
            <source src={imageDog} type="video/mp4" />
            </video>

          :<img src={imageDog} alt="doguinho" />
          }
          
        </div>

      </div>
      <button onClick={handleOtherCard}>Pedir outro conselho</button>
    </div>
    
  )
}

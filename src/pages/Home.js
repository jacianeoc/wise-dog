import dog from '../assets/doguinho.png';
import '../styles/home.css';
import {Link} from "react-router-dom";

export function Home(){

  return(
      <div className="main-container">
        <div className="box-container">
          <h2>Wise</h2>
          <h1>Dog</h1>
          
          <button className="give-wise">
            <Link className="link" to="/wise">Pedir conselho</Link>
          </button>
        </div>
        <div>
          <img src={dog} alt="goat"/>
        </div>
      </div>
    );
}

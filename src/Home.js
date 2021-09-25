
import {  FaBootstrap } from "react-icons/fa";
import { SiReact, SiReactrouter } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import "./Home.css";

function Home() {
   return (
       <>
       <div className="Containers">
       
       <div className="library">
       <h1>Learning React Library !</h1>
       <h3>App is Built in React Using</h3>
       <p id="para"><FaBootstrap />BootStrap</p>
       <p id="para"><SiReact />React</p>
       <p id="para"><SiReactrouter />react-router-dom</p>
       <p id="para"><RiReactjsLine />react-icons</p>
       </div>
       <div className="images">
       <img className="image" src="/images1.jpg"  width="30%" height='30%' alt="Logo" /> 
       </div> 
       </div>
         
       </> 
    );
 }
  export default Home;
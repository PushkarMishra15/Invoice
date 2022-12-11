import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <>
    <div className="container_2">
    <style>{'body { background-color:   #d6d5e7}'}</style>
     <div className="heading_2">
     <h1>You Are</h1>  
     </div>
      <div className="intromanager_2">
        <Link to="/manager">
          <button className="Intro_Manager" >Manager</button>
        
        </Link>
      </div>
                                         
           <Link to="/Employee">
          <button className="Intro_Employee" >Employee</button>
        </Link>
    </div>
    </>
  );
};

export default Intro;
import React from "react";
import './sec2.css';


function section2(){
    return <>
    <div className='sec2'>
        <h2>Contact Us</h2>
        <div className='subdiv'>
          <div className='left'>
          contact us and will get back to you within 24 <br></br>
          <i class='fas fa-map-marker-alt'></i> Kample uganda<br></br>
          <i class='fas fa-phone'></i> +923158833600<br></br>
          <i class='fas fa-newspaper'></i> company.gmail.com

          </div>
          <div className='right'>
          <h3>Contact</h3>
            <form>
              <input type="text" placeholder='Your name'></input>
              <textarea placeholder='Your Message' rows="4" cols="50"></textarea>
              <input type="button" value="Submit"></input>
              
            </form>
          </div>
        </div>

      </div>
    </>

}


export default section2();


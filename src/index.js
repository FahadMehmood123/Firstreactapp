import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import head from './header';
import img1 from './company.png';
import img2 from './vision.png';
import img3 from './goal.png';
import section2 from './sec2';




function Sect1(props) {
  return <>
  <div className='sec1'>
      <img src={props.image1} alt='img'></img>
      <p><h1>{props.heading}</h1>
          If you're looking for random paragraphs, you've cometo the right place. When a <br></br>
          isn't quite enough, the next logical step is to find you'd like to see and click the button.<br></br>
          will instantly appear click the button. Your chosen If you're looking for random paragraphs <br></br>

      </p>
  </div>
  </>
}



function Section1(){

    return <>
    {head}
    <Sect1 heading="About the Company" image1={img1}/>
    <Sect1 heading="Our Vision" image1={img2}/>
    <Sect1 heading="Our Mission" image1={img3}/>
    {section2}
    </>
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Section1 />);



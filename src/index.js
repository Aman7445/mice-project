import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {mice} from './mice';
import Display from './Display';

function Greeting() {
  return (
    <div className='greet'>
      {mice.map((bok) => {
        // const{Company,Remarks,Image} = bok;
        // return(
        //   <div>
        //     <img src={Image} alt=''/>
        //     <h3>{Company}</h3>
        //     <h1>{Remarks}</h1>
        //     </div>
        // )
        return(
          <Display bok={bok}></Display>
          // <div>
          //   <img src={bok.Image} alt="" />
          //   <h3>{bok.Company}</h3>
          //   <h1>{bok.Remarks}</h1>
          // </div>
        );
      })}

    </div> 
  );
}



ReactDom.render(<Greeting />,document.getElementById('root'));
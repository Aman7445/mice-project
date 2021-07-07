import React from 'react'

const Display = (props) => {
  const {Company,Remarks,Image}=props.bok;
  return (
    <article className='items'>
      <img src={Image} alt='' />
        <h1>{Company}</h1>
        <h4>{Remarks}</h4>
      
    </article>
  );
}

export default Display

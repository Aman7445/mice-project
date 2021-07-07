import React from 'react'

const Display = (props) => {
  const {id,Company,Remarks,Image}=props.bok;
  return (
    <article key={id} className='items'>
      <img src={Image} alt='' />
        <h4>{Company}</h4>
        <p>{Remarks}</p>
      
    </article>
  );
}

export default Display

import React from 'react';
import juhel from '../../images/juhel.png';
import emzor from '../../images/emzor.png';
import gsk from '../../images/gsk.png';




const PatnersSection = () => {     

  return (
    <section className='partner-carousel prtncardsply'
     style={{backgroundColor: "#f0f5fd",
             overflowY: "hidden", 
             padding: "0 0", 
             overflowX: "auto", 
             display: "flex",
             justifyContent: "space-around"
         }}>
      {
        [
          { title: 'nnpc', img: juhel, id: 1 },
          { title: 'shevron', img: emzor , id: 2},
          { title: 'shell', img: gsk , id: 3},
          { title: 'nnpc', img: juhel, id: 4 },
          { title: 'shevron', img: emzor , id: 5},
          { title: 'shell', img: gsk , id: 6},
        ].map(({ title, img, id }) => (
          <div className="partner-spacing">
          <img
            key={id}
            src={img}
            alt={title}
            className='partner-logo'
          />
          </div>
        ))
      }
      </section>
        
  );
}
 
export default PatnersSection;
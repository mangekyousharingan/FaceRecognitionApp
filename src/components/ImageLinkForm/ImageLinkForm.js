import React from 'react';
import './ImageLink.css'

const ImageLinkForm = () => {
  return (
    <div>
      <p className='f3'>
        {'Man, as you probably do not have your own brain, you are allowed to use this one. Do it carefully...'}
      </p>
      <div>
        <div className="center">
          <div className="form center pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center" type="text"/><br/>
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
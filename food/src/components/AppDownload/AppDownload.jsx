import React from 'react';
import "./appDownload.css";
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='App-download' id='App-download'>
    <p> For better experience download <br /> Tomato APP</p>
      <div className='app-Download-platforms'>
        <img src={assets.play_store} />

        <img src={assets.app_store} />
      </div>
      

    </div>
  );
}

export default AppDownload;

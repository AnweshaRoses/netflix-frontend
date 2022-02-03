import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import "./watch.scss"
export default function Watch() {
  return( 
  <div className='watch'>
      <div className="back">
          <ArrowBackOutlined/>
          Home
      </div>
      <video src="https://cdn.videvo.net/videvo_files/video/free/2021-04/small_watermarked/210329_06B_Bali_1080p_013_preview.webm" className="video" autoPlay progress controls />
  </div>
  );
}

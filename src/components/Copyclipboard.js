import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { AiFillCopy } from 'react-icons/ai';

function Copyclipboard() {

    

    const [clip, setClip] = useState({
      value: '0x42981d0bfb9092fcB5',
      copied: false,
    });

     function resetMessage() {
      setTimeout(() => {
        setClip({ copied: false, value: clip.value });
      }, 2000);
      };
    

    
    return (
      <div>
        <div className="position-relative">
        <CopyToClipboard text={clip.value}
              onCopy={() => setClip({copied: true,  value: clip.value})}>
                 <div onClick={resetMessage} className="btn_copy_outter">
                  <span className="text_to_copy">0x42981d0bf...b9092fcB5</span>
                  <button className="copybtn"><AiFillCopy className="copybtn_icon" /></button>
                </div>
          </CopyToClipboard>
          
          {clip.copied ? <span className="left_copied">Copied.</span> : null}
        </div>
         
      </div>
    )
}

export default Copyclipboard

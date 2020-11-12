import React from 'react'
import './../../../style/HBDKD.scss';
//import './../../../js/HBDKD.js';
function MsgForm() {
    return (
        <>
          <section className="section01">
          <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" >
            <defs>
              <filter id="brightness">
              <feComponentTransfer>
              <feFuncR type="linear" slope="0.3"/>
              <feFuncG type="linear" slope="0.3"/>
              <feFuncB type="linear" slope="0.3"/>
              </feComponentTransfer>
              </filter>  
              <radialGradient id="lanternGrad" cx="33.4551" cy="63.1367" r="59.6359" gradientUnits="userSpaceOnUse">
                <stop  offset="0" stopColor="#FCFFDD"/>
                <stop  offset="0.1218" stopColor="#FFFEB8"/>
                <stop  class="lanternMid" offset="0.2386" stopColor="#FCF954"/>
                <stop class="flicker"  offset="0.5838" stopColor="#FF510F"/>
                <stop class="flicker" offset="0.9036" stopColor="#501004"/>
                <stop  class="flicker" offset="0.9492" stopColor="#3D0A06"/>
                <stop class="lanternTop"  offset="1" stopColor="#501004"/>
              </radialGradient>
              <path id="lantern" fill="url(#lanternGrad)" d="M47.7,61.6c0,2.6-6.3,5.6-14.7,5.6s-14.7-2.9-14.7-5.6c0-2.6,6.3-5.6,14.7-5.6S47.7,58.9,47.7,61.6z
                M26.4,0C19.2,0-1.5,15.1,0.1,21.4C1.6,27.7,15.4,62,15.4,62s0.1,0.1,0.2,0.3c-0.1-0.3-0.1-0.5-0.1-0.8c0-4.7,7.5-8.3,17.4-8.3
                c9.9,0,17.4,3.6,17.4,8.3c0,0.1,0,0.2,0,0.2c2-3.6,10.9-33.1,11.9-42.7C63.3,9.3,34.2,0,26.4,0z"/>  
              <path id="bigHeart" d="M466.5,307.1l-76.4,65.2l-75.5-65.2l0,0c-12.2-11.6-19-28.9-15.6-47.7c3.8-21.4,21.3-38.6,42.8-42
                c19.5-3.1,37.4,4.5,48.7,17.9c11.3-13.4,29.2-21.1,48.7-17.9c21.5,3.5,39,20.6,42.8,42.1C485.5,278.2,478.8,295.5,466.5,307.1z"/>
              <path id="cloud" d="M499.9,274.3c0-1,0.1-2.1,0.1-3.1c0-38.2-31-69.2-69.2-69.2c-27.7,0-51.6,16.2-62.6,39.7
                c-6.1-4.4-13.7-7-22-7c-20.5,0-37.1,16-37.1,35.8c0,2.9,0.4,5.8,1.1,8.5c-23.3,5-40.9,26.1-40.9,51.4c0,29,23,51.1,51.4,51.1h168.7
                c27.2,0,49.2-23.2,49.2-53.6C538.6,301.7,522,279.7,499.9,274.3z"/>  
              
              
              <path id="heart" fill="#CC3232" d="M18.9,3.7c3.3-4,8.3-4.5,12.6-2.6c3.9,1.7,6.4,5.7,6.4,9.9l0,0c0,3.2-1.4,6.1-3.6,8.1h0
              L22.5,31c-0.9,0.9-2.1,2.4-3.6,2.4c-1.4,0-2.6-1.5-3.6-2.4L3.5,19.1C-1,15-1.2,7.7,3.1,3.3C7.5-1,14.8-0.9,18.9,3.7z"/>  
            </defs>
            <linearGradient id="bgGrad" gradientUnits="userSpaceOnUse" x1="400" y1="-1.795888e-008" x2="400" y2="600">
              <stop  offset="0" stopColor="#020111"/>
              <stop  offset="1" stopColor="#20202C"/>
            </linearGradient>
            <rect fill="url(#bgGrad)" width="100%" height="600"/>  

          </svg>


</section>

        </>
    )
}

export default MsgForm

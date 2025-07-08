// import { useState } from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

import './FinalButton.css';

export default function FinalButton() {
   return (
      <button 
         className='_btn btn-style btn-text bgc_red c_n_white'
         // onClick={}
         >Обсудить свою капсулу <IoIosArrowRoundForward className="arrow-icon" />
      </button> 
   );
}
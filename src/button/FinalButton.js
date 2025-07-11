// import { useState } from "react";

import { IoIosArrowRoundForward } from "react-icons/io";

import './FinalButton.css';

export default function FinalButton({
   userChoiseMain, 
   userChoiseAdd,

   setModalDisplay,
   setModalText
}) {
   const phoneNumber = '79137310361'; // Номер телефона в международном формате (без +)
   const message = `Привет, я хочу узнать больше о постельном белье в цветах "${userChoiseMain}" и "${userChoiseAdd}"!`; // Текст сообщения

   const encodedMessage = encodeURIComponent(message);
   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

   // const [modalDisplay, setModalDisplay] = useState('none');
   // const [modalText, setModalText] = useState('');

   const handleClick = () => {
      if (userChoiseMain === '' && userChoiseAdd === '') {
         setModalText('Выберете цвета')
         setModalDisplay('flex')
         return;
      }
      else if (userChoiseMain === '') {
         setModalText('Выберете основной цвет')
         setModalDisplay('flex')
         return;
      }
      else if (userChoiseAdd === '') {
         setModalText('Выберете дополнительный цвет')
         setModalDisplay('flex')
         return;
      }
      window.open(whatsappUrl, '_blank');
   };



   return (
      <button 
         className='_btn btn-style btn-text bgc_red c_n_white'
         onClick={handleClick}
         >Обсудить свою капсулу <IoIosArrowRoundForward className="arrow-icon" />
      </button> 
   );
}
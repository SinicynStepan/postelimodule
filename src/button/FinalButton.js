import { IoIosArrowRoundForward } from "react-icons/io";

import './FinalButton.css';

export default function FinalButton({
   userChoiseMain, 
   userChoiseAdd,
}) {
   const phoneNumber = '79137310361'; // Номер телефона в международном формате (без +)

   const addText = () => {
      let add_text = '';

      if (userChoiseMain !== '' && userChoiseAdd !== '') {
         add_text = ` в цветах "${userChoiseMain}" и "${userChoiseAdd}"`;
      }
      else if (userChoiseMain !== '' && userChoiseAdd === '') {
         add_text = ` в цветe "${userChoiseMain}"`;
      }
      else if (userChoiseMain === '' && userChoiseAdd !== '') {
         add_text = ` в цветe "${userChoiseAdd}"`;
      }
      else {
         add_text = `, помогите с выбором цветов`;
      }

      return add_text;
   }

   const message = `Привет, я хочу узнать больше о вашем постельном белье${addText()}!`;


   const encodedMessage = encodeURIComponent(message);
   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

   const handleClick = () => {
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
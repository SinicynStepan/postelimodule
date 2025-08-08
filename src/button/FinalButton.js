import { IoIosArrowRoundForward } from "react-icons/io";

import './FinalButton.css';

export default function FinalButton({
   userChoiseMain, 
   userChoiseAdd,
}) {

   const Text = () => { // функция для набора текста
      let text = '';

      if (userChoiseMain !== '' && userChoiseAdd !== '') {    // если пользователь выбрал 2 цвета
         text = ` в цветах "${userChoiseMain}" и "${userChoiseAdd}"`;
      }
      else if (userChoiseMain !== '' && userChoiseAdd === '') {   // если пользователь выбрал только основной цвет
         text = ` в цветe "${userChoiseMain}"`;
      }
      else if (userChoiseMain === '' && userChoiseAdd !== '') {   // если пользователь выбрал только дополнительный цвет
         text = ` в цветe "${userChoiseAdd}"`;
      }
      else {     // если пользователь ничего не выбрал
         text = `, помогите с выбором цветов`;
      }

      return `Привет, я хочу узнать больше о вашем постельном белье${text}!`; // возвращаем текст сообщения
   }


   const phoneNumber = '79137310361'; // Номер телефона в международном формате (без +)
   const message = Text(); // получаем сообщение из функции Text
   const encodedMessage = encodeURIComponent(message);   // кодируем сообщение
   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // ссылка на whatsapp с вставкой нужного сообщения

   const handleClick = () => {   // функция для открытия whatsapp по ссылке
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
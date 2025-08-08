import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Mousewheel, Navigation, Autoplay, EffectFade } from "swiper/modules";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import './Carousel.css';


// функция для определения размера экрана у пользователя 
function useWindowSize() { 
   const [windowSize, setWindowSize] = useState({
      user_width: window.innerWidth,         // ширина
      user_height: window.innerHeight,       // высота
   });

   useEffect(() => {
      // функция переопределяющая размеры при изменении окна пользователя
      function handleResize() {  
         setWindowSize({
            user_width: window.innerWidth,
            user_height: window.innerHeight,
         });
      }

      window.addEventListener('resize', handleResize);   // отлавливание изменения экрана
      
      return () => window.removeEventListener('resize', handleResize);  // удаляем обработчик событий
   }, []);

   return windowSize;   // возвращаем размер экрана
}


export default function Carousel(
   {
      arrayImages,
      arrayImagesLenght
   }) {
   const { user_width } = useWindowSize();   // ширина экрана пользователя


   const [isUserDo, setIsUserDo] = useState(false);   // параметр для понимания было ли сделано пользоввателем действие (true/false)

   const [isDeviceWithTouch, setIsDeviceWithTouch] = useState(false);   // параметр для понимания, что устройство больше планшета (true/false)

   const [usersDeviceImgWidth, setUsersDeviceImgWidth] = useState(); // параметр для размера фото (зависит от размера экрана пользователя)

   const [transformTime, setTransformTime] = useState(1);   // параметр времени перелистывания фото (секунды)
   const [countMove, setCountMove] = useState(0);  // параметр количества перелистываний
   const [move, setMove] = useState(0);   // параметр размера шага (px) 

   // функция для перелистывания вперёд 
   const nextImage = () => {
      if (countMove === arrayImagesLenght - 1) {   // если кнопка нажата на последней картинке, то переходим в самое начало за 0 секунд
         setCountMove(0)   // очищаем количество перелистываний
         setTransformTime(0);
         setMove(0)
      }
      else {   // иначе
         setCountMove(countMove => countMove + 1) // countMove++
         setTransformTime(1); // 1 секунда
         setMove(move => move -= usersDeviceImgWidth) // для движения вперёд надо ленту фото переместить на move (px) назад
      }
      
      setIsUserDo(true) // устанавливаем, что это сделал пользователь
   }

   // функция для перелистывания назад 
   const prevImage = () => {
      if (countMove === 0) {   // если кнопка нажата на первой картинке, то переходим в самый конец за 0 секунд
         setCountMove(countMove => arrayImagesLenght - 1)   // устанавливаем количество перелистываний, как будто долистали до последней картинке
         setTransformTime(0);
         setMove(-1 * (arrayImagesLenght - 1) * usersDeviceImgWidth) // двигаем ленту вперёд до последнего элеметна, для этого перемещаемся на -(количество * размер)
      }
      else {   // иначе
         setCountMove(countMove => countMove - 1)  // countMove--
         setTransformTime(1); // 1 секунда
         setMove(move => move += usersDeviceImgWidth) // для движения назад надо ленту фото переместить на move (px) вперёд
      }

      setIsUserDo(true) // устанавливаем, что это сделал пользователь
   }


   useEffect(() => {
      // набор if else проверок для определения:
      // usersDeviceImgWidth - размер фото в px
      // isDeviceWithTouch - true или false (либо меньше 1200px, либо больше)
      if (user_width > 2600) {
         setUsersDeviceImgWidth(1100)
         setIsDeviceWithTouch(false)
      }
      else if (user_width > 1800 && user_width <= 2600) {
         setUsersDeviceImgWidth(920)
         setIsDeviceWithTouch(false)
      }
      else if (user_width > 1200 && user_width <= 1800) {
         setUsersDeviceImgWidth(622)
         setIsDeviceWithTouch(false)
      }
      else if (user_width > 830 && user_width <= 1200) {
         setUsersDeviceImgWidth(622)
         setIsDeviceWithTouch(true)
      }
      else if (user_width > 550 && user_width <= 830) {
         setUsersDeviceImgWidth(520)
         setIsDeviceWithTouch(true)
      }
      else if (user_width > 400 && user_width <= 550) {
         setUsersDeviceImgWidth(380)
         setIsDeviceWithTouch(true)
      }
      else {
         setUsersDeviceImgWidth(280)
         setIsDeviceWithTouch(true)
      }

      // функция перелистывания вперёд (идентитчна nextImage)
      // используется для автоматического перелистывания
      const nextSlide = () => {
         if (countMove === arrayImagesLenght - 1) {
            setCountMove(0)
            setTransformTime(0);
            setMove(0)
         }
         else {
            setCountMove(countMove => countMove + 1)
            setTransformTime(1);
            setMove(move => move -= usersDeviceImgWidth)
         }
      }

      let stdInterval = 4000; // стандартный интервал (4 секунды)
      let longInterval = 10000;  // длинный интервал (10 секунды)

      if (isUserDo) {   // если пользователь сделал действие, то функция nextSlide вызывается с большим интервалом 
         const intervalId = setInterval(() => {
            nextSlide()
         }, longInterval);
         return () => clearInterval(intervalId);
      } 
      else if (isDeviceWithTouch) {
         const intervalId = setInterval(() => {
            console.log('next slide');
            
         }, longInterval);
         return () => clearInterval(intervalId);
      } 
      else {   // если пользователь не делал действие, то функция nextSlide вызывается со стандартным интервалом 
         const intervalId = setInterval(() => {
            nextSlide()
         }, stdInterval);
         return () => clearInterval(intervalId);
      }
      
      // массив зависимостей useEffect 
   }, [user_width, isUserDo, 
      countMove, arrayImagesLenght, move, usersDeviceImgWidth,
      setCountMove, setTransformTime, setMove,
      isDeviceWithTouch
   ])

   
   // стиль для перелистывавния зависит от transformTime и move
   const myTransformStyle = { 
      transition: `transform ${transformTime}s ease-in-out`,
      transform: `translateX(${move}px)`
   };


   if (!isDeviceWithTouch) // если пользовательское устройство не для управления пельцем (больше чем планшет), то отображаем карусель custom
      return (
         <div className='carousel'> 
            {/* кнопка назад */}
            <button 
               onClick={prevImage}
               className='carousel-btn btn-prev'
            >
               <MdOutlineArrowBackIos className="carousel-arrow-icons" />
            </button>
            <div className='carousel_container'>
               {
                  arrayImages.map(elem => (
                     <div 
                        key={elem.filePath} 
                        className='carousel_images'
                     >
                        <img 
                           src={elem.file} 
                           alt={elem.main_color + " " + elem.add_color}  
                           style={myTransformStyle}  
                        />
                     </div>
                  ))
               }
            </div>
            {/* кнопка вперёд */}
            <button 
               onClick={nextImage}
               className='carousel-btn btn-next'
            >
               <MdOutlineArrowForwardIos className="carousel-arrow-icons" />
            </button>
         </div>
      );
   else // иначе отображаем карусель Swiper
      return (
         <div className='carousel'>
            <Swiper
               modules={[
                  Mousewheel,
                  Navigation,
                  Autoplay,
                  EffectFade
               ]}
               slidesPerView="auto"
               mousewheel={{ forceToAxis: true }}
               className="custom-swiper"
               autoplay={{ delay: 6000 }}    // автоматическое перелистывание каждые 6 секунд
               effect="fade"  // эфект при перелистывании
               navigation  // отображение кнопок < и >
            >
               {arrayImages.map(elem => (
                  <SwiperSlide key={elem.filePath}>
                     <img 
                        src={elem.file} 
                        alt={elem.main_color + " " + elem.add_color}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      );
}
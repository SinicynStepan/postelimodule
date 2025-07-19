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


function useWindowSize() {
   const [windowSize, setWindowSize] = useState({
      user_width: window.innerWidth,
      user_height: window.innerHeight,
   });

   useEffect(() => {
      function handleResize() {
         setWindowSize({
            user_width: window.innerWidth,
            user_height: window.innerHeight,
         });
      }

      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return windowSize;
}


export default function Carousel(
   {
      arrayImages,
      arrayImagesLenght
   }) {
   const { user_width } = useWindowSize();


   const [isUserDo, setIsUserDo] = useState(false);

   const [isDeviceWithTouch, setIsDeviceWithTouch] = useState(false);

   const [usersDeviceImgWidth, setUsersDeviceImgWidth] = useState();

   const [transformTime, setTransformTime] = useState(1);
   const [countMove, setCountMove] = useState(0);
   const [move, setMove] = useState(0);

   const nextImage = () => {
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
      
      setIsUserDo(true)
   }

   const prevImage = () => {
      if (countMove === 0) {
         setCountMove(countMove => arrayImagesLenght - 1)
         setTransformTime(0);
         setMove(-1 * (arrayImagesLenght - 1) * usersDeviceImgWidth)
      }
      else {
         setCountMove(countMove => countMove - 1)
         setTransformTime(1);
         setMove(move => move += usersDeviceImgWidth)
      }

      setIsUserDo(true)
   }


   useEffect(() => {
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

      let stdInterval = 4000;
      let longInterval = 10000;

      if (isUserDo) {
         const intervalId = setInterval(() => {
            nextSlide()
         }, longInterval); // 1000 миллисекунд = 1 секунд
         return () => clearInterval(intervalId);
      } else if (isDeviceWithTouch) {
         const intervalId = setInterval(() => {
            console.log('next slide');
            
         }, longInterval); // 1000 миллисекунд = 1 секунд
         return () => clearInterval(intervalId);
      } else {
         const intervalId = setInterval(() => {
            nextSlide()
         }, stdInterval); // 1000 миллисекунд = 1 секунд
         return () => clearInterval(intervalId);
      }
      

   }, [user_width, isUserDo, 
      countMove, arrayImagesLenght, move, usersDeviceImgWidth,
      setCountMove, setTransformTime, setMove,
      isDeviceWithTouch
   ])

      
   const myTransformStyle = { 
      transition: `transform ${transformTime}s ease-in-out`,
      transform: `translateX(${move}px)`
   };


   if (!isDeviceWithTouch) 
      return (
         <div className='carousel'> 
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
            <button 
               onClick={nextImage}
               className='carousel-btn btn-next'
            >
               <MdOutlineArrowForwardIos className="carousel-arrow-icons" />
            </button>
         </div>
      );
   else 
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
               autoplay={{ delay: 6000 }}
               effect="fade"
               navigation
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
         
         // <div className='carousel'> 
         //    <button 
         //       onClick={prevImage}
         //       className='carousel-btn btn-prev'
         //    >
         //       <MdOutlineArrowBackIos className="carousel-arrow-icons" />
         //    </button>
         //    <div className='carousel_container'>
         //       {
         //          arrayImages.map(elem => (
         //             <div 
         //                key={elem.filePath} 
         //                className='carousel_images'
         //             >
         //                <img 
         //                   src={elem.file} 
         //                   alt={elem.main_color + " " + elem.add_color}  
         //                   style={myTransformStyle}  
         //                />
         //             </div>
         //          ))
         //       }
         //    </div>
         //    <button 
         //       onClick={nextImage}
         //       className='carousel-btn btn-next'
         //    >
         //       <MdOutlineArrowForwardIos className="carousel-arrow-icons" />
         //    </button>
         // </div>
      );
}
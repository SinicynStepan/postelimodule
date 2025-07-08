import { useState, useEffect } from 'react';

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

// type typeDevice = 'Laptop' | 'Tablet_L' | 'Tablet_S' | 'Phone_L' | 'Phone_S';

export default function Carousel(
   {
      arrayImages,
      arrayImagesLenght
   }) {

   let maxMoveWidth = 0;
   // const [usersDevice, setUsersDevice] = useState();
   const [usersDeviceImgWidth, setUsersDeviceImgWidth] = useState();

   const { user_width } = useWindowSize();

         
   const [transformTime, setTransformTime] = useState(1.2);
   const [countMove, setCountMove] = useState(0);
   const [move, setMove] = useState(0);

   const nextImage = () => {
      if (countMove === arrayImagesLenght - 1) {
         setCountMove(0)
         setTransformTime(0);
      }
      else {
         setCountMove(countMove + 1)
         setTransformTime(1.2);
      }

      setMove(-1 * usersDeviceImgWidth * countMove)

      console.log("move: " + move);
       console.log('countMove: ' + countMove);
      console.log('usersDeviceImgWidth: ' + usersDeviceImgWidth);
   }

   const prevImage = () => {
      if (countMove === 0) {
         setCountMove(arrayImagesLenght - 1)
         setTransformTime(0);
         setMove(-1 * usersDeviceImgWidth * countMove)
      }
      else {
         setCountMove(countMove - 1)
         setTransformTime(1.2);
         setMove(-1 * usersDeviceImgWidth * countMove)
      }

      // setMove(-1 * usersDeviceImgWidth * countMove)


      console.log("move: " + move);
       console.log('countMove: ' + countMove);
      console.log('usersDeviceImgWidth: ' + usersDeviceImgWidth);
      
   }


   useEffect(() => {
      if (user_width > 1200) {
         // setUsersDevice('Laptop')
         setUsersDeviceImgWidth(622)
      }
      else if (user_width > 830 && user_width <= 1200) {
         // setUsersDevice('Tablet_L')
         setUsersDeviceImgWidth(622)
      }
      else if (user_width > 550 && user_width <= 830) {
         // setUsersDevice('Tablet_S')
         setUsersDeviceImgWidth(520)
      }
      else if (user_width > 400 && user_width <= 550) {
         // setUsersDevice('Phone_L')
         setUsersDeviceImgWidth(380)
      }
      else {
         // setUsersDevice('Phone_S')
         setUsersDeviceImgWidth(280)
      }

      // maxMoveWidth = usersDeviceImgWidth * arrayImagesLenght;
      // const intervalId = setInterval(() => {
      //    nextImage();
      // }, 4000); // 4000 миллисекунд = 4 секунд

      // return () => clearInterval(intervalId);


      // console.log('countMove: ' + countMove);
      // console.log('usersDeviceImgWidth: ' + usersDeviceImgWidth);


   }, [user_width, maxMoveWidth, usersDeviceImgWidth, arrayImagesLenght, countMove])

      
   const myTransformStyle = { 
      transition: `transform ${transformTime}s ease`,
      transform: `translateX(${move}px)`
   };


   return (
      <div className='carousel'> 
         <button 
            onClick={() => prevImage()}
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
}
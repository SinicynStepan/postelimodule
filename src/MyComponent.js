import { useState, useEffect } from "react";

import { IoIosArrowRoundForward } from "react-icons/io";
import { PiSmileySadDuotone } from "react-icons/pi";

import './MyComponent.css';

import blackPink from './images/black-pink.png'
import bostonBlueGold from './images/boston_blue-gold.png'
import bostonBluePink from './images/boston_blue-pink.png'
import brownGold from './images/brown-gold.png'
import brownYellowGreen from './images/brown-yellow_green.png'
import goldNightRider from './images/gold-night_rider.png'
import greenPink from './images/green-pink.png'
import greenYellowGreen from './images/green-yellow_green.png'
import icebergYellowGreen from './images/iceberg-yellow_green.png'
import pinkYellowGreen from './images/pink-yellow_green.png'
import redGold from './images/red-gold.png'
import redPink from './images/red-pink.png'
import redYellowGreen from './images/red-yellow_green.png'
import resolutionBlueGold from './images/resolution_blue-gold.png'
import resolutionBluePink from './images/resolution_blue-pink.png'
import resolutionBlueYellowGreen from './images/resolution_blue-yellow_green.png'
import violetGold from './images/violet-gold.png'
import violetYellowGreen from './images/violet-yellow_green.png'

const arrImages = [
   {main_color: 'black', add_color: 'pink', file: blackPink, filePath: './images/black-pink.png'},
   {main_color: 'boston_blue', add_color: 'gold', file: bostonBlueGold, filePath: './images/boston_blue-gold.png'},
   {main_color: 'boston_blue', add_color: 'pink', file: bostonBluePink, filePath: './images/boston_blue-pink.png'},
   {main_color: 'brown', add_color: 'gold', file: brownGold, filePath: './images/brown-gold.png'},
   {main_color: 'brown', add_color: 'yellow_green', file: brownYellowGreen, filePath: './images/brown-yellow_green.png'},
   {main_color: 'gold', add_color: 'night_rider', file: goldNightRider, filePath: './images/gold-night_rider.png'},
   {main_color: 'green', add_color: 'pink', file: greenPink, filePath: './images/green-pink.png'},
   {main_color: 'green', add_color: 'yellow_green', file: greenYellowGreen, filePath: './images/green-yellow_green.png'},
   {main_color: 'iceberg', add_color: 'yellow_green', file: icebergYellowGreen, filePath: './images/iceberg-yellow_green.png'},
   {main_color: 'pink', add_color: 'yellow_green', file: pinkYellowGreen, filePath: './images/pink-yellow_green.png'},
   {main_color: 'red', add_color: 'gold', file: redGold, filePath: './images/red-gold.png'},
   {main_color: 'red', add_color: 'pink', file: redPink, filePath: './images/red-pink.png'},
   {main_color: 'red', add_color: 'yellow_green', file: redYellowGreen, filePath: './images/red-yellow_green.png'},
   {main_color: 'resolution_blue', add_color: 'gold', file: resolutionBlueGold, filePath: './images/resolution_blue-gold.png'},
   {main_color: 'resolution_blue', add_color: 'pink', file: resolutionBluePink, filePath: './images/resolution_blue-pink.png'},
   {main_color: 'resolution_blue', add_color: 'yellow_green', file: resolutionBlueYellowGreen, filePath: './images/resolution_blue-yellow_green.png'},
   {main_color: 'violet', add_color: 'gold', file: violetGold, filePath: './images/violet-gold.png'},
   {main_color: 'violet', add_color: 'yellow_green', file: violetYellowGreen, filePath: './images/violet-yellow_green.png'}
]

const arrImageLenght = 18;

const arrColor = [
   {c_name: "gold", c_code: "#DECA90"},
   {c_name: "yellow_green", c_code: "#C6C6BC"},
   {c_name: "pink", c_code: "#E0C6C2"},
   {c_name: "white", c_code: "#FFFFFF"},
   {c_name: "iceberg", c_code: "#C6E4D8"},
   {c_name: "violet", c_code: "#632C59"},
   {c_name: "red", c_code: "#882029"},
   {c_name: "brown", c_code: "#564035"},
   {c_name: "night_rider", c_code: "#2F2F2F"},
   {c_name: "green", c_code: "#2A6564"},
   {c_name: "boston_blue", c_code: "#4485A5"},
   {c_name: "resolution_blue", c_code: "#2E4173"}
]



export default function MyComponent() {
   const [userMainColor, setUserMainColor] = useState('');
   const [userAddColor, setUserAddColor] = useState('');

   function changeMainColor(value) {
      setUserMainColor(
         userMainColor === ''
         ?  userMainColor => value 
         :  userMainColor === value 
            ?  userMainColor => '' 
            :  userMainColor => value 
      )
   }
   function changeAddColor(value) {
      setUserAddColor(
         userAddColor === ''
         ?  userAddColor => value 
         :  userAddColor === value 
            ?  userAddColor => '' 
            :  userAddColor => value 
      )
   }

   function renderMainColor() {
      if (userMainColor === '')
         return   arrColor.map(elem => (
                     <button 
                        key={elem.c_name} 
                        className='_btn _colors' 
                        style={{backgroundColor: elem.c_code}}
                        onClick={() => changeMainColor(elem.c_name)}
                     ></button>
                  ))
      else
         return   arrColor.map(elem => (
            elem.c_name === userMainColor 
            ?  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code, border: '2px solid red'}}
                  onClick={() => changeMainColor(elem.c_name)}
               ></button>
            :  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code}}
                  onClick={() => changeMainColor(elem.c_name)}
               ></button>
         ))
   }  
   function renderAddColor() {
      if (userAddColor === '')
         return   arrColor.map(elem => (
            elem.c_name === "white"
            ?  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code, border: '1px solid black' }}
                  onClick={() => changeAddColor(elem.c_name)}
               ></button>
            :  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code}}
                  onClick={() => changeAddColor(elem.c_name)}
               ></button>
         ))
      else
         return   arrColor.map(elem => (
            elem.c_name === userAddColor 
            ?  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code, border: '2px solid red'}}
                  onClick={() => changeAddColor(elem.c_name)}
               ></button>
            :  elem.c_name === "white" 
            ?  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code, border: '1px solid black' }}
                  onClick={() => changeAddColor(elem.c_name)}
               ></button>
            :  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code}}
                  onClick={() => changeAddColor(elem.c_name)}
               ></button>
         ))
   }

   const [xWidth, setXWidth] = useState(622);
   const [axisX, setAxisX] = useState(0);
   const [transformTime, setTransformTime] = useState(0);
   const [isUserChoise, setIsUserChoise] = useState(false);

   useEffect(() => {
      const nextSlide = () => {
         if (axisX === (-xWidth * (arrImageLenght - 1)))
         {
            setAxisX(xWidth);
            setTransformTime(transformTime => transformTime = 0);
         }
         setAxisX(axisX => axisX - xWidth);
         setTransformTime(transformTime => transformTime = 1.2);
      }
      const intervalId = setInterval(() => {
         nextSlide();
      }, 4000); // 4000 миллисекунд = 4 секунд

      return () => clearInterval(intervalId);
   }, [axisX, xWidth]);

   const styles = { 
      transition: `transform ${transformTime}s ease`,
      transform: `translateX(${axisX}px)`
   };


   const [isFound, setIsFound] = useState(false);
   const [file_path, setFile_path] = useState('');

   function renderImages() {
      if (userMainColor === '' || userAddColor === '')
         return   arrImages.map(elem => (
                  <div className="image-content" key={elem.main_color}>
                     <img 
                        style={styles}
                        alt={elem.main_color + ' ' + elem.add_color}
                        src={elem.file}
                     />
                  </div>
                  ))
      else {

         for (let index = 0; index < arrImageLenght; index++) {
            if (arrImages[index].main_color === userMainColor && arrImages[index].add_color === userAddColor) {
               setFile_path(arrImages[index].file);
               setIsFound(true);
            }
            else 
               continue;
         }
         if (isFound)
            return   <div className="image-content">
                        <img 
                           alt={''}
                           src={file_path}
                        />
                     </div>
         else
            return   <div 
                        className="image-content bgc_warm_sand" 
                        style={{
                           display: 'flex', 
                           alignItems: "center",
                           justifyContent: 'center',
                           textAlign: 'center'
                        }}>
                        <PiSmileySadDuotone style={{
                           width: '80px',
                           height: '80px'
                        }} />
                        К сожалению такого сочетания пока нет<br/>
                        Но мы над этим работаем
                     </div>
      }
   } 


   return (
      <div className="component">
         <div className="title_container">
            <h1 className="title c_black">Цвет и детали. Чтобы <br/> все было <i><span className="title c_red">идеально</span></i></h1>
         </div>
         <div className="container-result">
            <div className="image-carousel">
               <div className="image-carousel-container">
                  <div className="image-carousel-container-content">
                     { renderImages() }
                  </div>
               </div>
            </div>
         </div>
         <div className="container-color_1">
            <h2 className="title _h2 c_white">Выбери <i>основной</i> цвет:</h2> 
            <div className='container-color-colorhand'>
               {  renderMainColor() }
            </div>
         </div>
         <div className="container-color_2">
            <h2 className="title _h2 c_n_black">Выбери <i><span className="c_red">дополнительный</span></i> цвет:</h2> 
            <div className='container-color-colorhand'>
               {  renderAddColor()  }
            </div>
         </div>
         <div className="container-finally">
            <h2 className="title _h1-2 c_n_black text_center">от 12.990 руб</h2>
            <button 
               className='_btn btn-style btn-text bgc_red c_n_white'
               // onClick={}
               >Обсудить свою капсулу <IoIosArrowRoundForward className="arrow-icon" />
            </button> 
         </div>
      </div>
   );
}
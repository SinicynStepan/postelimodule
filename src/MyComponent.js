import { useState } from "react";

import { BsX } from "react-icons/bs";

import Carousel from "./carousel/Carousel";
import FinalButton from "./button/FinalButton";

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
   {main_color: 'Черный', add_color: 'Розовый', file: blackPink, filePath: '../images/black-pink.png'},
   {main_color: 'Голубой', add_color: 'Золото', file: bostonBlueGold, filePath: '../images/boston_blue-gold.png'},
   {main_color: 'Голубой', add_color: 'Розовый', file: bostonBluePink, filePath: '../images/boston_blue-pink.png'},
   {main_color: 'Шоколад', add_color: 'Золото', file: brownGold, filePath: '../images/brown-gold.png'},
   {main_color: 'Шоколад', add_color: 'Серебро', file: brownYellowGreen, filePath: '../images/brown-yellow_green.png'},
   {main_color: 'Золото', add_color: 'Черный', file: goldNightRider, filePath: '../images/gold-night_rider.png'},
   {main_color: 'Изумруд', add_color: 'Розовый', file: greenPink, filePath: '../images/green-pink.png'},
   {main_color: 'Изумруд', add_color: 'Серебро', file: greenYellowGreen, filePath: '../images/green-yellow_green.png'},
   {main_color: 'Тиффани', add_color: 'Серебро', file: icebergYellowGreen, filePath: '../images/iceberg-yellow_green.png'},
   {main_color: 'Розовый', add_color: 'Серебро', file: pinkYellowGreen, filePath: '../images/pink-yellow_green.png'},
   {main_color: 'Винный', add_color: 'Золото', file: redGold, filePath: '../images/red-gold.png'},
   {main_color: 'Винный', add_color: 'Розовый', file: redPink, filePath: '../images/red-pink.png'},
   {main_color: 'Винный', add_color: 'Серебро', file: redYellowGreen, filePath: '../images/red-yellow_green.png'},
   {main_color: 'Темно_синий', add_color: 'Золото', file: resolutionBlueGold, filePath: '../images/resolution_blue-gold.png'},
   {main_color: 'Темно_синий', add_color: 'Розовый', file: resolutionBluePink, filePath: '../images/resolution_blue-pink.png'},
   {main_color: 'Темно_синий', add_color: 'Серебро', file: resolutionBlueYellowGreen, filePath: '../images/resolution_blue-yellow_green.png'},
   {main_color: 'Фиолетовый', add_color: 'Золото', file: violetGold, filePath: '../images/violet-gold.png'},
   {main_color: 'Фиолетовый', add_color: 'Серебро', file: violetYellowGreen, filePath: '../images/violet-yellow_green.png'}
]

const arrImageLenght = 18;

const arrColor = [
   {c_name: "Шоколад", c_code: "#4f372d"},
   {c_name: "Бежевый", c_code: "#d1b699"},
   {c_name: "Тиффани", c_code: "#4484a7"},
   {c_name: "Темно_синий", c_code: "#2b4371"},
   {c_name: "Винный", c_code: "#88202b"},
   {c_name: "Лаванда", c_code: "#9077b1"},
   {c_name: "Персик", c_code: "#ebb088"},
   {c_name: "Фисташка", c_code: "#8f9863"},
   {c_name: "Золото", c_code: "#dec990"},
   {c_name: "Серебро", c_code: "#cbcbcb"},
   {c_name: "Хаки", c_code: "#44602d"},
   {c_name: "Изумруд", c_code: "#2a6563"},
   {c_name: "Розовый", c_code: "#d19aaf"},
   {c_name: "Черный", c_code: "#111111"},
   {c_name: "Фиолетовый", c_code: "#541f4b"},
   {c_name: "Голубой", c_code: "#adcfce"},
   {c_name: "Белый", c_code: "#ffffff"},
]



export default function MyComponent() {
   const [modalDisplay, setModalDisplay] = useState('none');
   const [modalText, setModalText] = useState('');


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
            elem.c_name === "Черный"
            ?  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code, border: '1px solid white' }}
                  onClick={() => changeMainColor(elem.c_name)}
               ></button>
            :  <button 
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
            :  elem.c_name === "Черный" 
               ?  <button 
                     key={elem.c_name} 
                     className='_btn _colors' 
                     style={{backgroundColor: elem.c_code, border: '1px solid white' }}
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
            elem.c_name === "Белый"
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
            :  elem.c_name === "Белый" 
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

   let isFound = false;
   let index;

   function renderContent() {
      if (userMainColor === '' || userAddColor === '') {
         return   <Carousel 
                     arrayImages={arrImages} 
                     arrayImagesLenght={arrImageLenght}
                  />
      }
      else {
         for (let i = 0; i < arrImageLenght; i++) {
            if (arrImages[i].main_color === userMainColor && arrImages[i].add_color === userAddColor) {
               isFound = true;
               index = i;
            }
         }
         if (!isFound) {
            for (let i = 0; i < arrImageLenght; i++) {
               if (arrImages[i].add_color === userMainColor && arrImages[i].main_color === userAddColor) {
                  isFound = true;
                  index = i;
               }
            }
         }
         if (isFound) {
            return   <div className="image-content">
                        <img 
                           alt={arrImages[index].main_color + " " + arrImages[index].add_color}
                           src={arrImages[index].file}
                        />
                     </div>
         }
         return   <div
                     className='c_n_white title bgc_red not_found_image_text'
                     >
                     К сожалению такого сочетания пока нет,<br/>
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
            {  renderContent()  }
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
            <FinalButton 
               userChoiseMain={userMainColor} 
               userChoiseAdd={userAddColor} 
               modalDisplay={modalDisplay}
               modalText={modalText}
               setModalDisplay={setModalDisplay}
               setModalText={setModalText}
            />
         </div>
         <div className="modal-container" style={{display: modalDisplay}}>
            <div className="modal">
               <div className="modal-text">
                  <p>{modalText}</p>
               </div>
               <button
                  className="modal_esc"
                  onClick={() => setModalDisplay('none')}
               >
                  <BsX className="modal_esc-icons" />
               </button>
            </div>
         </div>
      </div>
   );
}
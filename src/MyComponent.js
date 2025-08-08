import { useState } from "react";

// импорты компонентов
import Carousel from "./carousel/Carousel";
import FinalButton from "./button/FinalButton";

import './MyComponent.css';

import { arrImages, arrImageLenght } from "./arrayColorImage";    // импорт массива arrImages и его размера

import arrColor from "./colors";    // импорт массива цветов



export default function MyComponent() {
   const [userMainColor, setUserMainColor] = useState('');  // основный цвет, выбранный пользователем
   const [userAddColor, setUserAddColor] = useState('');    // дополнительный цвет, выбранный пользователем

   function changeMainColor(value) {   // функция смены основного цвета
      setUserMainColor(
         userMainColor === ''          // проверка на то, выбрано ли хоть что-то
         ?  userMainColor => value     // если да, то вставляем выбор пользователя
         :  userMainColor === value    // если нет, то проверяем выбрали ли мы тоже самое, что и в прошлый раз
            ?  userMainColor => ''     // если да, то стираем выбор
            :  userMainColor => value  // если нет, то меняем на новый
      )
   }
   function changeAddColor(value) {    // функция смены дополнительного цвета
      setUserAddColor(
         userAddColor === ''           // проверка на то, выбрано ли хоть что-то
         ?  userAddColor => value      // если да, то вставляем выбор пользователя
         :  userAddColor === value     // если нет, то проверяем выбрали ли мы тоже самое, что и в прошлый раз
            ?  userAddColor => ''      // если да, то стираем выбор
            :  userAddColor => value   // если нет, то меняем на новый
      )
   }

   function renderMainColor() {  //функция для отображения палитры основных цветов
      if (userMainColor === '')     // если ничего не выбрано, то просто отображаем все цвета
         return   arrColor.map(elem => (
            elem.c_name === "Черный"   // проверка на чёрный цвет, ему нужна особая рамка из-за тёмного фона
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
         return   arrColor.map(elem => (    // иначе отображаем все цвета с выделением нужного
            elem.c_name === userMainColor 
            ?  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code, border: '2px solid red'}}
                  onClick={() => changeMainColor(elem.c_name)}
               ></button>
            :  elem.c_name === "Черный"     // проверка на чёрный цвет, ему нужна особая рамка из-за тёмного фона
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
   function renderAddColor() {     //функция для отображения палитры дополнительных цветов
      if (userAddColor === '')   // если ничего не выбрано, то просто отображаем все цвета
         return   arrColor.map(elem => (
            elem.c_name === "Белый"  // проверка на белый цвет, ему нужна особая рамка из-за светлого фона
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
         return   arrColor.map(elem => (  // иначе отображаем все цвета с выделением нужного
            elem.c_name === userAddColor 
            ?  <button 
                  key={elem.c_name} 
                  className='_btn _colors' 
                  style={{backgroundColor: elem.c_code, border: '2px solid red'}}
                  onClick={() => changeAddColor(elem.c_name)}
               ></button>
            :  elem.c_name === "Белый"    // проверка на белый цвет, ему нужна особая рамка из-за светлого фона
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

   function renderContent() {   //функция для отображения либо карусели всех фото, либо выбранного сочетания 
      if (userMainColor === '' || userAddColor === '') { // если ничего не выбрано, отображает карусель 
         return   <Carousel 
                     arrayImages={arrImages} 
                     arrayImagesLenght={arrImageLenght}
                  />
      }
      else {   // иначе ищем выбранное сочетание
         for (let i = 0; i < arrImageLenght; i++) {   // проходим по всему массиву 
            if (arrImages[i].main_color === userMainColor && arrImages[i].add_color === userAddColor) {  // если находим, то записываем:
               isFound = true;   // флаг, что нашли нужное 
               index = i;        // индекс нужного элемента в массиве
            }
         }
         if (!isFound) {   // если не нашли меняем местами цвета, которые пользователь выбрал (в массиве сочетания без повторения)
            for (let i = 0; i < arrImageLenght; i++) {   
               if (arrImages[i].add_color === userMainColor && arrImages[i].main_color === userAddColor) {    // если находим, то записываем:
                  isFound = true;   // флаг, что нашли нужное 
                  index = i;        // индекс нужного элемента в массиве
               }
            }
         }
         if (isFound) {    // если нашли отображаем нужный элемент
            return   <div className="image-content">
                        <img 
                           alt={arrImages[index].main_color + " " + arrImages[index].add_color}
                           src={arrImages[index].file}
                        />
                     </div>
         }
         return   <div     // если после всего не нашли, то такого элемента нет (такого не происходит, но если убрать 1 или больше фото, то будет)
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
            {  
               renderContent()  
            }
         </div>
         <div className="container-color_1">
            <h2 className="title _h2 c_white">Выбери <i>основной</i> цвет:</h2> 
            <div className='container-color-colorhand'>
               {  
                  renderMainColor() 
               }
            </div>
         </div>
         <div className="container-color_2">
            <h2 className="title _h2 c_n_black">Выбери <i><span className="c_red">дополнительный</span></i> цвет:</h2> 
            <div className='container-color-colorhand'>
               {  
                  renderAddColor() 
               }
            </div>
         </div>
         <div className="container-finally">
            <h2 className="title _h1-2 c_n_black text_center">от 12.990 руб</h2>
            <FinalButton 
               userChoiseMain={userMainColor} 
               userChoiseAdd={userAddColor} 
            />
         </div>
      </div>
   );
}
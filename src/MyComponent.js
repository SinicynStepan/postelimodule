import { useState } from "react";

import Carousel from "./carousel/Carousel";
import FinalButton from "./button/FinalButton";

import './MyComponent.css';




import bezjSilver from './images/bezj/bezj_silver.jpg'         // bezj
import bezjWhite from './images/bezj/bezj_white.jpg'
import blackBezj from './images/black/black_bezj.jpg'          // black
import blackBlue from './images/black/black_blue.jpg'
import blackChocolate from './images/black/black_chocolate.jpg'
import blackDarkBlue from './images/black/black_dark-blue.jpg'
import blackFistahka from './images/black/black_fistahka.jpg'
import blackGold from './images/black/black_gold.jpg'
import blackHakki from './images/black/black_hakki.jpg'
import blackIzumrude from './images/black/black_izumrude.jpg'
import blackLavanda from './images/black/black_lavanda.jpg'
import blackPeach from './images/black/black_peach.jpg'
import blackPink from './images/black/black_pink.jpg'
import blackSilver from './images/black/black_silver.jpg'
import blackTiffany from './images/black/black_tiffany.jpg'
import blackViolet from './images/black/black_violet.jpg'
import blackWhite from './images/black/black_white.jpg'
import blackWine from './images/black/black_wine.jpg'
import blueBezj from './images/blue/blue_bezj.jpg'             // blue
import blueFistahka from './images/blue/blue_fistahka.jpg'
import blueLavanda from './images/blue/blue_lavanda.jpg'
import bluePink from './images/blue/blue_pink.jpg'
import blueSilver from './images/blue/blue_silver.jpg'
import blueTiffany from './images/blue/blue_tiffany.jpg'
import blueWhite from './images/blue/blue_white.jpg'
import chocolateBezj from './images/chocolate/chocolate_bezj.jpg' // chocolate
import chocolateDarkBlue from './images/chocolate/chocolate_dark-blue.jpg'
import chocolateFistahka from './images/chocolate/chocolate_fistahka.jpg'
import chocolateGold from './images/chocolate/chocolate_gold.jpg'
import chocolateHakki from './images/chocolate/chocolate_hakki.jpg'
import chocolateIzumrude from './images/chocolate/chocolate_izumrud.jpg'
import chocolateLavanda from './images/chocolate/chocolate_lavanda.jpg'
import chocolatePeach from './images/chocolate/chocolate_peach.jpg'
import chocolatePink from './images/chocolate/chocolate_pink.jpg'
import chocolateSilver from './images/chocolate/chocolate_silver.jpg'
import chocolateTiffany from './images/chocolate/chocolate_tiffany.jpg'
import chocolateViolet from './images/chocolate/chocolate_violet.jpg'
import chocolateWine from './images/chocolate/chocolate_wine.jpg'
import chocolateBlue from './images/chocolate/chocolate-blue.jpg'
import chocolateWhite from './images/chocolate/chocolate-white.jpg'
import darkBlueBezj from './images/dark-blue/dark-blue_bezj.jpg'  // darkBlue
import darkBlueFistahka from './images/dark-blue/dark-blue_fistahka.jpg'
import darkBlueGold from './images/dark-blue/dark-blue_gold.jpg'
import darkBlueHakki from './images/dark-blue/dark-blue_hakki.jpg'
import darkBlueIzumrude from './images/dark-blue/dark-blue_izumrud.jpg'
import darkBlueLavanda from './images/dark-blue/dark-blue_lavanda.jpg'
import darkBluePeach from './images/dark-blue/dark-blue_peach.jpg'
import darkBluePink from './images/dark-blue/dark-blue_pink.jpg'
import darkBlueSilver from './images/dark-blue/dark-blue_silver.jpg'
import darkBlueTiffany from './images/dark-blue/dark-blue_tiffany.jpg'
import darkBlueViolet from './images/dark-blue/dark-blue_violet.jpg'
import darkBlueWine from './images/dark-blue/dark-blue_wine.jpg'
import darkBlueBlue from './images/dark-blue/dark-blue_blue.jpg'
import darkBlueWhite from './images/dark-blue/dark-blue_white.jpg'
import fistahkaBezj from './images/fistahka/fistahka_bezj.jpg'    // fistahka
import fistahkaSilver from './images/fistahka/fistahka_silver.jpg'
import fistahkaTiffany from './images/fistahka/fistahka_tiffany.jpg'
import fistahkaWhite from './images/fistahka/fistahka_white.jpg'
import goldBezj from './images/gold/gold_bezj.jpg'          // gold
import goldFistahka from './images/gold/gold_fastahka.jpg'
import goldLavanda from './images/gold/gold_lavanda.jpg'
import goldPink from './images/gold/gold_pink.jpg'
import goldSilver from './images/gold/gold_silver.jpg'
import goldTiffany from './images/gold/gold_tiffany.jpg'
import goldBlue from './images/gold/gold_blue.jpg'
import goldWhite from './images/gold/gold_white.jpg'
import hakkiBezj from './images/hakki/hakki_bezj.jpg'       // hakki
import hakkiFistahka from './images/hakki/hakki_fistahka.jpg'
import hakkiGold from './images/hakki/hakki_gold.jpg'
import hakkiIzumrude from './images/hakki/hakki_izumrud.jpg'
import hakkiLavanda from './images/hakki/hakki_lavannda.jpg'
import hakkiPeach from './images/hakki/hakki_peach.jpg'
import hakkiPink from './images/hakki/hakki_pink.jpg'
import hakkiSilver from './images/hakki/hakki_silver.jpg'
import hakkiTiffany from './images/hakki/hakki_tiffany.jpg'
import hakkiViolet from './images/hakki/hakki_violet.jpg'
import hakkiBlue from './images/hakki/hakki_blue.jpg'
import hakkiWhite from './images/hakki/hakki_white.jpg'
import hakkiWine from './images/hakki/hakki_wine.jpg'
import izumrudeBezj from './images/izumrude/izumrude_bezj.jpg'    // izumrude
import izumrudeFistahka from './images/izumrude/izumrude_fistahka.jpg'
import izumrudeGold from './images/izumrude/izumrude_gold.jpg'
import izumrudeLavanda from './images/izumrude/izumrude_lavanda.jpg'
import izumrudePeach from './images/izumrude/izumrude_peach.jpg'
import izumrudePink from './images/izumrude/izumrude_pink.jpg'
import izumrudeSilver from './images/izumrude/izumrude_silver.jpg'
import izumrudeTiffany from './images/izumrude/izumrude_tiffany.jpg'
import izumrudeBlue from './images/izumrude/izumrude_blue.jpg'
import izumrudeWhite from './images/izumrude/izumrude_white.jpg'
import lavandaBezj from './images/lavanda/lavanda_bezj.jpg'       // lavanda
import lavandaFistahka from './images/lavanda/lavanda_fistahka.jpg'
import lavandaPink from './images/lavanda/lavanda_pink.jpg'
import lavandaSilver from './images/lavanda/lavanda_silver.jpg'
import lavandaTiffany from './images/lavanda/lavanda_tiffany.jpg'
import lavandaWhite from './images/lavanda/lavanda_white.jpg'
import peachBezj from './images/peach/peach_bezj.jpg'       // peach
import peachFistahka from './images/peach/peach_fistahka.jpg'
import peachGold from './images/peach/peach_gold.jpg'
import peachLavanda from './images/peach/peach_lavanda.jpg'
import peachPink from './images/peach/peach_pink.jpg'
import peachSilver from './images/peach/peach_silver.jpg'
import peachTiffany from './images/peach/peach_tiffany.jpg'
import peachBlue from './images/peach/peach_blue.jpg'
import peachWhite from './images/peach/peach_white.jpg'
import pinkBezj from './images/pink/pink_bezj.jpg'       // pink
import pinkFistahka from './images/pink/pink_fistahka.jpg'
import pinkSilver from './images/pink/pink_silver.jpg'
import pinkTiffany from './images/pink/pink_tiffany.jpg'
import pinkWhite from './images/pink/pink_white.jpg'
import silverWhite from './images/silver/silver_white.jpg'  // silver
import tiffanyBezj from './images/tiffany/tiffany_bezj.jpg' // tiffany
import tiffanySilver from './images/tiffany/tiffany_silver.jpg'
import tiffanyWhite from './images/tiffany/tiffany_white.jpg'
import violetBezj from './images/violet/violet_bezj.jpg'    // violet
import violetFistahka from './images/violet/violet_fistahka.jpg'
import violetGold from './images/violet/violet_gold.jpg'
import violetIzumrude from './images/violet/violet_izumrude.jpg'
import violetLavanda from './images/violet/violet_lavanda.jpg'
import violetPeach from './images/violet/violet_peach.jpg'
import violetPink from './images/violet/violet_pink.jpg'
import violetSilver from './images/violet/violet_silver.jpg'
import violetTiffany from './images/violet/violet_tiffany.jpg'
import violetBlue from './images/violet/violet_blue.jpg'
import violetWhite from './images/violet/violet_white.jpg'
import wineBezj from './images/wine/wine_bezj.jpg'       // wine
import wineFistahka from './images/wine/wine_fistahka.jpg'
import wineGold from './images/wine/wine_gold.jpg'
import wineIzumrude from './images/wine/wine_izumrud.jpg'
import wineLavanda from './images/wine/wine_lavanda.jpg'
import winePeach from './images/wine/wine_peach.jpg'
import winePink from './images/wine/wine_pink.jpg'
import wineSilver from './images/wine/wine_silver.jpg'
import wineTiffany from './images/wine/wine_tiffany.jpg'
import wineViolet from './images/wine/wine_violet.jpg'
import wineBlue from './images/wine/wine_blue.jpg'
import wineWhite from './images/wine/wine_white.jpg'
import bezjBezj from './images/repeat/bezj_bezj.jpg'     // repeat
import blackBlack from './images/repeat/black_black.jpg'
import blueBlue from './images/repeat/blue_blue.jpg'
import chocolateChocolate from './images/repeat/chocolate_chocolate.jpg'
import darkBlueDarkBlue from './images/repeat/dark-blue_dark-blue.jpg'
import fistahkaFistahka from './images/repeat/fistahka_fistahka.jpg'
import goldGold from './images/repeat/gold_gold.jpg'
import hakkiHakki from './images/repeat/hakki_hakki.jpg'
import izumrudeIzumrude from './images/repeat/izumrude_izumrude.jpg'
import lavandaLavanda from './images/repeat/lavanda_lavanda.jpg'
import peachPeach from './images/repeat/peach_peach.jpg'
import pinkPink from './images/repeat/pink_pink.jpg'
import silverSilver from './images/repeat/silver_silver.jpg'
import tiffanyTiffany from './images/repeat/tiffany_tiffany.jpg'
import violetViolet from './images/repeat/violet_violet.jpg'
import whiteWhite from './images/repeat/white_white.jpg'
import wineWine from './images/repeat/wine_wine.jpg'



const arrImages = [
// bezj
   {main_color: 'Бежевый', add_color: 'Серебро', file: bezjSilver, filePath: './images/bezj/bezj_silver.jpg'},
   {main_color: 'Бежевый', add_color: 'Белый', file: bezjWhite, filePath: './images/bezj/bezj_white.jpg'},
// black
   {main_color: 'Черный', add_color: 'Бежевый', file: blackBezj, filePath: './images/black/black_bezj.jpg'},
   {main_color: 'Черный', add_color: 'Голубой', file: blackBlue, filePath: './images/black/black_blue.jpg'},
   {main_color: 'Черный', add_color: 'Шоколад', file: blackChocolate, filePath: './images/black/black_chocolate.jpg'},
   {main_color: 'Черный', add_color: 'Темно_синий', file: blackDarkBlue, filePath: './images/black/black_dark-blue.jpg'},
   {main_color: 'Черный', add_color: 'Фисташка', file: blackFistahka, filePath: './images/black/black_fistahka.jpg'},
   {main_color: 'Черный', add_color: 'Золото', file: blackGold, filePath: './images/black/black_gold.jpg'},
   {main_color: 'Черный', add_color: 'Хакки', file: blackHakki, filePath: './images/black/black_hakki.jpg'},
   {main_color: 'Черный', add_color: 'Изумруд', file: blackIzumrude, filePath: './images/black/black_izumrude.jpg'},
   {main_color: 'Черный', add_color: 'Лаванда', file: blackLavanda, filePath: './images/black/black_lavanda.jpg'},
   {main_color: 'Черный', add_color: 'Персик', file: blackPeach, filePath: './images/black/black_peach.jpg'},           ///////////
   {main_color: 'Черный', add_color: 'Розовый', file: blackPink, filePath: './images/black/black_pink.jpg'},
   {main_color: 'Черный', add_color: 'Серебро', file: blackSilver, filePath: './images/black/black_silver.jpg'},
   {main_color: 'Черный', add_color: 'Тиффани', file: blackTiffany, filePath: './images/black/black_tiffany.jpg'},
   {main_color: 'Черный', add_color: 'Фиолетовый', file: blackViolet, filePath: './images/black/black_violet.jpg'},
   {main_color: 'Черный', add_color: 'Белый', file: blackWhite, filePath: './images/black/black_white.jpg'},
   {main_color: 'Черный', add_color: 'Винный', file: blackWine, filePath: './images/black/black_wine.jpg'},
// blue
   {main_color: 'Голубой', add_color: 'Бежевый', file: blueBezj, filePath: './images/blue/blue_bezj.jpg'},
   {main_color: 'Голубой', add_color: 'Фисташка', file: blueFistahka, filePath: './images/blue/blue_fistahka.jpg'},
   {main_color: 'Голубой', add_color: 'Лаванда', file: blueLavanda, filePath: './images/blue/blue_lavanda.jpg'},
   {main_color: 'Голубой', add_color: 'Розовый', file: bluePink, filePath: './images/blue/blue_pink.jpg'},
   {main_color: 'Голубой', add_color: 'Серебро', file: blueSilver, filePath: './images/blue/blue_silver.jpg'},
   {main_color: 'Голубой', add_color: 'Тиффани', file: blueTiffany, filePath: './images/blue/blue_tiffany.jpg'},
   {main_color: 'Голубой', add_color: 'Белый', file: blueWhite, filePath: './images/blue/blue_white.jpg'},
// chocolate
   {main_color: 'Шоколад', add_color: 'Бежевый', file: chocolateBezj, filePath: './images/chocolate/chocolate_bezj.jpg'},
   {main_color: 'Шоколад', add_color: 'Темно_синий', file: chocolateDarkBlue, filePath: './images/chocolate/chocolate_dark-blue.jpg'},
   {main_color: 'Шоколад', add_color: 'Фисташка', file: chocolateFistahka, filePath: './images/chocolate/chocolate_fistahka.jpg'},
   {main_color: 'Шоколад', add_color: 'Золото', file: chocolateGold, filePath: './images/chocolate/chocolate_gold.jpg'},
   {main_color: 'Шоколад', add_color: 'Хакки', file: chocolateHakki, filePath: './images/chocolate/chocolate_hakki.jpg'},
   {main_color: 'Шоколад', add_color: 'Изумруд', file: chocolateIzumrude, filePath: './images/chocolate/chocolate_izumrud.jpg'},
   {main_color: 'Шоколад', add_color: 'Лаванда', file: chocolateLavanda, filePath: './images/chocolate/chocolate_lavanda.jpg'},
   {main_color: 'Шоколад', add_color: 'Персик', file: chocolatePeach, filePath: './images/chocolate/chocolate_peach.jpg'},           ///////////
   {main_color: 'Шоколад', add_color: 'Розовый', file: chocolatePink, filePath: './images/chocolate/chocolate_pink.jpg'},
   {main_color: 'Шоколад', add_color: 'Серебро', file: chocolateSilver, filePath: './images/chocolate/chocolate_silver.jpg'},
   {main_color: 'Шоколад', add_color: 'Тиффани', file: chocolateTiffany, filePath: './images/chocolate/chocolate_tiffany.jpg'},
   {main_color: 'Шоколад', add_color: 'Фиолетовый', file: chocolateViolet, filePath: './images/chocolate/chocolate_violet.jpg'},
   {main_color: 'Шоколад', add_color: 'Винный', file: chocolateWine, filePath: './images/chocolate/chocolate_wine.jpg'},
   {main_color: 'Шоколад', add_color: 'Голубой', file: chocolateBlue, filePath: './images/chocolate/chocolate-blue.jpg'},
   {main_color: 'Шоколад', add_color: 'Белый', file: chocolateWhite, filePath: './images/chocolate/chocolate-white.jpg'},
// darkBlue
   {main_color: 'Темно_синий', add_color: 'Бежевый', file: darkBlueBezj, filePath: './images/dark-blue/dark-blue_bezj.jpg'},
   {main_color: 'Темно_синий', add_color: 'Фисташка', file: darkBlueFistahka, filePath: './images/dark-blue/dark-blue_fistahka.jpg'},
   {main_color: 'Темно_синий', add_color: 'Золото', file: darkBlueGold, filePath: './images/dark-blue/dark-blue_gold.jpg'},
   {main_color: 'Темно_синий', add_color: 'Хакки', file: darkBlueHakki, filePath: './images/dark-blue/dark-blue_hakki.jpg'},
   {main_color: 'Темно_синий', add_color: 'Изумруд', file: darkBlueIzumrude, filePath: './images/dark-blue/dark-blue_izumrud.jpg'},
   {main_color: 'Темно_синий', add_color: 'Лаванда', file: darkBlueLavanda, filePath: './images/dark-blue/dark-blue_lavanda.jpg'},
   {main_color: 'Темно_синий', add_color: 'Персик', file: darkBluePeach, filePath: './images/dark-blue/dark-blue_peach.jpg'},           ///////////
   {main_color: 'Темно_синий', add_color: 'Розовый', file: darkBluePink, filePath: './images/dark-blue/dark-blue_pink.jpg'},
   {main_color: 'Темно_синий', add_color: 'Серебро', file: darkBlueSilver, filePath: './images/dark-blue/dark-blue_silver.jpg'},
   {main_color: 'Темно_синий', add_color: 'Тиффани', file: darkBlueTiffany, filePath: './images/dark-blue/dark-blue_tiffany.jpg'},
   {main_color: 'Темно_синий', add_color: 'Фиолетовый', file: darkBlueViolet, filePath: './images/dark-blue/dark-blue_violet.jpg'},
   {main_color: 'Темно_синий', add_color: 'Винный', file: darkBlueWine, filePath: './images/dark-blue/dark-blue_wine.jpg'},
   {main_color: 'Темно_синий', add_color: 'Голубой', file: darkBlueBlue, filePath: './images/dark-blue/dark-blue_blue.jpg'},
   {main_color: 'Темно_синий', add_color: 'Белый', file: darkBlueWhite, filePath: './images/dark-blue/dark-blue_white.jpg'},
// fistahka
   {main_color: 'Фисташка', add_color: 'Бежевый', file: fistahkaBezj, filePath: './images/fistahka/fistahka_bezj.jpg'},
   {main_color: 'Фисташка', add_color: 'Серебро', file: fistahkaSilver, filePath: './images/fistahka/fistahka_silver.jpg'},
   {main_color: 'Фисташка', add_color: 'Тиффани', file: fistahkaTiffany, filePath: './images/fistahka/fistahka_tiffany.jpg'},
   {main_color: 'Фисташка', add_color: 'Белый', file: fistahkaWhite, filePath: './images/fistahka/fistahka_white.jpg'},
// gold
   {main_color: 'Золото', add_color: 'Бежевый', file: goldBezj, filePath: './images/gold/gold_bezj.jpg'},
   {main_color: 'Золото', add_color: 'Фисташка', file: goldFistahka, filePath: './images/gold/gold_fastahka.jpg'},
   {main_color: 'Золото', add_color: 'Лаванда', file: goldLavanda, filePath: './images/gold/gold_lavanda.jpg'},
   {main_color: 'Золото', add_color: 'Розовый', file: goldPink, filePath: './images/gold/gold_pink.jpg'},
   {main_color: 'Золото', add_color: 'Серебро', file: goldSilver, filePath: './images/gold/gold_silver.jpg'},
   {main_color: 'Золото', add_color: 'Тиффани', file: goldTiffany, filePath: './images/gold/gold_tiffany.jpg'},
   {main_color: 'Золото', add_color: 'Голубой', file: goldBlue, filePath: './images/gold/gold_blue.jpg'},
   {main_color: 'Золото', add_color: 'Белый', file: goldWhite, filePath: './images/gold/gold_white.jpg'},
// hakki
   {main_color: 'Хакки', add_color: 'Бежевый', file: hakkiBezj, filePath: './images/hakki/hakki_bezj.jpg'},
   {main_color: 'Хакки', add_color: 'Фисташка', file: hakkiFistahka, filePath: './images/hakki/hakki_fistahka.jpg'},
   {main_color: 'Хакки', add_color: 'Золото', file: hakkiGold, filePath: './images/hakki/hakki_gold.jpg'},
   {main_color: 'Хакки', add_color: 'Изумруд', file: hakkiIzumrude, filePath: './images/hakki/hakki_izumrud.jpg'},
   {main_color: 'Хакки', add_color: 'Лаванда', file: hakkiLavanda, filePath: './images/hakki/hakki_lavannda.jpg'},
   {main_color: 'Хакки', add_color: 'Персик', file: hakkiPeach, filePath: './images/hakki/hakki_peach.jpg'},           ///////////
   {main_color: 'Хакки', add_color: 'Розовый', file: hakkiPink, filePath: './images/hakki/hakki_pink.jpg'},
   {main_color: 'Хакки', add_color: 'Серебро', file: hakkiSilver, filePath: './images/hakki/hakki_silver.jpg'},
   {main_color: 'Хакки', add_color: 'Тиффани', file: hakkiTiffany, filePath: './images/hakki/hakki_tiffany.jpg'},
   {main_color: 'Хакки', add_color: 'Фиолетовый', file: hakkiViolet, filePath: './images/hakki/hakki_violet.jpg'},
   {main_color: 'Хакки', add_color: 'Голубой', file: hakkiBlue, filePath: './images/hakki/hakki_blue.jpg'},
   {main_color: 'Хакки', add_color: 'Белый', file: hakkiWhite, filePath: './images/hakki/hakki_white.jpg'},
   {main_color: 'Хакки', add_color: 'Винный', file: hakkiWine, filePath: './images/hakki/hakki_wine.jpg'},
// izumrude
   {main_color: 'Изумруд', add_color: 'Бежевый', file: izumrudeBezj, filePath: './images/izumrude/izumrude_bezj.jpg'},
   {main_color: 'Изумруд', add_color: 'Фисташка', file: izumrudeFistahka, filePath: './images/izumrude/izumrude_fistahka.jpg'},
   {main_color: 'Изумруд', add_color: 'Золото', file: izumrudeGold, filePath: './images/izumrude/izumrude_gold.jpg'},
   {main_color: 'Изумруд', add_color: 'Лаванда', file: izumrudeLavanda, filePath: './images/izumrude/izumrude_lavanda.jpg'},
   {main_color: 'Изумруд', add_color: 'Персик', file: izumrudePeach, filePath: './images/izumrude/izumrude_peach.jpg'},           ///////////
   {main_color: 'Изумруд', add_color: 'Розовый', file: izumrudePink, filePath: './images/izumrude/izumrude_pink.jpg'},
   {main_color: 'Изумруд', add_color: 'Серебро', file: izumrudeSilver, filePath: './images/izumrude/izumrude_silver.jpg'},
   {main_color: 'Изумруд', add_color: 'Тиффани', file: izumrudeTiffany, filePath: './images/izumrude/izumrude_tiffany.jpg'},
   {main_color: 'Изумруд', add_color: 'Голубой', file: izumrudeBlue, filePath: './images/izumrude/izumrude_blue.jpg'},
   {main_color: 'Изумруд', add_color: 'Белый', file: izumrudeWhite, filePath: './images/izumrude/izumrude_white.jpg'},
// lavanda
   {main_color: 'Лаванда', add_color: 'Бежевый', file: lavandaBezj, filePath: './images/lavanda/lavanda_bezj.jpg'},
   {main_color: 'Лаванда', add_color: 'Фисташка', file: lavandaFistahka, filePath: './images/lavanda/lavanda_fistahka.jpg'},
   {main_color: 'Лаванда', add_color: 'Розовый', file: lavandaPink, filePath: './images/lavanda/lavanda_pink.jpg'},
   {main_color: 'Лаванда', add_color: 'Серебро', file: lavandaSilver, filePath: './images/lavanda/lavanda_silver.jpg'},
   {main_color: 'Лаванда', add_color: 'Тиффани', file: lavandaTiffany, filePath: './images/lavanda/lavanda_tiffany.jpg'},
   {main_color: 'Лаванда', add_color: 'Белый', file: lavandaWhite, filePath: './images/lavanda/lavanda_white.jpg'},
// peach
   {main_color: 'Персик', add_color: 'Бежевый', file: peachBezj, filePath: './images/peach/peach_bezj.jpg'},
   {main_color: 'Персик', add_color: 'Фисташка', file: peachFistahka, filePath: './images/peach/peach_fistahka.jpg'},
   {main_color: 'Персик', add_color: 'Золото', file: peachGold, filePath: './images/peach/peach_gold.jpg'},
   {main_color: 'Персик', add_color: 'Лаванда', file: peachLavanda, filePath: './images/peach/peach_lavanda.jpg'},
   {main_color: 'Персик', add_color: 'Розовый', file: peachPink, filePath: './images/peach/peach_pink.jpg'},
   {main_color: 'Персик', add_color: 'Серебро', file: peachSilver, filePath: './images/peach/peach_silver.jpg'},
   {main_color: 'Персик', add_color: 'Тиффани', file: peachTiffany, filePath: './images/peach/peach_tiffany.jpg'},
   {main_color: 'Персик', add_color: 'Голубой', file: peachBlue, filePath: './images/peach/peach_blue.jpg'},
   {main_color: 'Персик', add_color: 'Белый', file: peachWhite, filePath: './images/peach/peach_white.jpg'},
// pink
   {main_color: 'Розовый', add_color: 'Бежевый', file: pinkBezj, filePath: './images/pink/pink_bezj.jpg'},
   {main_color: 'Розовый', add_color: 'Фисташка', file: pinkFistahka, filePath: './images/pink/pink_fistahka.jpg'},
   {main_color: 'Розовый', add_color: 'Серебро', file: pinkSilver, filePath: './images/pink/pink_silver.jpg'},
   {main_color: 'Розовый', add_color: 'Тиффани', file: pinkTiffany, filePath: './images/pink/pink_tiffany.jpg'},
   {main_color: 'Розовый', add_color: 'Белый', file: pinkWhite, filePath: './images/pink/pink_white.jpg'},
// repeat
   {main_color: 'Бежевый', add_color: 'Бежевый', file: bezjBezj, filePath: './images/repeat/bezj_bezj.jpg'},
   {main_color: 'Черный', add_color: 'Черный', file: blackBlack, filePath: './images/repeat/black_black.jpg'},
   {main_color: 'Голубой', add_color: 'Голубой', file: blueBlue, filePath: './images/repeat/blue_blue.jpg'},
   {main_color: 'Шоколад', add_color: 'Шоколад', file: chocolateChocolate, filePath: './images/repeat/chocolate_chocolate.jpg'},
   {main_color: 'Темно_синий', add_color: 'Темно_синий', file: darkBlueDarkBlue, filePath: './images/repeat/dark-blue_dark-blue.jpg'},
   {main_color: 'Фисташка', add_color: 'Фисташка', file: fistahkaFistahka, filePath: './images/repeat/fistahka_fistahka.jpg'},
   {main_color: 'Золото', add_color: 'Золото', file: goldGold, filePath: './images/repeat/gold_gold.jpg'},
   {main_color: 'Хакки', add_color: 'Хакки', file: hakkiHakki, filePath: './images/repeat/hakki_hakki.jpg'},
   {main_color: 'Изумруд', add_color: 'Изумруд', file: izumrudeIzumrude, filePath: './images/repeat/izumrude_izumrude.jpg'},
   {main_color: 'Лаванда', add_color: 'Лаванда', file: lavandaLavanda, filePath: './images/repeat/lavanda_lavanda.jpg'},
   {main_color: 'Персик', add_color: 'Персик', file: peachPeach, filePath: './images/repeat/peach_peach.jpg'},           ///////////
   {main_color: 'Розовый', add_color: 'Розовый', file: pinkPink, filePath: './images/repeat/pink_pink.jpg'},
   {main_color: 'Серебро', add_color: 'Серебро', file: silverSilver, filePath: './images/repeat/silver_silver.jpg'},
   {main_color: 'Тиффани', add_color: 'Тиффани', file: tiffanyTiffany, filePath: './images/repeat/tiffany_tiffany.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Фиолетовый', file: violetViolet, filePath: './images/repeat/violet_violet.jpg'},
   {main_color: 'Белый', add_color: 'Белый', file: whiteWhite, filePath: './images/repeat/white_white.jpg'},
   {main_color: 'Винный', add_color: 'Винный', file: wineWine, filePath: './images/repeat/wine_wine.jpg'},
// silver
   {main_color: 'Серебро', add_color: 'Белый', file: silverWhite, filePath: './images/silver/silver_white.jpg'},
// tiffany
   {main_color: 'Тиффани', add_color: 'Бежевый', file: tiffanyBezj, filePath: './images/tiffany/tiffany_bezj.jpg'},
   {main_color: 'Тиффани', add_color: 'Серебро', file: tiffanySilver, filePath: './images/tiffany/tiffany_silver.jpg'},
   {main_color: 'Тиффани', add_color: 'Белый', file: tiffanyWhite, filePath: './images/tiffany/tiffany_white.jpg'},
// violet
   {main_color: 'Фиолетовый', add_color: 'Бежевый', file: violetBezj, filePath: './images/violet/violet_bezj.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Фисташка', file: violetFistahka, filePath: './images/violet/violet_fistahka.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Золото', file: violetGold, filePath: './images/violet/violet_gold.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Изумруд', file: violetIzumrude, filePath: './images/violet/violet_izumrude.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Лаванда', file: violetLavanda, filePath: './images/violet/violet_lavanda.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Персик', file: violetPeach, filePath: './images/violet/violet_peach.jpg'},           ///////////
   {main_color: 'Фиолетовый', add_color: 'Розовый', file: violetPink, filePath: './images/violet/violet_pink.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Серебро', file: violetSilver, filePath: './images/violet/violet_silver.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Тиффани', file: violetTiffany, filePath: './images/violet/violet_tiffany.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Голубой', file: violetBlue, filePath: './images/violet/violet_blue.jpg'},
   {main_color: 'Фиолетовый', add_color: 'Белый', file: violetWhite, filePath: './images/violet/violet_white.jpg'},
// wine
   {main_color: 'Винный', add_color: 'Бежевый', file: wineBezj, filePath: './images/wine/wine_bezj.jpg'},
   {main_color: 'Винный', add_color: 'Фисташка', file: wineFistahka, filePath: './images/wine/wine_fistahka.jpg'},
   {main_color: 'Винный', add_color: 'Золото', file: wineGold, filePath: './images/wine/wine_gold.jpg'},
   {main_color: 'Винный', add_color: 'Изумруд', file: wineIzumrude, filePath: './images/wine/wine_izumrud.jpg'},
   {main_color: 'Винный', add_color: 'Лаванда', file: wineLavanda, filePath: './images/wine/wine_lavanda.jpg'},
   {main_color: 'Винный', add_color: 'Персик', file: winePeach, filePath: './images/wine/wine_peach.jpg'},           ///////////
   {main_color: 'Винный', add_color: 'Розовый', file: winePink, filePath: './images/wine/wine_pink.jpg'},
   {main_color: 'Винный', add_color: 'Серебро', file: wineSilver, filePath: './images/wine/wine_silver.jpg'},
   {main_color: 'Винный', add_color: 'Тиффани', file: wineTiffany, filePath: './images/wine/wine_tiffany.jpg'},
   {main_color: 'Винный', add_color: 'Фиолетовый', file: wineViolet, filePath: './images/wine/wine_violet.jpg'},
   {main_color: 'Винный', add_color: 'Голубой', file: wineBlue, filePath: './images/wine/wine_blue.jpg'},
   {main_color: 'Винный', add_color: 'Белый', file: wineWhite, filePath: './images/wine/wine_white.jpg'},
]

const arrImageLenght = 153;

const arrColor = [
   {c_name: "Шоколад", c_code: "#3d1505"},
   {c_name: "Бежевый", c_code: "#bc9d7c"},
   {c_name: "Тиффани", c_code: "#839e9c"},
   {c_name: "Темно_синий", c_code: "#182f4a"},
   {c_name: "Винный", c_code: "#700921"},
   {c_name: "Лаванда", c_code: "#7c6c91"},
   {c_name: "Персик", c_code: "#ca7e46"},
   {c_name: "Фисташка", c_code: "#928c66"},
   {c_name: "Золото", c_code: "#9e6d28"},
   {c_name: "Серебро", c_code: "#aeafab"},
   {c_name: "Хакки", c_code: "#273311"},
   {c_name: "Изумруд", c_code: "#0b614b"},
   {c_name: "Розовый", c_code: "#b5758b"},
   {c_name: "Черный", c_code: "#222222"},
   {c_name: "Фиолетовый", c_code: "#493342"},
   {c_name: "Голубой", c_code: "#738ba2"},
   {c_name: "Белый", c_code: "#ffffff"},
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
            />
         </div>
      </div>
   );
}
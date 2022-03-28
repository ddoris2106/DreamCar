import React from 'react';
import ReactDOM from 'react-dom';
import DreamCarApp from './dreamCarApp';


ReactDOM.render( 
  <DreamCarApp />
, document.querySelector(".app"));

//Change the display video 

const video = document.querySelector(".display__video video");
const videos = ["videos/car1.mp4", "videos/car2.mp4", "videos/car3.mp4", "videos/car4.mp4", "videos/car5.mp4", "videos/car6.mp4"];

let num = Math.floor(Math.random() * 6);

video.src = videos[num];
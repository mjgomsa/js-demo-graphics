//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics

//https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started

//=============== CANVAS SET UP ===================
// get canvas object:
const canvas = document.querySelector(".myCanvas");

// set window width and height = canvas width and height
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//special reference to the drawing area called a context
const ctx = canvas.getContext("2d");

// add a background to the canvas
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

// ================================================
// DRAWING SIMPLE SHAPES
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(50, 50, 100, 150);
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(75, 75, 100, 100);
ctx.fillStyle = "rgba(255, 0, 255, 0.75)"; // alpha component rgba -> transparency
ctx.fillRect(25, 100, 175, 50);

ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Drawing Simple Shapes", 250, 130);

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect(50, 50, 100, 150);

// ctx.strokeStyle = "white";
// ctx.lineWidth = 1;
// ctx.font = "36px arial";
// ctx.strokeText("Canvas text", 50, 50);

// ctx.fillStyle = "red";
// ctx.font = "48px georgia";
// ctx.fillText("Canvas text", 50, 150);

// canvas.setAttribute("aria-label", "Canvas text");

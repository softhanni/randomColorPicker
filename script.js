// var math = Math;
// console.log(Math.round(Math.random() *255))

function changeC (){
    var rgb = 'rgb(0, 0, 0)';
   
    rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');
var color ;
         rgb[0] = Math.round(Math.random() *255)
         rgb[1] = Math.round(Math.random() *255)
         rgb[2] = Math.round(Math.random() *255)

          rgb = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
        

document.querySelector(".color").style.backgroundColor = rgb;
document.querySelector(".value").innerText = rgb;
document.querySelector("#changeColor").style.backgroundColor = rgb;

}


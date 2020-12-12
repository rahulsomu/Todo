document.querySelector('.btn').addEventListener('mousedown', function(){
    const firstColor=Math.floor(Math.random()*254+1);
    const secondColor=Math.floor(Math.random()*254+1);
    const thirdColor=Math.floor(Math.random()*254+1);
    // const color='rgb('+Math.floor(Math.random()*254+1)+','+Math.floor(Math.random()*254+1)+','+Math.floor(Math.random()*254+1)+')';
    const color='rgb('+firstColor+','+secondColor+','+thirdColor+')';
    const color2='rgb('+eval(firstColor+50)+','+eval(secondColor+50)+','+eval(thirdColor+50)+')';
    const color3='rgb('+eval(firstColor-50)+','+eval(secondColor-50)+','+eval(thirdColor-50)+')';
    const color4='rgb('+eval(firstColor-100)+','+eval(secondColor-100)+','+eval(thirdColor-100)+')';

    // const color2='rgb('+(Math.floor(Math.random()*254+1)+10)+','+(Math.floor(Math.random()*254+1)+10)+','+(Math.floor(Math.random()*254+1)+10)+')';
    console.log(color2);
    document.querySelector('.btn2').style.backgroundColor=color2;
    document.querySelector('.btn2').style.visibility='visible';
    document.querySelector('.btn3').style.backgroundColor=color3;
    document.querySelector('.btn3').style.visibility='visible';
    document.querySelector('.btn4').style.backgroundColor=color4;
    document.querySelector('.btn4').style.visibility='visible';

    // let r = Math.random().toString(36).substring(6);
    // const color='rgb('+ Math.floor(Math.random()*90000+100000);
   
   
    console.log(color);
    document.querySelector('.btn').style.boxShadow='0px 4px 20px -1px rgba(0,0,0,0.80)';
    document.querySelector('body').style.backgroundColor=color;
    document.querySelector('.btn').style.backgroundColor=color;
    document.querySelector('#color-name').textContent=color;
    document.querySelector('#color-similar').textContent=color2;
    document.querySelector('#color-similar2').textContent=color3;
    document.querySelector('#color-similar3').textContent=color4;
    document.querySelector('#color-name').style.color='beige';
    document.querySelector('#color-similar').style.color='black';
    document.querySelector('#color-similar2').style.color='beige';
    document.querySelector('#color-similar3').style.color='beige';
    
    
    

})
document.querySelector('.btn').addEventListener('mouseup', function(){
    document.querySelector('.btn').style.boxShadow='0px 15px 39px -1px rgba(0,0,0,0.59)';
})
document.querySelector('.btn').addEventListener('doubleclick', function(){

})


// const randomAlphabet=function(){
//     let all='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let arrall=[];
//     arrall =all.split('');
// //    for(let i=0;i<arrall.length;i++){
// //     console.log( arrall[i]);
// //    }
// let num=Math.floor(Math.random()*61+1);
// return(arrall[num]);
// };
// randomAlphabet();
// Math.floor(Math.random()*10+1)
var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/flower.jpg'){
        myImage.setAttribute('src','images/sky.jpg');
    }else{
        myImage.setAttribute('src','images/flower.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('貴方の名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent  = 'Mozillaはすばらしいよ、' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('Item');
    myHeading.textContent =  'Mozillaはすばらしいよ、' + storedName;
}

myButton.onclick = function(){
    setUserName();
}
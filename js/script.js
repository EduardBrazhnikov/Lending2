"use strict"
 $(function() {
    $('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
});
$(document).ready(function() {
/*Слайдер*/
function initializeSlider(elem,arrImg,width,height,myText){
	var leftDirection = false
	var container = document.createElement('div')
	container.style = "width:"+width+"%;height:"+height+"vh;position:relative;overflow:hidden;"
	for(var i = 0; i < arrImg.length; i++){
		var imgDiv = document.createElement('div')
		imgDiv.style = "position:absolute;top:0;left:"+ ((i-1)*width)+"%;height:"+height+"vh;width:"+ width + "%;transition:2s; z-index:5000;"
		imgDiv.setAttribute('class','images');
	for(var t = 0; t < myText.length; t++) {
		imgDiv.innerHTML = "<div class='titleSlide'>"+myText[t]+"</div>";	
    if (i==t) {break;}	
	}
		var img = document.createElement('img')
		img.style="height:100%;width:100%;display:block;cursor:pointer; object-fit: cover; filter: brightness(40%)"
		img.setAttribute('src',arrImg[i])
		img.setAttribute('alt',arrImg[i])
		imgDiv.appendChild(img)
		container.appendChild(imgDiv)
		var flag = true
		container.onclick = function(event){
			if((event.target.tagName == 'IMG') && flag){
				flag = false
				var changePosImg = document.querySelectorAll('.images')
				if(leftDirection){
					for(var j = 0; j < changePosImg.length; j++){
						changePosImg[j].style.left = parseInt(changePosImg[j].style.left,10) - width + '%'
					}
					var prev = event.target.parentElement.parentElement.firstElementChild.cloneNode(true);
					container.removeChild(event.target.parentElement.parentElement.firstElementChild)
					prev.style.left = width*(changePosImg.length-1)/2+"%";
					container.appendChild(prev);
				}
				else{
					for(var j = 0; j < changePosImg.length; j++){
						changePosImg[j].style.left = parseInt(changePosImg[j].style.left,10) + width + '%'
					}
					var prev = event.target.parentElement.parentElement.lastElementChild.cloneNode(true);
					container.removeChild(event.target.parentElement.parentElement.lastElementChild)
					prev.style.left = -width*(changePosImg.length-1)/2+"%";
					container.insertBefore(prev,container.firstElementChild);
				}
				var timer = setTimeout(function(){
					flag = true
					clearTimeout(timer)
				},2000)
			}
		}
	}
	elem.appendChild(container)
	var timer2 = setInterval(function(){
		event = new MouseEvent("click",{bubbles:true});
		container.children[2].lastElementChild.dispatchEvent(event);
	},7000)
	$('.mobileMenu').click(function() {
      clearInterval(timer2);
    });
	
}
var slider = document.getElementsByClassName('slider')[0]
var images = ['img/slider.jpg','img/slider2.jpg','img/slider3.jpg']
var sliderText = ['Опытные электрики','Срочный вызов электрика','Все виды электромонтажных работ']
initializeSlider(slider,images,100,100,sliderText);	
/*Меню*/
$('.mobileMenu').click(function(e) {
var $Mnavigation = $('.myMenu');
if ($Mnavigation.css('display') != 'block') {
$Mnavigation.show();
var firstClick = true;
$(document).bind('click.myEvent', function(e) {
if (!firstClick && $(e.target).closest('.myMenu').length == 0) {
$Mnavigation.hide();
$(document).unbind('click.myEvent');
}
firstClick = false;
});
}
e.preventDefault();
});
$('.Mwork').click(function() {
var h = $('#work').offset();
$('body,html').animate({scrollTop:h.top},700);
});	
$('.Madvantages').click(function() {
var h = $('#advantages').offset();
$('body,html').animate({scrollTop:h.top},700);
});	 
$('.Mprise').click(function() {
var h = $('#prise').offset();
$('body,html').animate({scrollTop:h.top},700);
});
$('.Mcontact').click(function() {
var h = $('#contact').offset();
$('body,html').animate({scrollTop:h.top},700);
});
$('.callElectric').click(function() {
var h = $('#contacts').offset();
$('body,html').animate({scrollTop:h.top},700);
});
/*Прокрутка вверх*/
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('.topButton').fadeIn();
} else {
$('.topButton').fadeOut();
}
});
$('.topButton').click(function() {
$('body,html').animate({scrollTop:0},700);
});
/*Таймер*/
setInterval(function getTime () {
	var time = new Date();
    var time2 = new Date(2019, 6, 4, 0, 0, 0, 0);
	var hourNow = time.getHours();
	var resultHours = 24-hourNow;
	var minutsNow = time.getMinutes();
	var resultMinutes = 60-minutsNow;
	var seconsNow = time.getSeconds();
	var resultSeconds = 60-seconsNow;
	var time3 = time2 - time;
	var second = time3/1000;
	var minute = second/60;
	var hour = minute/60;
	var dey = parseInt(hour/24);
	$('#days').text(dey);
	$('#hours').text(resultHours);
	$('#minutes').text(resultMinutes);
	$('#seconds').text(resultSeconds);
}, 1000);
});
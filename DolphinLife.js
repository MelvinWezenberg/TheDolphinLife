$(document).ready(()=> {

//GOOGLE MAPS
  function initMap() {
    var uluru = {lat: 45.724738, lng: 11.982582};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

// QUIZ
  let slides=[$('#q1'),$('#q2'),$('#q3'),$('#q4'),$('#dolphinManiac')]
  let buttons=[$('#q1C'),$('#q2C'),$('#q3C'),$('#q4C')];

  // functions for quiz
  function switchSlide(button,oldSlide,newSlide,message){
    button.on("click",() =>{
      oldSlide.hide();
      newSlide.slideToggle();
      message.hide()
    });
  };

  function textChange(a,b){
    a.text(b);
  }

  //start quiz
  switchSlide($('#quizStart'),$('#quizPresentation'),$('#q1'),$("#error"));

  // for loop to swap questions
  for (let i = 0; i < 4; i++){
    switchSlide(buttons[i],slides[i],slides[i+1],$("#error"))
  };

  //show error
  $("button[name='incorrect']").on("click",() =>{
    $("#error").show();
  });

  // restart quiz
  switchSlide($("#restart"),$("#dolphinManiac"),$("#q1"));




});

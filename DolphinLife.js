$(()=> {
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
let mistakes=0;

  // functions for quiz
function switchSlide(button,oldSlide,newSlide){
  button.on("click",() =>{
    oldSlide.hide();
    newSlide.slideToggle();
  });
};

function textChange(a,b){
  a.text(b);
}

//start quiz
switchSlide($('#quizStart'),$('#quizPresentation'),$('#q1'));

// for loop to swap questions
for (let i = 0; i < 4; i++){
switchSlide(buttons[i],slides[i],slides[i+1])
};

//count mistakes
$('button[name="incorrect"]').on("click",() =>{
    mistakes++
  });

// restart quiz
$("#restart").on("click",() =>{
  q1.slideToggle();
  dolphinManiac.hide();
  mistakes=0;
} );

// change message
textChange ($('#numberMistakes'),"You did "+mistakes+" mistakes")






});

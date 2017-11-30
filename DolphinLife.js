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

//DOLPHINS DESCRIPTION

// Test 1

 //variables
 // let dolphinsButtons=[$('#bAmazon'), $('#bBaiji'), $('#bCommerson'), $('#bBottlenose'), $('#bIrrawaddy'), $('#bSpinner')];
 // let dolphinsInfo =[$('#amazon'), $('#caiji'), $('#commerson'), $('#bottlenose'), $('#irrawaddy'), $('#spinner')];
 // let a;
  //shows the info of the 1' element of the array, hides the others
 // function showInfo (button,array){
 //   button.on("click",() =>{
 //     array[0].slideToggle;
 //     for (let num = 1; num < array.length; num++)
 //     array[num].hide();
 //   });
 //    //reorders the array putting as a first element the "correct" one
 //   function reorder (name,array){
 //     for (let i=0; i<array.length; i++){
 //       if(array[i]==name){
 //         a=array[0];
 //         array[0]=array[i];
 //         array[i]=a;
 //       }
 //     }
 //     };
 //  //run the functions
 //  for (let i=0; i<array.length; i++){
 //    reorder (dolphinsInfo[i];dolphinsInfo);
 //    showInfo (dolphinButtons[i],dolphinsInfo);
 //  };

// Test 2

 // let button=[$('button[name='amazon']'), $('button[name='caiji']'), $('button[name='commerson']'), $('button[name='bottlenose']'), $('button[name='irrawaddy']'), $('button[name='spinner']')];
 // let info=$('div[name='amazon']'), $('div[name='caiji']'), $('div[name='commerson']'), $('div[name='bottlenose']'), $('div[name='irrawaddy']'), $('div[name='spinner']')];
 // for (let i=0; i<info.length; i++){
 //   info[i].on("click",() =>{
 //     info[i].slideToggle();
 //     for (let num=i; num<info.length; num++){
 //       info[num].hide;
 //     }
 //     for (let x=i; x>=0; x--){
 //       info[x].hide;
 //     }
 // });

 //It does not work, sorry Aironas, no DRY code this time! As you can see I really tried.
 function showInfo (button,a,b,c,d,e,f){
   button.on("click",() =>{
     a.slideToggle();
     b.hide();
     c.hide();
     d.hide();
     e.hide();
     f.hide();
   });
 };
 showInfo($('#bAmazon'),$('#amazon'), $('#baiji'), $('#commerson'), $('#bottlenose'), $('#irrawaddy'), $('#spinner'));
 showInfo($('#bBaiji'), $('#baiji'),$('#amazon'), $('#commerson'), $('#bottlenose'), $('#irrawaddy'), $('#spinner'));
 showInfo($('#bCommerson'), $('#commerson'), $('#baiji'),$('#amazon'), $('#bottlenose'), $('#irrawaddy'), $('#spinner'));
 showInfo($('#bBottlenose'), $('#bottlenose'), $('#baiji'),$('#amazon'), $('#commerson'),  $('#irrawaddy'), $('#spinner'));
 showInfo($('#bIrrawaddy'), $('#irrawaddy'), $('#baiji'),$('#amazon'), $('#commerson'), $('#bottlenose'),  $('#spinner'));
 showInfo($('#bSpinner'), $('#spinner'), $('#baiji'),$('#amazon'), $('#commerson'), $('#bottlenose'), $('#irrawaddy'));


// FORM
  function validate()
     {

        if( document.First Name.value == "" )
        {
           alert( "Please provide your First Name!" );
           document.First Name.focus() ;
           return false;
        };
});
});

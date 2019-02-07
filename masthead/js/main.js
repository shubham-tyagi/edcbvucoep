  var element_position = $('#scroll-to').offset().top;
var screen_height = $(window).height();
var activation_offset = 0.3;//determines how far up the the page the element needs to be before triggering the function
var activation_point = element_position - (screen_height * activation_offset);
var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer

//Does something when user scrolls to it OR
//Does it when user has reached the bottom of the page and hasn't triggered the function yet
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;

    var element_in_view = y_scroll_pos > activation_point;
    var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

    if(element_in_view||has_reached_bottom_of_page) {
        //Do something
        counting();
 	counting1();
 	counting2();
 	counting3();
    }
});
 	var count=document.getElementById('counter').innerText;
 	var temp=count-0
 	function counting (){
 		if(temp<=2000){
 			setTimeout(function(){
 				document.getElementById('counter').innerText=temp;
 				temp=temp+2;
 				counting();
 			},70);
 		}
 			else{
 				setTimeout(function(){
 					document.getElementById('counter').innerText=2000;
 				},40)
 			}
 		}
 		
 	var count1=document.getElementById('counter1').innerText;
 	var temp1=count1-0
 	function counting1 (){
 		if(temp1<=2000){
 			setTimeout(function(){
 				document.getElementById('counter1').innerText=temp1;
 				temp1=temp1+2;
 				counting1();
 			},70);
 		}
 			else{
 				setTimeout(function(){
 					document.getElementById('counter1').innerText=2000;
 				},70)
 			}
 		}

 		var count2=document.getElementById('counter2').innerText;
 	var temp2=count2-0;
 	function counting2 (){
 		if(temp2<=2000){
 			setTimeout(function(){
 				document.getElementById('counter2').innerText=temp2;
 				temp2=temp2+2;
 				counting2();
 			},70);
 		}
 			else{
 				setTimeout(function(){
 					document.getElementById('counter2').innerText=2000;
 				},70)
 			}
 		}


 		var count3=document.getElementById('counter3').innerText;
 	var temp3=count3-0;
 	function counting3 (){
 		if(temp3<=2000){
 			setTimeout(function(){
 				document.getElementById('counter3').innerText=temp3;
 				temp3=temp3+2;
 				counting3();
 			},70);
 		}
 			else{
 				setTimeout(function(){
 					document.getElementById('counter3').innerText=2000;
 				},70)
 			}
 		}
 	
 	
  // Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

  window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("img");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);
  
 $(document).ready(function(){
  console.log("hey");
  $(".without-value1 input").on("input propertychange",function(e){
    $(".without-value1").toggleClass("with-value1",!!$(e.target).val());
  });
  $(".without-value2 input").on("input propertychange",function(e){
    $(".without-value2").toggleClass("with-value1",!!$(e.target).val());
  });
  $(".without-value3 input").on("input propertychange",function(e){
    $(".without-value3").toggleClass("with-value1",!!$(e.target).val());
  });
  $(".without-value4 textarea").on("input propertychange",function(e){
    $(".without-value4").toggleClass("with-value1",!!$(e.target).val());
  });

  $(".without-value1 input").on("focus", function() {
        $(".without-value1").addClass("with-focus");
    })
    $(".without-value1 input").on("blur", function() {
        $(".without-value1").removeClass("with-focus");
    });

    $(".without-value2 input").on("focus", function() {
        $(".without-value2").addClass("with-focus");
    })
    $(".without-value2 input").on("blur", function() {
        $(".without-value2").removeClass("with-focus");
    });

    $(".without-value3 input").on("focus", function() {
        $(".without-value3").addClass("with-focus");
    })
    $(".without-value3 input").on("blur", function() {
        $(".without-value3").removeClass("with-focus");
    });

    $(".without-value4 textarea").on("focus", function() {
        $(".without-value4").addClass("with-focus");
    })
    $(".without-value4 textarea").on("blur", function() {
        $(".without-value4").removeClass("with-focus");
    });
});

 //  $(#name)(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

  

  //   setInterval(function(){
  //   $('.scroll-link').addClass('neeche')
  //     setTimeout(function(){
  //       $('.scroll-link').removeClass('neeche')
  //   }, 900)
  // }, 1800);

  //    setTimeout(function(){
  //   $('.scroll-link').removeClass('jabardasti')
  // }, 800); 

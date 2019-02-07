

//  jQuery(document).ready(function(){$("body").on("input propertychange", "floating-label-form-group", function(e) {
//         $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
//     })
// })
//  $(document).ready(function(){
//   $("body").on("input propertychange", "floating-label-form-group",function(e){
//     $("this").toggleClass("floating-label-form-group-with-value");
//     console.log("hello");	
//   });
// });
 // .on("focus", "floating-label-form-group", function() {
 //        $(this).addClass("floating-label-form-group-with-focus");
 //    }).on("blur", "floating-label-form-group", function() {
 //        $(this).removeClass("floating-label-form-group-with-focus");
 //    })
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


 });


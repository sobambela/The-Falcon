jQuery(function ($) {

    'use strict';
	
// =============================================
// BEGIN THEME SCRIPTS
// =============================================

	// =============================================
	// Page Loader
	// =============================================
	$('.page-loader').delay(500).fadeOut(500);
	
	// =============================================
	// Smooth Scroll
	// =============================================
	$(".goscroll").click(function (event) {
		event.preventDefault();
		//calculate destination place
		var dest = 0;
		if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
		  dest = $(document).height() - $(window).height();
		} else {
		  dest = $(this.hash).offset().top;
		}
		//go to destination
		$('html,body').animate({
		  scrollTop: dest
		}, 1000, 'easeOutQuad');
	});

// =============================================
// END THEME SCRIPTS
// =============================================
	
});

    /*====================================
    Fixed Header
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 480;
        
        if ($(window).scrollTop() > navHeight) {
            $('.header-sticky').addClass('on');
            $('.top-logo').removeClass('invisible');
        } else {
            $('.header-sticky').removeClass('on');
            $('.top-logo').addClass('invisible');
        }
    });

(function($) {
	"use strict";

	// var easing = 'jswing';

	var RedQ = {

		redQ_init : function() {
			// RedQ.redQ_nav_hover();
			RedQ.redQ_small_submenu();
			// RedQ.redQ_navbar_toggle();
		},

		// redQ_nav_hover : function() {
		// 	$('.dropdown').on('mouseenter', function() {
		// 		var self = $(this);

		// 		self.find('.dropdown-menu').stop().slideDown(300, easing);
		// 	});

		// 	$('.dropdown').on('mouseleave', function() {
		// 		var self = $(this);

		// 		self.find('.dropdown-menu').stop().slideUp(300, easing);
		// 	});
		// },
		redQ_small_submenu: function() {
			var sel = $('li.dropdown ul.sub-menu li.dropdown');
			sel.addClass('has-caret');
			sel.append('<span class="sub-caret fa fa-caret-right"></span>');

			// var caret = $('.has-caret').on('click', function(e) {
			// 	e.preventDefault();
			// 	console.log('work');
			// 	$(this).find('.sub-menu').css('display', 'block');
			// });
		},
		redQ_navbar_toggle: function() {
			// $('.navbar-toggle').on('click', function() {
			// 	console.log('hello');
			// 	$('.collapse.navbar-collapse').toggleClass('in');
			// });
		},


	};

	RedQ.redQ_init();

})(jQuery);








 $(document).ready(function() {
                // $('.navbar-toggle').click(function(e){
                    
                //     e.preventDefault();
                //     $('.collapse.navbar-collapse').addClass('in');

                //     $('body').addClass('mobile-menu-open');
                //     $('.collapse.navbar-collapse').show().prop('id', 'mobile-menu-wrap');
                    
                // });

                // $('.mobile-menu-close').click(function(e){
                //     e.preventDefault();
                //     // $('.collapse.navbar-collapse').removeClass('in');
                //     $('body').removeClass('mobile-menu-open');

                //     // $('.collapse.navbar-collapse').removeClass('in').hide();
                    
                // });

                $('.navbar-toggle').click(function(e){
                            
                    e.preventDefault();
                    $('.collapse.navbar-collapse').addClass('in');

                    $('body').addClass('mobile-menu-open');
                    $('.collapse.navbar-collapse').show().prop('id', 'mobile-menu-wrap');
                    
                });

                $('.mobile-menu-close').click(function(e){
                    e.preventDefault();
                    // $('.collapse.navbar-collapse').removeClass('in');
                    $('body').removeClass('mobile-menu-open');

                    // $('.collapse.navbar-collapse').removeClass('in').hide();
                    
                });

                    // var width = $(window).width();
                    // console.log('window width: ' + width);

                    // var totalWidth = $('ul.nav').width();
                    // var listWidth = [];
                    // var totalListWidth = 0;

                    // $('ul.nav > li').each(function(){
                    //     totalListWidth = totalListWidth + $(this).outerWidth();
                    //     listWidth.push($(this).outerWidth());
                    // });

                    // console.log('Total list width: ' + totalListWidth);
                    // console.log('list width: ' + listWidth);

                    // console.log('Total width: ' + totalWidth);

                    // if( (totalWidth ) >= width) {
                    //     $('body').removeClass('mobile-menu-open');
                    //     $('.collapse.navbar-collapse.in').removeAttr('id');
                    //     $('.collapse.navbar-collapse.in').removeClass('in');
                    // } else {
                    //     $('style').text('@media (min-width:' + width + 'px) {div{ color:red !important; }}');
                    // }


                $( window ).resize(function() {
                    var width = $(window).width();

                    if ((width>=768)) {
                        $('body').removeClass('mobile-menu-open');
                        $('.collapse.navbar-collapse.in').removeAttr('id');
                        $('.collapse.navbar-collapse.in').removeClass('in');
                        
                    }
                });



                

            });
			
$(document).ready(function(){

	//The School Button
	$("#button1").click(function(){
		$('html, body').animate({
		scrollTop: $("#section1").offset().top
		}, 400);
	});

	//Contact Us Button
	$("#button2").click(function(){
		$('html, body').animate({
		scrollTop: $("#contact-us-cs").offset().top
		}, 400);
	});

	//Enroll Button
	$("#button4").click(function(){
		$('html, body').animate({
		scrollTop: $("#section4").offset().top
		}, 400);
	});

	//MAIN Contact-Us Button Button
	$("#contact-main-button").click(function(){
		$('html, body').animate({
		scrollTop: $("#contact-us-cs").offset().top
		}, 400);
	});

	//The School Button 2
	$("#button5").click(function(){
		$('html, body').animate({
		scrollTop: $("#section1").offset().top
		}, 500);
	});
    $("#slides").slidesjs({
        width: 500,
        heigh : 500,
        pagination: {
            active: false,
            effect: "slide"
        }
    }); 
    $("input:checkbox").on('click', function() {
      var $box = $(this);
      if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
      } else {
        $box.prop("checked", false);
      }
    });			
    
    $( "#arrival_date" ).datepicker({ 
	    changeMonth: true,
	    minDate: new Date(),
	    maxDate: '+2y',
	    onSelect: function(date){

	        var selectedDate = new Date(date);
	        var msecsInADay = 86400000;
	        var endDate = new Date(selectedDate.getTime() + msecsInADay);

	       //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
	        $("#departure_date").datepicker( "option", "minDate", endDate );
	        $("#departure_date").datepicker( "option", "maxDate", '+2y' );

	    }
	});
    $( "#departure_date" ).datepicker({
	    onSelect: function(dateText, inst) {
	       $('#no_of_nights').val(daydiff(parseDate($('#arrival_date').val()), parseDate($('#departure_date').val())));
	    }
	});
    
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    }

    function daydiff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    }

	$('#booking').validate({
	rules:{
		realname:'required',
		surname:'required',
		email:{
			required: true,
			email: true
		},
		verify_email:{
			required: true,
			email: true,
			equalTo: "#email"
		},
		telephone:{
			required:true,
			digits:true
		},
		arrival_date: 'required',
		departure_date: 'required',
		areas_interested_in: 'required',
		no_of_nights: 'required',
		no_of_guests: 'required',
		no_of_bedrooms: 'required',
		cellphone: {
			required:true,
			digits:true
		}
	},
	messages:{
		name:'Please enter a name',
		surname:'Please enter you Surname',
		email:{
			required: 'Please enter an email',
			email: 'Please enter a valid email'
		},
		verify_email:{
			required: 'Please verification email',
			equalTo: 'Please enter the same email as above' 
		},
		telephone:{
			required:'Please enter telephone number',
			digits:'Only digits allowed'
		},
		arrival_date: 'Please enter arrival date',
		departure_date: 'Please enter departure date'
	}
	});
        $(document).on('click','#submit',function(e){
            e.preventDefault();
            if(true){
            	$('.loader').show('slow');
            	jQuery.ajax({
                    type: 'POST',
                    url: 'tffp.php',
                    data: {
                            "action": "send-booking",
                            "realname": $('#name').val(), 
                            "surname": $('#surname').val(),
                            "email": $('#email').val(),
                            "cellphone": $('#cellphone').val(),
                            "telephone": $('#telephone').val(),
                            "country": $('#country').val(),
                            "arrival_date": $('#arrival_date').val(),
                            "departure_date": $('#departure_date').val(),
                            "no_of_nights": $('#no_of_nights').val(),
                            "no_of_guests": $('#no_of_guests').val(),
                            "no_of_bedrooms": $('#no_of_bedrooms').val(),
                            "additional_requirements": $('#additional_requirements').val()
                        },
                    success: function(data){ 
                    		console.log(data);
                    		var data_split = data.split('<br>');
                    		var response= JSON.parse(data_split[data_split.length - 1]);
                    		console.log(response);
                    		if(response.results == '1'){
                    			$('#booking')[0].reset();
                    		}
                            $('.loader').hide('slow');
                            $('.email_results').html(response.msg);
                            $('.email_results').show('slow');
                        }
                });
            }
        });     
});
			
			

// =============================================
// Animate on Appear
// =============================================
var wow = new WOW(
  {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       10,          // distance to the element when triggering the animation (default is 0)
        mobile:       false       // trigger animations on mobile devices (true is default)
  }
);
wow.init();


    /*Menu-toggle*/
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});

/*Scroll Spy*/
$('body').scrollspy({ target: '#spy', offset:80});

/*Smooth link animation*/
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
    

    
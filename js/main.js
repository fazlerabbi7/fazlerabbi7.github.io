(function($){

    "use strict";

    jQuery(document).ready(function($){

        // -- wolcarousel
        $(".banner_owlcarousel").owlCarousel({
            items:1,
            nav:true,
            loop:true,
            mouseDrag:false,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
        });

        $('.banner_owlcarousel').on("translate.owl.carousel",function(){

            $('.banner_text h1').removeClass('animated fadeInUp').css("opacity","0")
        });
        $('.banner_owlcarousel').on("translated.owl.carousel",function(){

            $('.banner_text h1').addClass('animated fadeInUp').css("opacity","1")

        });

        $('.banner_owlcarousel').on("translate.owl.carousel",function(){

            $('.banner_text p').removeClass('animated fadeInUp').css("opacity","0")
        });
        $('.banner_owlcarousel').on("translated.owl.carousel",function(){

            $('.banner_text p').addClass('animated fadeInUp').css("opacity","1")
        });
        $('.banner_owlcarousel').on("translate.owl.carousel",function(){

            $('.banner_text a').removeClass('animated pulse').css("opacity","0")
        });
        $('.banner_owlcarousel').on("translated.owl.carousel",function(){

            $('.banner_text a').addClass('animated pulse').css("opacity","1")
        });

        $(".clints_says_carousel").owlCarousel({
            items:1
        });

        // ---- isotom
        var i_isotmp = $('.isotop').isotope({
          // options...
          itemSelector: '.s-isotop',
            filter: '*'
        });
        
        $('.isoto_menu li').on('click',function(){
            
            
            $(this).siblings().removeClass('active')
            $(this).addClass('active');
            
            var my_istom_atter = $(this).attr('data-filter');
            
            i_isotmp.isotope({
                
                filter:my_istom_atter
            })
            
        })

        // skills barIndicasor
        $('.skills').barIndicator({
            foreColor:'#3498db',
            backColor:'#404040',
            horLabelPos:'topLeft',
            horLabelPos:'topRight' //'left'/'right'
        });

            // wow js
             new WOW().init();
        // counterUp
        $('.counter').counterUp({
		    delay: 10,
		    time: 1000
		});

        // hire btb auto height
            $('.right_persuaset').each(function(){
                var ribtn =( $ ('.left_persiaset').height() - $(this).height() ) /2;

                $(this).css({

                    marginTop: ribtn + 'px',
                    marginBottom: ribtn + 'px'
                });

            });


                 var map = new GMaps({
            el: '.map',
            lat: 23.622640,
            lng: 90.499797,
            scrollwheel: false,
        });
        map.addMarker({
             lat: 23.622640,
            lng: 90.499797,
            title: 'fazle rabbi',
            infoWindow: {
            content: '<p>Welcome to Codeglim</p>'
        }
    });
        // collapse icon add
        $('.collapse').on('shown.bs.collapse', function(){

            $(this).parent().find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');

        }).on('hidden.bs.collapse', function(){

            $(this).parent().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');

        });

          $(window).scroll(function(){
            
            var myWindoScroTop = $(window).scrollTop();
            console.log(myWindoScroTop);
            
            if(myWindoScroTop < 50) {
                
                $('.header_area').removeClass('newHedeclass')
                  
            } else{
                
                $('.header_area').addClass('newHedeclass');
                
            }  
            
        });

        







            
            
            
            
        })

})(jQuery)


































// (function($){
//     'ues strict';

//     jQuery(document).ready(function($){
        
//         $('.testimonials').owlCarousel({
//             items:1,
//             nav:true,
//             navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//             loop:true,
//             autoplay:true,
//         });
        
//         $('.portfolio').owlCarousel({
//             items:3,
//             margin:20,
//             nav:true,
//             navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//             loop:true,
//             responsive:{
// 			300: {
//                 items: 1,
//             },
//             480: {
//                 items: 1,
//             },
//             768: {
//                 items: 2,
//             },
//             1170: {
//                 items: 3,
//             },
// 		}
            
//         });
        
//         $('.bar').barIndicator({
//             foreColor: '#fcb910',
//             backColor:'#87b747'
//         });
        
//         var HeadHeight = $('.header').height();
//         var bannerHeight = $('.banner').height() - HeadHeight;
//         $('.banner').css('height',bannerHeight);
        
//             var map = new GMaps({
//                 el: '.gmap',
//                 lat: 23.810332,
//                 lng: 90.412518,
//                 scrollwheel: false,
//             });
//             map.addMarker({
//                 lat: 23.810332,
//                 lng: 90.412518,
//                 title: 'Marker with InfoWindow',
//                 infoWindow: {
//                 content: '<p>Welcome to Codeglim</p>'
//                 }
//            });
        
//         var newsTestH = $('.newsleter-text').height(),
//             newsFormH = $ ('.news-form').height();
        
//         var myFormH = ( newsTestH - newsFormH ) /2;
//         var wihhh = $ (window).width();
        
//         if(wihhh > 767){
            
//             $('.news-form').css({
//             marginTop:myFormH + 'px',
//         });
            
//         }
        
        
//         $('.m-counter').counterUp({
//             time:1000
            
//         });
        
        
//         $(".info").typed({
//             strings: ["Perfect Pixel Website", "Amazing Support", "Perfect Guidlines", "Best Responsive"],
//             typeSpeed: 0,
//             loop: false,
//             startDelay:'5',
//             fadeOut:false,
//             cursorChar:'|',
//             backDelay:1000
// 	   });
        
//         $(window).scroll(function(){
            
//             var myWindoScroTop = $(window).scrollTop();
//             console.log(myWindoScroTop);
            
//             if(myWindoScroTop < 580) {
                
//                 $('.header').removeClass('newHedeclass')
                  
//             } else{
                
//                 $('.header').addClass('newHedeclass');
                
//             }  
            
//         });
        
        
//          $('.main_menu > li').on('click',function(){
            
//             var LiAutoHref = $(this).children().attr('href');
//             var Itoposititon = $(LiAutoHref).position().top;
            
//             $('html,body').animate({
//                 scrollTop:Itoposititon  
//             })  
//         });
        
//         if(wihhh >768){
            
//             new WOW().init();
            
//         }
        
//         $('.main_menu').slicknav({
            
//             prependTo:".mobile_menu_wrap"
            
            
//         })
        
//         $('.tab_clic').on('click',function(){
//             var animationClass = 'animated fadeIn';
            
//             $('#about,#home,#contact').addClass(animationClass).one(' webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                
                
//                 $(this).removeClass(animationClass)
                
//             });
            
            
//         });
        
        
        
        
//     })
    
// //    $(window).load(function(){
// //        
// //        
// //        jQuery('.m-prilader').fadeOut(100)
// //        
// //        
// //    })
// //    
    
    
    
    
    
    
    
    
    
// })(jQuery)
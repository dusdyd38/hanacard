$(document).ready(function(){
    $('.eb_slider').slick({
        arrows:false,
        fade:true,
        dots:true,
        autoplay:true,
        pauseOnHover:false
    });

    /* slick 정지/재생버튼 */
    $('.pagn_act .btn_stop').click(function(e){
        e.preventDefault();
        // if(조건문){
        //     조건문이 참일때 실행문
        // }

        if($('.eb_banner4 .pagn_act').hasClass('on')){
            //on 클래스를 가지고 있는가 ==> true/false
            $('.eb_banner4 .pagn_act').removeClass('on')
        }else{
            $('.eb_banner4 .pagn_act').addClass('on')
        }
        $('.eb_slider').slick('slickPause');
    })

    $('.pagn_act .btn_play').click(function(e){
        e.preventDefault();
        $('.eb_banner4 .pagn_act').addClass('on');
        $('.eb_slider').slick('slickPlay');
    })

    //event_box3 slick
    $('.card').slick({
        arrows:false,
        fade:true,
        dots:true,
        autoplay:true,
        pauseOnHover:false
    });

    $('.event_box3 .btn_stop').click(function(e){
        e.preventDefault();
       
        if( $('.event_box3 .page_act').hasClass('on')){
            $('.event_box3 .page_act').removeClass('on')
            $('.card').slick('slickPause');
        }
    });
    $('.event_box3 .btn_play').click(function(e){
        e.preventDefault();
        $('.event_box3 .page_act').addClass('on')
        $('.card').slick('slickPlay');
    })

    //  life
    var tab = $('.life_menu ul li');
    var bg =$('.life_style ul li');
   
    tab.click(function(e){
        e.preventDefault();
    })

    tab.mouseover(function(){
        var index = $(this).index();
        console.log(index);
        bg.css({opacity:0});
        bg.eq(index).css({opacity:1});


    })


  });//document ready


// Event Pada Saat Link
/*
$('.nav-link').on('click', function(e){
    
    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen
    var elementujuan = $(tujuan);

    //pindahkan scroll
    $('html, body').animate({
        scrollTop : elementujuan.offset().top - 50
    }, 500, 'swing');

    e.preventDefault();
});
*/

//Load
/*$(window).on('load',function(){
    $('.pkiri').addClass('ada');
    $('.pkanan').addClass('ada');
});*/


//paralax
$(window).scroll(function(){
    var wscroll = $(this).scrollTop();

    $('.imgbar img').css({
        'transform' : 'translate(0px, '+ wscroll/4 +'%)'
    });

    $('.imgbar h1').css({
        'transform' : 'translate(0px, '+ wscroll/1.1 +'%)'
    });

    $('.imgbar h5').css({
        'transform' : 'translate(0px, '+ wscroll*1.2 +'%)'
    });


    //
    if(wscroll > $('.cardbox').offset().top -100){
        $('.conten').addClass('muncul2');
    }

    //about
    if(wscroll > $('.about').offset().top -200){
        $('.pkiri').addClass('ada');
    }
    if(wscroll > $('.about').offset().top -200){
        $('.pkanan').addClass('ada');
    }

    //Side Content
    if(wscroll > $('.teks').offset().top -200){
        $('.teks').each(function(i){
            setTimeout(function(){
                $(".teks").eq(i).addClass('muncul3');
            }, 300 * (i+1));
        })
    }

    //Thumbnail
    if(wscroll > $('.thumb').offset().top -200){
        $('.thumb .img-thumbnail').each(function(i){
            setTimeout(function(){
                $('.thumb .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
        
    }

});
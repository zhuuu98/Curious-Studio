

// ---漢堡---

$('#ham').click(function(){
    // 如果 #hamBar2 的不透明度不是 0，表示已經點擊過，需要還原
    if ($("#hamBar2").css('opacity') !== '0') {
        // 將 #hamBar2 的不透明度設置為 0
        $("#hamBar2").css({'opacity': '0'});
        
        // 將 #hamBar1 往下移動 10px 且傾斜 45 度
        $("#hamBar1").css({
            'transform': 'translateY(11px) rotate(45deg)',
            'transition': 'transform 0.3s ease'  // 可以添加過渡效果
        });

        $("#hamBar3").css({
            'transform': 'translateY(-11px) rotate(-45deg)',
            'transition': 'transform 0.3s ease'  // 可以添加過渡效果
        });

        $('#overlay').show();

        $('body').addClass('no-scroll');


    } else {
        // 如果 #hamBar2 的不透明度已經是 0，表示是還原狀態，則重置所有屬性
        $("#hamBar2").css({'opacity': '1'});  // 還原 #hamBar2 的不透明度
        $("#hamBar1").css({
            'transform': 'none',
            'transition': 'transform 0.3s ease'  // 可以添加過渡效果
        });

        $("#hamBar3").css({
            'transform': 'none',
            'transition': 'transform 0.3s ease'  // 可以添加過渡效果
        });

        $('#overlay').hide();

        $('body').removeClass('no-scroll');
    }
});


// ---首頁小header---

$(function () {
    let showHeight = 300;

    // 檢查視窗寬度，只在寬度大於 768px 時執行
    if ($(window).width() > 768) {
        $('.index-mb-header').css({
            display: 'block',
            opacity: 0,
        });

        $(window).scroll(function () {
            $('.index-mb-header').each(function () {
                let areaTop = $(this).offset().top; // 物件和螢幕的距離

                if ($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()) {
                    $(this).stop().animate({
                        opacity: 1,
                    }, 250);
                } else {
                    $(this).stop().animate({
                        opacity: 0,
                    }, 200);
                }
            });
        });
    }
});







// $(function () {
//     let showHeight = 200

//     $('.aa').css({
//         display: 'block',
//         opacity: 0,
//     })

//     $(window).scroll(function(){
//         $('.aa').each(function(){
//             let areaTop = $(this).offset().top  //物件和螢幕的距離

//             if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()){
//                 $(this).stop().animate({
//                     opacity: 1,
//                 }, 300)
//             }else{
//                 $(this).stop().animate({
//                     opacity: 0,
//                 }, 500)
//             }
//         })
//     })
// })	





// $(function () {
//     let showHeight = 900
//     let windowWidth = $(window).width();
// }

//     if($(window).width() > 768){
//         $('.index-mb-header').css({
//                 display: 'block',
//                 opacity: 0,
//             })

//         $(window).scroll(function(){
//             $('.index-mb-header').(function(){
//                 let areaTop = $(this).offset().top  //物件和螢幕的距離
//                 // console.log(areaTop);

//                 if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()){
//                     $(this).stop().animate({
//                         opacity: 1,
//                     }, 500)
//                 }else{
//                     $(this).stop().animate({
//                         opacity:0,
//                     }, 500)
//                 }
//             })
//         })
// })	





// $(function () {
//     let showHeight = 400;

//     $(window).scroll(function(){
//         let windowWidth = $(window).width(); // 移至 scroll 事件中以動態獲取視窗寬度

//         if(windowWidth > 768){
//             $('.index-mb-header').css({
//                 display: 'block',
//                 opacity: 0,
//             });

//             $('.index-mb-header').each(function(){
//                 let indexMbHeaderTop = $(this).offset().top; // 物件和螢幕的距離

//                 if($(window).scrollTop() >= (indexMbHeaderTop + showHeight) - $(window).height()){
//                     $(this).stop().animate({
//                         opacity: 1,
//                     }, 500);
//                 } else {
//                     $(this).stop().animate({
//                         opacity: 0,
//                     }, 500);
//                 }
//             });
//         }
//     });
// });



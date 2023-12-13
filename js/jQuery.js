


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



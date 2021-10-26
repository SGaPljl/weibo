$(function(){
    var top=$("#header").offset().top;
    $(window).scroll(function () {
        //当滚动条距离大于box2距离顶部的距离时，设置固定定位
        if ($(this).scrollTop() > top) {
            $("#header").css({ "position": "fixed", "top": "0" });
        }
        //当滚动条距离小于box2距离顶部的距离时，设置相对定位
        else {
            $("#header").css({ "position": "relative" });
        }
    });

})
$(function(){
    $('.search-text').click(function(){
        
    })
})


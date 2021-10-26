// 轮播图
$(function(){
    var num=0;
    // var timer=null;
    go();
    $(".center-lun").mouseover(function(){//实现当鼠标移入时，不执行自动轮播功能
        clearInterval(timer);//移动进去时清除定时器
    }).mouseout(function(){
        go();//移出后执行go函数
    });
    function go(){
          timer=setInterval(function(){//设置定时器
                num++;//用一个全局变量来控制图的运动次数
                if(num>3){//如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
                    num=1;
                    $(".lun_body").css("margin-left","0px");
                }
                
                $(".number li").each(function(index){
                    // console.log(num);//3
                    // console.log(this.innerHTML);//123
                    this.className=this.innerHTML== num+1 ? 'number-li':'num'
                })
                if(num==3){
                    $(".number li").eq(0).toggleClass('number-li')
                }
                $(".lun_body").animate({"margin-Left":-660*num+"px"},580);//使用animate实行运动功能
                
            },2000);
        }
})

// 登录窗
$(function(){
    // var top=$(".login").offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1300) {
            $(".login").css({ "position": "fixed", "top": "60px" });
        }
        else {
            $(".login").css({ "position": "", "top": "" })
        }
    });
    $(".login-account").click(function(){
        $(".login_1").css({"display":"block"})
        $(".login_2").css({"display":"none"})
        $(".login-account").css({"border-bottom": "3px solid #FF8140"})
        $(".login-safe").css({"border-bottom": "3px solid #fff"})
    })
    $(".login-safe").click(function(){
        $(".login_1").css({"display":"none"})
        $(".login_2").css({"display":"block"})
        $(".login-account").css({"border-bottom": "3px solid #fff"})
        $(".login-safe").css({"border-bottom": "3px solid #FF8140"})
    })

})
// 左侧栏
$(".left-nav").click(function(){
    var num=this;
    $(".left-nav").each(function(){
        this.className=this== num ? 'left-nav current':'left-nav'
    })
})
// tips
$(function(){
    $(".iconfont.icon-cuowu").click(function(){
        $(".b-c-tip").remove()
    })
})
// 置顶
$(function () {
/*根据滚动距离判断按钮是否显示或隐藏*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".back").css("display", "inline-block");
    }
    else {
        $(".back").css("display", "none");
    }
    });
    /*实现点击滚动回顶部*/
    $(function(){
        $(".back").click(function(){
            $("html,body").scrollTop(0);
        })
    })
})
$(function(){
    $(".back").click(function(){
        $("html,body").scrollTop(0);
    })
})
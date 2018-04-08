/**
 * Created by QXT on 2017/6/15.
 */
var win = isSafaris();

var w = $(window).width();
var wh = $(window).height();
$(function () {

    if (win == "Safari") {
        $('body').css({fontFamily: '微软雅黑MAC'});
    }

    $('a').click(function () {
        if ($(this).attr('href') == "javascript:") {
            msg();
        }
    });

    //   PC首页轮播
    var item = $('.banner-item');
    var li = $('.banner_li');
    for (var i = 0; i < item.length; i++) {
        $(li[i]).attr('data-slide-to', i);
    }

    //  手机二级导航
    $('.s2-ico').click(function () {
        $(this).next('.ls').slideToggle('fast');
    });

//   手机导航
    if (w < 992) {
        var sum = 0, arr = [], sum1;
        $('nav li').each(function (index) {
            sum += $(this).outerWidth();
            arr.push(sum);
            if ($(this).hasClass('on')) {
                sum1 = arr[index] - 200;
            }
        });
        if (sum1 >= 0 && sum1 <= (sum - w)) {
            $('nav ul').css({left: -sum1 + 'px'});
        } else if (sum1 < 0) {
            $('nav ul').css({left: 0});
        } else {
            $('nav ul').css({left: -(sum - w) + 'px'});
        }

        $('nav ul').on("touchmove", function (e) {
            e.stopPropagation();
            $(this).css({left: 'auto'});
        });
    }

    //   手机搜索
    $('.a-xy').click(function () {
        $('.sj-list').slideToggle('fast');
    });
    $('.sj-list li').click(function () {
        var txt = $(this).text();
        $('.a-xy').find('span.s1').text(txt);
        $(this).parent().slideUp('fast');
    });

//   类型选项
    $('.types-icon').click(function () {
        var p = this;
        $(p).siblings('.sub').slideToggle('fast');
        $('.types-li').click(function () {
            var content = $(this).html();
            $(p).children('span').html(content);
            $(p).siblings('.sub').slideUp('fast');
        });
    });

//   tab切换调用
    $.tab({
        triggerObj: ".tab-hover-li",
        obj: ".tab-hover-sec",
        trigger: "hover",
        class: "active"
    });
    $.tab({
        triggerObj: ".tab-click-li",
        obj: ".tab-click-sec",
        trigger: "click",
        class: "active"
    });
    $.tab({
        triggerObj: ".li-posi",
        obj: ".input-sec",
        trigger: "click",
        class: "on"
    });

    $("input").keydown(function (e) {
        if (e.keyCode == 13) {
            $(this).parents('form').find("[type='button']").click();
            e.preventDefault();
        }
    });

    $('#title').focus();


});

//左对齐
function mar(ma, num) {
    $(ma).parent().each(function () {
        $(this).children(ma).each(function (index) {
            if (index % num == 0) {
                $(this).css('margin-left', '0px');
            }
        });
    });
}

function msg() {
    layer.msg('功能正在开发中');
}

// 60s倒计时
function countdown(obj) {
    var timer, num = 60;

    var cellphone = $(obj).val();
    if (cellphone == "") {
        alert(front.loginUserCellphoneNull);
    } else if (!testReg.cellPhoneRegExp.test(cellphone)) {
        alert(front.loginUserCellphoneError);
    } else {
        timer = setTimeout(timeS, 0);

        function timeS() {
            if (num == 0) {
                clearTimeout(timer);
                $(".button").removeAttr("disabled").html("重新获取");
                num = 60;
                return false;
            }
            num -= 1;
            $(".button").attr("disabled", "disabled").html(num + "s");
            setTimeout(timeS, 1000);
        }
    }
}

// 网站声明及用户协议
function agreement(title, content) {
    if (w > 767) {
        layer.open({
            type: 2,
            title: title,
            shadeClose: true,
            shade: 0.3,
            area: ['50%', '90%'],
            content: content
        });
    } else {
        layer.open({
            type: 2,
            title: title,
            shadeClose: true,
            shade: 0.3,
            area: ['100%', '100%'],
            content: content
        });
    }
}


jQuery.fn.size = function () {
    return this.length;
};


//判断是否为 windows 操作系统
function isWindows() {
    return /windows|win32/i.test(navigator.userAgent);
}


// 判断safari浏览器;
function isSafaris() {
    if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("chrome") < -1) {
        return "Safari";
    }
}


// 类型选项
function selectType(arr, obj) {
    var typeVal = $(obj).val();
    switch (typeVal) {
        case "0":
            $('#typeName').html(arr.personalName);
            $('#typeCard').html(arr.personalCard);
            break;
        case "1":
            $('#typeName').html(arr.enterpriseName);
            $('#typeCard').html(arr.enterpriseCard);
            break;
        case "2":
            $('#typeName').html(arr.personalName);
            $('#typeCard').html(arr.personalCard);
            break;
    }
}

// 信用公示、红黑榜法人、自然人
function mainBody(arr, obj) {
    var subjectCategory = $(obj).val();
    switch (subjectCategory) {
        case "1":
            $('#nameTitles').html(arr.nameTitles);
            $('#identifyTitles').html(arr.identifyTitles);
            break;
        case "2":
            $('#nameTitles').html(arr.nameTitlesA);
            $('#identifyTitles').html(arr.identifyTitlesA);
            break;
    }
}
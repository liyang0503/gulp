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

   // banner
   var img = $('.a_img');
   var li = $('.car_li');
   for (var i = 0; i < img.length; i++) {
      $(li[i]).attr('data-slide-to', i);
   }

   //   nav 共享分类 下拉
   $('nav .first').hover(function () {
      $(this).find('.sub').stop().slideDown('fast');
      $('.nav-sub-li').hover(function () {
         $(this).find('.sub-child').show();
      }, function () {
         $(this).find('.sub-child').hide();
      });
   }, function () {
      $(this).find('.sub').stop().slideUp('fast');
   });

   //  手机二级导航
   $('.s2-ico').click(function () {
      $(this).next('.ls').slideToggle('fast');
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

//  智能筛选ul
   $('.screening').find('ul.rt-item').each(function () {
      $(this).children('li').click(function () {
         $(this).addClass('on');
         $(this).siblings().removeClass('on');
      });
   });

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

//   更多机构
function institutions() {
   $('#institutions-list').toggleClass('auto')
}

function msg() {
   layer.msg('功能正在开发中');
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
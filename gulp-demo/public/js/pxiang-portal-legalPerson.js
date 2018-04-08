/**
 * Created by QXT on 2017/5/17.
 * 作用域：信用信息
 */

$(function () {
   //下载征信报告特效 start
   xz();
   $('.r0-nr').hover(function () {
      $('div.r0-s').hide();
      $(this).find('img.r0-x-1').stop().animate({top: "200%"}, 600);
      $(this).find('div.ra').stop().animate({top: "50%"}, 600);
   }, function () {
      $(this).find('img.r0-x-1').stop().animate({top: "50%"}, 600);
      $(this).find('div.ra').stop().animate({top: "-100%"}, 600, function () {
         $('div.r0-s').show();
      });
   });

   //信用评分特效 start
   var deg = 2.37, num, degs;
   num = $('.num').text();
   degs = num * deg - 140;
   $('.zz').css({transform: "rotate(" + degs + "deg)"});
   $('#box-zz').mouseover(function () {
      $('.zz').css({transform: "rotate(-130deg)"});
      setTimeout(function () {
         $('.zz').css({transform: "rotate(" + degs + "deg)"});
      }, 350);
   });


});

//下载征信报告特效
function xz() {
   $('.r0-x-2').animate({top: "-2px"}, 900).animate({top: "7px"}, 900);
   $('div.r0-s').animate({top: "92px"}, 900).animate({top: "85px"}, 900, xz);
}


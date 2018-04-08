/**
 * Created by QXT on 2017/5/17.
 * 作用域：首页
 */

$(function () {

   // 关闭自动播放（金融机构）
   $('.agency-banner').carousel({
      pause: true,
      interval: false
   });

//   锚点导航动效
   pointS();
   $('#point').stickUp({
      parts: {
         0: 'products',
         1: 'agency',
         2: 'financing',
         3: 'publicQuery',
         4: 'silver',
         5: 'government',
         6: 'dynamics',
         7: 'question'
      },
      itemClass: 'point-li',
      itemHover: 'active',
      topMargin: 'auto'
   });
   $(window).scroll(function () {
      pointS();
      wch = $(window).scrollTop();
      $('.point-sec').each(function () {
         var pointT = $(this)[0].offsetTop - wch;
         if (pointT === 0) {
            $(this).css('margin-top', '36px')
         } else {
            $(this).css('margin-top', '0px')
         }
      });
   });
   $('.point-li').click(function () {
      $('.point-li').removeClass('active');
      $(this).addClass('active');
   });
});

function pointS() {
   var wch = $(window).scrollTop();
   if (wch > 371) {
      $('#point').addClass('pointFixed')
   } else {
      $('#point').removeClass('pointFixed')
   }
}

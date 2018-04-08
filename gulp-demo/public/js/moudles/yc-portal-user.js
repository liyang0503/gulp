/**
 * Created by QXT on 2017/5/17.
 * 作用域：个人中心
 */

$(function () {
   //   个人信息
   $('.amend').click(function () {
      $('.readonly').removeAttr('readonly');
      $('.disableds').removeAttr('disabled');
      $(this).hide();
      $(this).siblings('.submit').show();
   });
});

function amend() {

}

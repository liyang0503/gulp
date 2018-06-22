$(function () {
  if (w < 1200) {
    $('.asideTwo').show().css({
      right: '7px'
    });
  } else {
    $('.asideTwo').show().css({
      right: (w - 1200) / 2 - 45 + 'px'
    });
  }

  // 更多
  $('.sub a').click(function () {
    $(this).parents('.sub').slideUp('fast');
  });

  //    金融产品
  $('.choose .more').click(function () {
    $(this).parents('.choose').siblings('.choose').find('.sub').hide();
    $(this).next('.sub').slideToggle('fast');
  });
  $('.reset').click(function () {
    $(this).parents('div.sub').slideUp('fast');
    if ($(this).hasClass('submitBtn')) {
      $(this).parents('.productTopMain').find('input:checked').removeAttr('checked');
    }
  });

  // 机构/标签
  chooseClick('.banksUl', '.banksEle');
  chooseClick('.systemLabelsUl', '.systemLabelsEle');
});

// 机构/标签
function chooseClick(obj, li) {
  $(obj).find('li').click(function () {
    $(this).find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
    var text = $(this).find('span').html();
    $(li).each(function () {
      var span = $(this).find('span').html();
      if (span == text) {
        $(this).find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
      }
    });
  });

  $(li).click(function () {
    $(this).find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
    var text = $(this).find('span').html();
    $(obj).find('li').each(function () {
      var span = $(this).find('span').html();
      if (span == text) {
        $(this).find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
      }
    });
  });
}

function choose(obj, ul) {
  if (!$(obj).find('i').hasClass('icon-check-chosen')) {
    $(obj).find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
    $(obj).siblings().find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
    $(ul).find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
  } else {
    $(obj).find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
    $(obj).siblings().find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
    $(ul).find('i').toggleClass('icon-check').toggleClass('icon-check-chosen');
  }
}

function choseConfirm(obj) {
  $(obj).parents('div.sub').slideUp('fast');
}

function closeConfirm(obj) {
  $(obj).parents('.choose').find('i').removeClass('icon-check-chosen');
  $(obj).parents('div.sub').slideUp('fast');
}
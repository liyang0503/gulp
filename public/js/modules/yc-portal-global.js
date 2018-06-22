/**
 * Created by QXT on 2017/6/15.
 */
var w = $(window).width();
var wh = $(window).height();
$(function () {

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

  //   手机搜索
  $('.a-xy').click(function () {
    $('.sj-list').slideToggle('fast');
  });
  $('.sj-list li').click(function () {
    var txt = $(this).text();
    $('.a-xy').find('span.s1').text(txt);
    $(this).parent().slideUp('fast');
  });

  //   手机导航
  if (w < 992) {
    var sum = 0,
      arr = [],
      sum1;
    $('nav li').each(function (index) {
      sum += $(this).outerWidth();
      arr.push(sum);
      if ($(this).hasClass('on')) {
        sum1 = arr[index] - 220;
      }
    });
    if (sum1 >= 0 && sum1 <= (sum - w)) {
      $('nav ul').css({
        left: -sum1 + 'px'
      });
    } else if (sum1 < 0) {
      $('nav ul').css({
        left: 0
      });
    } else {
      $('nav ul').css({
        left: -(sum - w) + 'px'
      });
    }

    $('nav ul').on("touchmove", function (e) {
      e.stopPropagation();
      $(this).css({
        left: 'auto'
      });
    });
  }

  //  手机二级导航
  $('.s2-ico').click(function () {
    $(this).next('.ls').slideToggle('fast');
  });

  //   tab切换调用
  $.tab({
    triggerObj: ".tab-click-li",
    obj: ".tab-click-sec",
    trigger: "click",
    class: "active"
  });

  // 问卷调查
  $('.trigger').click(function () {
    $(this).next('.sub').fadeToggle('fast');
  });

  // 复选框
  $("[type='checkbox']").click(function () {
    if ($(this).attr('checked')) {
      $(this).removeAttr('checked');
    } else {
      $(this).attr('checked', 'checked')
    }
  });

  // 滑动验证
  // aliCaptcha();

});

// 滑动验证
function aliCaptcha() {
  var nc = new noCaptcha();
  var nc_appkey = 'FFFF0000000001778E28';
  var nc_scene = 'login';
  var nc_token = [nc_appkey, (new Date()).getTime(), Math.random()].join(':');
  var nc_option = {
    renderTo: '#dom_id',
    appkey: nc_appkey,
    scene: nc_scene,
    token: nc_token,
    trans: '',
    callback: function (data) {
      console.log(data.csessionid);
      console.log(data.sig);
      console.log(nc_token);

      document.getElementById('csessionid').value = data.csessionid;
      document.getElementById('sig').value = data.sig;
      document.getElementById('token').value = nc_token;
      document.getElementById('scene').value = nc_scene;
    }
  };
  nc.init(nc_option);
}

//返回顶部
function toTop() {
  $("html,body").animate({
    scrollTop: 0
  }, 500);
}

//滚动监听浮动层
function asideScrlll() {
  $('.asideTwo').css({
    right: (w - 1200) / 2 - 45 + 'px'
  });

  perform();

  $(window).scroll(function () {
    perform()
  });

  function perform() {
    var ele = $('.aside').offset().top + $('.aside').height();
    var scr = $(this).scrollTop();
    if (scr > ele) {
      $('.asideTwo').fadeIn('fast');
    } else {
      $('.asideTwo').fadeOut('fast');
    }
  }
}

// 浮层
function contrast(title, obj, cancel, layerWidth) {
  layer.closeAll();
  if (!layerWidth) {
    layerWidth = '400px';
  }
  if (w > 767) {
    layer.open({
      title: title,
      type: 1,
      shade: 0.5,
      area: [layerWidth, 'auto'], //宽高
      content: obj,
      cancel: function () {
        if (cancel) {
          cancel(obj);
        }
      }
    })
  } else {
    layer.open({
      title: title,
      type: 1,
      shade: 0.5,
      area: ['95%', 'auto'], //宽高
      content: obj,
      cancel: function () {
        if (cancel) {
          cancel(obj);
        }
      }
    })
  }
}

// 浮层（无title）
function contrastNoTitle(obj, cancel, layerWidth) {
  layer.closeAll();
  if (!layerWidth) {
    layerWidth = '500px';
  }
  if (w > 767) {
    layer.open({
      title: false,
      type: 1,
      shade: 0.5,
      area: [layerWidth, 'auto'], //宽高
      content: obj,
      cancel: function () {
        if (cancel) {
          cancel(obj);
        }
      }
    })
  } else {
    layer.open({
      title: false,
      type: 1,
      shade: 0.5,
      area: ['95%', 'auto'], //宽高
      content: obj,
      cancel: function () {
        if (cancel) {
          cancel(obj);
        }
      }
    })
  }
}

// 产品列表更多下拉
function mores(obj) {
  $(obj).next('.sub').slideToggle('fast');
}

// 加入对比（银企对接等）
function addContrasting(obj) {
  // if ($('.contrastList').children('li').length == 6) {
  //     layer.msg("可对比数量已达上线");
  //     return false;
  // }

  var sum = $('.contrastBtn span');
  sum.html(Number(sum.html()) + 1);

  // $(obj).html("已加入").addClass('on').unbind('click');
  alert("已加入");
  $(obj).unbind('click');

  var bankName, id;
  if (obj) {
    bankName = $(obj).parents('tr').find('.bankName').attr('name');
    id = $(obj).parents('tr').find('.InterestedBtnOn').attr('id');
  } else {
    bankName = $('#productName').val() + " | " + $('#bankName').val();
    id = $("#productId").val();
  }

  $('.contrastList').append("<li>\n" +
    "                    <a href=\"javascript:\">" + bankName + "</a>\n" +
    "                    <span class=\"del\" id='" + id + "' onclick=\"delComparison(this);\" title=\"删除\">x</span>\n" +
    "                </li>");
}

// 加入对比查看
function contrastShow() {
  var ele = $('#contrast');
  startLayer(ele);
  contrast('贷款产品对比', ele, cancelLayer);
}

// 判断跳转至对比列表页面
function orContrastList(obj) {
  var num = $('.contrastList li').length;

  if (num == 0) {
    alert("请先添加对比产品！");
    return false;
  } else {
    var type = $(obj).attr('data-type');
    if (type == 'MA') {
      window.location.replace('/productComparisons?type=' + type)
    } else {
      window.location.replace('/productComparisons?type=' + type);
    }
  }
}

// 删除对比
function delContrast(obj) {
  var index = $(obj).parent().index();
  $('.contrastOperation').each(function () {
    $(this).find('li').eq(index).remove();
  });

  alert("删除成功");

  var sum = $('.contrastBtn span');
  if (sum.html() > 0) {
    sum.html(Number(sum.html()) - 1);
  }
}

// 清空对比
function emptyContrast() {
  alert("对比列表已清空");

  $('.contrastOperation').find('li').remove();

  $('.contrastBtn span').html('0');
}

function msg() {
  layer.msg('功能正在开发中');
}

// 登录、注册停止验证码倒计时
function clearTimer(obj) {
  if ($(obj).parents('.signUp').css('top') != '0px') {
    return false;
  }
}

// 登录弹层
function signInLayer() {
  // 初始化
  $('#inCellphone').val("");
  $('#signInPassword').val("");
  // aliCaptcha();

  var ele = $('#signIn');
  startLayer(ele);
  contrast('用户登录', ele, cancelLayer);
}

// 注册弹层
function signUpLayer() {
  // 初始化
  $('#cellphone').val("");
  $('#codeBtn').html("发送验证码");
  $('#verificationCode').val("");
  $('#regPassword').val("");
  $('#REPassword').val("");

  var ele = $('#signUp');
  startLayer(ele);
  contrast('用户注册', ele, cancelLayer);
}

// 忘记密码弹层
function updatePasswordLayer() {
  // 初始化
  $('#updateCellphone').val("");
  $('#codeBtn2').html("发送验证码");
  $('#updateVerificationCode').val("");
  $('#newPassword').val("");
  $('#newREPassword').val("");

  var ele = $('#update');
  startLayer(ele);
  cancelLayer($('#signIn'));
  contrast('忘记密码', ele, cancelLayer);
}

// 捕获页浮层元素显示位置
function startLayer(ele) {
  ele.css({
    position: "relative",
    top: "auto",
    opacity: 1
  });
}

// 捕获页浮层元素初始位置
function cancelLayer(ele) {
  ele.css({
    position: "fixed",
    top: "150%",
    opacity: 0
  });
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

// 风险评估弹窗
function riskLayer() {
  var ele = $('#risk');
  startLayer(ele);
  contrast('风险评估', ele, cancelLayer, '600px');
  risk();
}

// 风险评估动效
function risk() {
  $('.month s,.time s,.lines s,.rate s').css({
    webkitTransform: "rotate(225deg)",
    mozTransform: "rotate(225deg)",
    msTransform: "rotate(225deg)",
    oTransform: "rotate(225deg)",
    transform: "rotate(225deg)"
  });

  var deg = 225;

  perform('.month s', deg, 45);
  perform('.time s', deg, 165);
  perform('.lines s', deg, 105);
  perform('.rate s', deg, 170);

  function perform(ele, deg, num) {
    var timer = setInterval(function () {
      deg--;

      $(ele).css({
        webkitTransform: "rotate(" + deg + "deg)",
        mozTransform: "rotate(" + deg + "deg)",
        msTransform: "rotate(" + deg + "deg)",
        oTransform: "rotate(" + deg + "deg)",
        transform: "rotate(" + deg + "deg)"
      });

      if (deg == num) {
        clearInterval(timer);
      }
    }, 3);
  }
}

// 年利率排序
function rates(obj) {
  $(obj).find('span').toggleClass('icon-arrow-up')
}

// 举报
function report() {
  $('#contentReport').html("");
  var ele = $('#report');
  startLayer(ele);
  contrast("举报", ele, cancelLayer, "600px");
}

// 提交成功浮层
function successForm(obj) {
  var ele = $(obj);
  startLayer(ele);
  contrastNoTitle(ele, cancelLayer);
}

// 未通过浮层
function notThrough(obj, on) {
  var ele = $(obj);
  ele.find('.reApprove').val($(on).attr('id'));
  startLayer(ele);
  contrastNoTitle(ele, cancelLayer);
}

// 刷新页面
function successFormCancel() {
  window.location.reload('/');
}

/***** 产品交互js共用方法 *******************************************************************************************************************/
// 产品类表分页请求成功后
function pageToCallback(data, text) {
  frontPostFinish(data, ajaxSuccess, text);
}

function enterpriseSearchCallback(data, text) {
  frontPostFinish(data, searchSuccess, text);
}

// 渲染页面
function ajaxSuccess(data, text) {
  $('#list').html('');
  for (var i = 0; i < data.data.length; i++) {
    $('#list').append("<tr>\n" +
      "                                        <td><a href=\"/" + text + "/" + data.data.data[i].id + "\">" + data.data.data[i].name + "</a></td>\n" +
      "                                        <td>" +
      "                                            <input type=\"hidden\" class=\"bankName\" name=\"" + data.data.data[i].name + " | " + data.data.data[i].banks.name + "\">\n" +
      "                                               <img src=\"" + QNConfig.QN_DOMAIN + data.data.data[i].banks.logo[0].identify + "\"\n" +
      "                                                 alt=\"\"></td>\n" +
      "                                        <td><p>" + data.data.data[i].maxLoanAmount + "万</p></td>\n" +
      "                                        <td><p>" + data.data.data[i].minAnnualInterestRate + "%-" + data.data.data[i].maxAnnualInterestRate + "%</p>\n" +
      "                                        </td>\n" +
      "                                        <td><p>" + data.data.data[i].minLoanTerm + "-" + data.data.data[i].maxLoanTerm + "个月</p></td>\n" +
      "                                        <td><p>" + data.data.data[i].applicationVolume + "</p></td>\n" +
      "                                        <td><p>" + data.data.data[i].volume + "</p></td>\n" +
      "                                        <td>\n" +
      "                                            <div class=\"gz\">\n" +
      "                                                <s></s>\n" +
      "                                            </div>\n" +
      "                                        </td>\n" +
      "                                        <td>\n" +
      "                                            <i class=\"iconfont icon-up\"></i>\n" +
      "                                        </td>\n" +
      "                                        <td>\n" +
      "                                            <div>\n" +
      "                                                <ul>\n" +
      "                                                    <li>\n" +
      "                                                        <span class=\"gds\" onclick='mores(this)'>更多 <i\n" +
      "                                                                    class=\"iconfont icon-jiantouarrow486\"></i></span>\n" +
      "                                                        <ul class=\"sub\">\n" +
      "                                                            <li><a href=\"/" + text + "/" + data.data.data[i].id + "\">查看详情</a></li>\n" +
      "                                                            <li><a href=\"javascript:;\" onclick=\"riskLayer();\">风险评估</a></li>\n" +
      "                                                            <li><a href=\"javascript:;\" class='InterestedBtnOn' id='" + data.data.data[i].id + "' onclick=\"interestedBtnOn(this);\">我感兴趣</a></li>\n" +
      "                                                        </ul>\n" +
      "                                                    </li>\n" +
      "                                                </ul>\n" +
      "                                                <span class=\"addContrast\" onclick='addComparison(this);'>+对比</span>\n" +
      "                                            </div>\n" +
      "                                        </td>\n" +
      "                                    </tr>");
  }
}

// 获取参数
function parameterObtain() {
  var page = $('#list').attr('page');
  var keyword = $('#keyword').val();
  var banks = [];
  $('.banksEle .icon-check-chosen').each(function () {
    banks.push($(this).siblings('input').val())
  });

  var systemLabels = [];
  $('.systemLabelsEle .icon-check-chosen').each(function () {
    systemLabels.push($(this).siblings('input').val())
  });

  var loanAmount = $('#loanAmount').val();
  var loanTerm = $('#loanTerm').val();

  var parameter = {
    page: page,
    keyword: keyword,
    banks: banks,
    systemLabels: systemLabels,
    loanAmount: loanAmount,
    loanTerm: loanTerm
  };

  return parameter;
}

// 搜索
function searchSuccess(data, text) {
  pageStart(data.data.count, '#list', pageTo);
  ajaxSuccess(data, text);
}

// 关注/取消关注(详情页)---调用
function interestedBtn(obj) {
  var status = $('#marmot_memberId').val();

  if (status == 0) {
    loginTo("您还未登录，是否立即登录！", "立即登录");
  } else {
    if ($(obj).hasClass('on')) {
      attentionCancel(obj);
    } else {
      attention(obj)
    }
  }
}

// 关注（产品列表）---调用
function interestedBtnOn(obj) {
  var status = $('#marmot_memberId').val();

  if (status == 0) {
    loginTo("您还未登录，是否立即登录！", "立即登录");
  } else {
    attentionList(obj);
  }
}

// 关注
function attention(obj) {
  var productId = $('#productId').val();
  var type = $('#types').val();

  var data = {
    productId: productId,
    type: type
  };

  ajaxPostCsrf("/attentions/add", data, attentionCallback);

  function attentionCallback(data) {
    frontPostFinish(data, attentionSuccess);
  }

  function attentionSuccess(data) {
    $('#attentionId').val(data.data[0].id);
    layer.msg("已加入为感兴趣的产品，请留意动态通知哦。");
    $('.textFocus').addClass('on').html("取消关注");
    $('.iconFocus').addClass('on');
  }
}

// 取消关注
function attentionCancel(obj) {
  var attentionId;
  if (!$(obj).attr('id')) {
    attentionId = $('#attentionId').val();
  } else {
    attentionId = $(obj).attr('id');
  }

  ajaxGetCsrf("/cancelAttentions/delete?id=" + attentionId, {}, attentionCancelCallback);

  function attentionCancelCallback(data) {
    frontPostFinish(data, attentionCancelSuccess);
  }

  function attentionCancelSuccess() {
    layer.msg("已从感兴趣的产品中删除，请留意动态通知哦。");
    if (!$(obj).attr('id')) {
      $('.textFocus').removeClass('on').html("我感兴趣");
      $('.iconFocus').removeClass('on');
    } else {
      $(obj).parents('tr').remove();
    }
  }
}

// 产品列表关注
function attentionList(ele) {
  var productId = $(ele).attr('id');
  var type = $('#types').val();

  var data = {
    productId: productId,
    type: type
  };

  ajaxPostCsrf("/attentions/add", data, attentionListCallback);

  function attentionListCallback(data) {
    frontPostFinish(data, attentionListSuccess);
  }

  function attentionListSuccess(data) {
    layer.msg("已加入为感兴趣的产品，请留意动态通知哦。")
  }
}

// 申请/发布-“登录/身分认证”-验证
function applyVerification(types) {
  var status = $('#marmot_memberId').val();

  if (status == 0) {
    loginTo("您还未登录，是否立即登录！", "立即登录");
  } else {
    var type = $('#type').val();
    var productId = $("#productId").val();

    ajaxGetCsrf("/verificationMemberIdentity?type=" + type, {}, verificationCallback);

    function verificationCallback(data) {
      frontPostFinish(data, verificationSuccess);
    }

    function verificationSuccess() {
      if (types == "apply") {
        window.location.replace("/orders/add?type=" + type + "&productId=" + productId + "");
      } else {
        window.location.replace("/demands/add");
      }
    }
  }
}

// 判断身份认证弹窗
function orCertification() {
  var ele = $('#certification');
  startLayer(ele);
  contrastNoTitle(ele, cancelLayer);
}

// 获取预约办理支行
function getBankBranch(bankID) {
  ajaxGetCsrf('/braches?search=' + bankID, {}, getBankBranchCallback);

  function getBankBranchCallback(data) {
    frontPostFinish(data, getBankBranchSuccess);
  }


  function getBankBranchSuccess(data) {
    $('#bankBranch').html("");
    for (var i = 0; i < data.data.count; i++) {
      $('#bankBranch').append("<option value='" + data.data.list[i].id + "'>" + data.data.list[i].name + "</option>");
    }
  }
}


jQuery.fn.size = function () {
  return this.length;
};
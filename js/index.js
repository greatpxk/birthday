var $hours = document.getElementById('hours');
var $minutes = document.getElementById('minutes');
var last_deg = {
  hours: 0,
  minutes: 0
};

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

function toTime(hours, minutes) {
  if (hours >= 6 && hours < 12) {
    $hours.className = 'left';
  } else {
    $hours.className = 'right';
  }

  if (minutes <= 30) {
    $minutes.className = 'back left';
  } else {
    $minutes.className = 'left';
  }

  set($hours,  (30 * hours + minutes / 2) % 360);
  set($minutes, (6 * minutes) % 360);
}

function set ($elmt, deg) {
  if (deg < 180) {
    deg = deg + 6;
  } else {
    deg = deg - 6;
  }
  //if ((deg % 360) < (last_deg[$elmt.id] % 360)) {
  if (deg < last_deg[$elmt.id]) {
    deg = (deg % 360) + Math.ceil(last_deg[$elmt.id] / 360) * 360;
  }
  last_deg[$elmt.id] = deg;
  $elmt.style.transform = 'rotate(' + deg + 'deg)';
  $elmt.style.webkitTransform = 'rotate(' + deg + 'deg)';
}

$(document).ready(function() {
  setTimeout(function () {
    $('#love').text("09-16 是我们在一起的日子");
    $('#love').animateCss('fadeIn');
    toTime(9, 16);
  }, 4000);

  setTimeout(function () {
    $('#love').animateCss('fadeOut');
    $('#love').text("");
  }, 10000);

  setTimeout(function () {
    $('#love').text("12-25 我们在一起100天");
    $('#love').animateCss('fadeIn');
    toTime(12, 25);
  }, 15000);

  setTimeout(function () {
    $('#love').animateCss('fadeOut');
    $('#love').text("");
  }, 20000);

  setTimeout(function () {
    $('#love').text("04-04 我们在一起200天");
    $('#love').animateCss('fadeIn');
    toTime(4, 4);
  }, 25000);

  setTimeout(function () {
    $('#love').animateCss('fadeOut');
    $('#love').text("");
  }, 30000);

  setTimeout(function () {
    $('#love').text("07-13 我们在一起300天");
    $('#love').animateCss('fadeIn');
    toTime(7, 13);
  }, 35000);

  setTimeout(function () {
    $('#love').animateCss('fadeOut');
    $('#love').text("");
  }, 40000);

  setTimeout(function () {
    $('#love').text("10-21 我们在一起400天");
    $('#love').animateCss('fadeIn');
    toTime(7, 13);
  }, 45000);

  setTimeout(function () {
    $('#love').animateCss('fadeOut');
    $('#love').text("");
  }, 50000);

  setTimeout(function () {
    $('#love').text("08-18 你的生日也是我最重要的数字");
    $('#love').animateCss('fadeIn');
    toTime(8, 18);
  }, 55000);

  setTimeout(function () {
    $('#love').animateCss('fadeOut');
    $('#love').text("");
  }, 60000);

  setTimeout(function () {
    $('#love').text("13-14 我都想和你一起度过");
    $('#love').animateCss('fadeIn');
    toTime(1, 14);
  }, 65000);

  setTimeout(function () {
    $('#love').animateCss('fadeOut');
    $('#love').text("");
  }, 70000);

  setTimeout(function () {
    $('#love').text("我爱你 陈钰");
    $('#love').animateCss('fadeIn');
  }, 75000);
});
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("scroll");
  }
  else{
    $('header').removeClass("scroll");
  }
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('h2').addClass("scroll");
    $('h2 br').hide();
  }
  else{
    $('h2').removeClass("scroll");
    $('h2 br').show("display:show");
  }
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('h1').addClass("scroll");
  }
  else{
    $('h1').removeClass("scroll");
  }
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('h1 a').addClass("scroll");
  }
  else{
    $('h1 a').removeClass("scroll");
  }
});
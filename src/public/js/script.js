/* eslint-disable */

/* SPLASH */
$(function(){
  $('[data-behaviour="go-to-choose-city"]').on('click touchstart', function(evt){
    evt.preventDefault();
  
    $('.cities').css('display', 'flex');
  });

  $('[data-behaviour="go-to-information"]').on('click touchstart', function(evt){
    evt.preventDefault();
  
    $('.splash').css('display', 'none');
    $('.information').css('display', 'block');
    $('body').scrollTop();
  });
});


/* CHOOSE CITY */
$(function(){
  $('.cities .list-item[data-city="Barcelona"]').css('display', 'none');

  $('.cities .list button').on('click touchstart', function(evt){
    evt.preventDefault();

    const selected = $(this).text();

    $('[data-ui="city"]').text(selected);

    $('.cities .list-item').css('display', '');
    $('.cities .list-item[data-city="' + selected + '"]').css('display', 'none');

    $('.cities').css('display', 'none');
    $('body').scrollTop();
  });
});


/* INFORMATION */
$(function(){
  $('[data-behaviour="go-to-sign-up"]').on('click touchstart', function(evt){
    evt.preventDefault();

    $('.information').css('display', 'none');
    $('.signup-form').css('display', 'block');
    $('body').scrollTop();
  });
});


/* SIGN UP */
$(function(){
  $('[data-behaviour="sign-up"]').on('submit', function(evt){
    evt.preventDefault();

    $('.signup-form').css('display', 'none');
    $('.thanks').css('display', 'block');
    $('body').scrollTop();
  });
});

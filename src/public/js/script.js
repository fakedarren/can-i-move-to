/* eslint-disable */

window.onpopstate = function(event) {
  if (event.state) {
    const selected = event.state.selected;
    $('[data-ui="city"]').text(selected);

    for (var i = 1; i <= 10; i++) {
      $('.polaroid:nth-child(' + i + ')').css('background-image', 'url(\'/img/cities/' + selected.toLowerCase() + '/' + i + '.jpg\')');
    }

    $('.splash').css('display', 'flex');
    $('.cities').css('display', 'none');
    $('.information').css('display', 'none');
    $('.signup-form').css('display', 'none');
    $('.thanks').css('display', 'none');
  }
};

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

    window.scrollTo(0, 0);
  });
});


/* CHOOSE CITY */
$(function(){
  $('.cities .list-item[data-city="Barcelona"]').css('display', 'none');

  $('.cities .list button').on('click touchstart', function(evt){
    evt.preventDefault();

    const selected = $(this).text();
    history.pushState({selected}, selected, selected.toLowerCase());

    $('[data-ui="city"]').text(selected);

    $('.cities .list-item').css('display', '');
    $('.cities .list-item[data-city="' + selected + '"]').css('display', 'none');

    $('.cities').css('display', 'none');

    for (var i = 1; i <= 10; i++) {
      $('.polaroid:nth-child(' + i + ')').css('background-image', 'url(\'/img/cities/' + selected.toLowerCase() + '/' + i + '.jpg\')');
    }

    window.scrollTo(0, 0);
  });

  $('[data-behaviour="close-cities"]').on('click touchstart', function(evt){
    evt.preventDefault();

    $('.cities').css('display', 'none');

    window.scrollTo(0, 0);
  });
});


/* INFORMATION */
$(function(){
  $('[data-behaviour="go-to-sign-up"]').on('click touchstart', function(evt){
    evt.preventDefault();

    $('.information').css('display', 'none');
    $('.signup-form').css('display', 'block');

    window.scrollTo(0, 0);
  });
});


/* SIGN UP */
$(function(){
  $('[data-behaviour="sign-up"]').on('submit', function(evt){
    evt.preventDefault();

    $('.signup-form').css('display', 'none');
    $('.thanks').css('display', 'flex');

    window.scrollTo(0, 0);

    $.post('/join', {
      email: $('[name="email"]').val(),
      name: $('[name="name"]').val(),
    });;
  });
});

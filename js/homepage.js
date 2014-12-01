$(document)
  .ready(function() {

$('.ui.dimmable')

    .dimmer({
      on: 'hover'

});

$('a[href^="#html5"]').on('click', function(event) {

    $('.ui.modal')
      .modal('show');

});

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

$('.gotop').on('click', function(event) {

     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;

});

    var
      changeSides = function() {
        $('.ui.shape')
          .eq(0)
            .shape('flip over')
            .end()
          .eq(1)
            .shape('flip over')
            .end()
          .eq(2)
            .shape('flip back')
            .end()
          .eq(3)
            .shape('flip back')
            .end()
        ;
      },
      validationRules = {
        firstName: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'No se ingreso ningun dato'
            },
            {
              type   : 'email',
              prompt : 'Por favor ingresa un e-mail valido'
            }
          ]
        }
      }
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    $('.ui.form')
      .form(validationRules, {
        on: 'blur'
      })
    ;

    $('.masthead .information')
      .transition('scale in')
    ;

    setInterval(changeSides, 3000);

  })
;
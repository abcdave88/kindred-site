$(document).ready(function(){

  $('.hero2').hide();



  $(function() {
    $('a.ks-gallery').fancybox({
       type:'image',
       padding: 0,
       scrolling: 'no',
       helpers : {
        overlay: {
         css: {'background-color': '#000'},
         opacity: 0.3
          },
          title : { type : 'inside' }
        }
      });
    });

  function changeHero(){
    $('.hero1').delay(3000).fadeOut(1500, function(){
      $('.hero2').fadeIn(1500).delay(3000).fadeOut(1500, function(){
        $('.hero1').fadeIn(1500, function(){
          var i = 0;
          if(i<1){
            changeHero();
          }
        });
      });
    });
  };

  changeHero();
});




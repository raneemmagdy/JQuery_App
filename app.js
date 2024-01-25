
let menuwidth=$('.menu').outerWidth()

$('.option').on('click',function(){
    if($('aside').css('left')=='0px'){$('aside').animate({left:`-${menuwidth}`},1000)
 
}
    else $('aside').animate({left:`0px`},1000)
})
$('.menu ul i ').on('click',function(){
 $('aside').animate({left:`-${menuwidth}`},1000)
})


$('aside li').on('click',function(){
  $('a[href^="#"]').click(function(){
    const href=$(this).attr('href')
    let Sec=$(href).offset().top
 
   $('html,body').animate({scrollTop:Sec},1000)
})

})



// duration
$('.accordion-header').click(function () {
  var content = $(this).next('.accordion-content');
  content.slideToggle();
  $('.accordion-content').not(content).slideUp();
});





//details

const targetDate = new Date('2024-02-25T14:45:00'); 


function updateCountdown() {
   
    const currentDate = new Date();

    
    const difference = targetDate - currentDate;

    
    const days = Math.floor(difference / (24 * 60 * 60 * 1000));
    const hours = Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((difference % (60 * 1000)) / 1000);

   
    document.getElementById('days').textContent = `${days} D`;
    document.getElementById('hours').textContent = `${hours} h`;
    document.getElementById('minutes').textContent = `${minutes} m`;
    document.getElementById('seconds').textContent = `${seconds} s`;

   
    if (difference <= 0) {
        document.getElementById('countdown').textContent = "Countdown has reached zero!";
        clearInterval(interval);
    }
}

const interval = setInterval(updateCountdown, 1000);






// contact


function updateCounter() {
  var textarea = $('#floatingTextarea2');
  var charCountDisplay = $('#charCount');
  var maxChars = 100;

  var remainingChars = maxChars - textarea.val().length;

  if (remainingChars <= 0) {
      charCountDisplay.html('<span style="color: #D62E33;">Your available characters have finished.</span> Character Remaining');
      textarea.prop('disabled', true);
  } else {
      charCountDisplay.html( '<span style="color: #D62E33;">' + remainingChars + '</span> Character Remaining');
      textarea.prop('disabled', false);
  }
}
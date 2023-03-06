// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function info() {
   alert("This raffle contains a total of 1000 participants. Spots fill up on a first come first served basis. The winner will be contacted via email and via a phone text message.");
}

/* Calling function */
document.getElementById("theButton").onclick=info;

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(clickLikeBtn);
}

function clickLikeBtn(event) {
  event.preventDefault();
  ga('create','UA-189684665-1','auto');
  //ga('send','event','signup','click');
  ga('send','event','like','click');
}
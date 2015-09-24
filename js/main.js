// we can log something to the console...
console.log('ayy it\'s good \'ol javascript!');

// and we can declare functions
function doSomething() {
  console.log('you did something woo 👍');
  $('#meme').attr('src', 'img/rarepepe.jpg');
}

/* This set's the variable `$memeButton` to be the jQuery object.
 * don't freak out with the dollar signs, they don't mean anything special
 * the $ is just jQuery looking slick. jQuery makes a variable named `$`
 * and put's it in the document so you can access it
 */
var $memeButton = $('#memeButton');

// this sets an event so that every time
$memeButton.click(doSomething);

// YOUR MISSION:
/* Every time #memeButton is clicked, it should go to the next meme,
 * it can choose a meme at random or it can just go based on an order
 * also make a button to add/remove the `pink` class from #meme
 * this should use jQuery's `addClass` and `removeClass` functions
 */

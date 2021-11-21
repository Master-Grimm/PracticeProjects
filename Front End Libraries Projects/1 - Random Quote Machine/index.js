const projectName = "random-quote-machine";
localStorage.setItem('example_project', 'Random Quote Machine');
let quotesData;

//function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var colors = ['#CCCCCC', '#FC4E3A', '#FB6964', '#FCA7B1', '#CF71F5', '#F39C12', '#FAF47D', '#18D96B', '#B1FF87', '#399AFA', '#1AC7A4', '#A3FFF3'];
var currentQuote = '', currentAuthor = '';

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: "application/json"
    },
    url: 'https://gist.githubusercontent.com/Master-Grimm/d4a8fcb193931a3f4436280faeaeb849/raw/0eacff9cd87540aaedb1daae11bd238fbc894b9a/quotes.json',
    success: function(jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

function getRandomQuote() {
  return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

function getQuote() {

  let randomQuote = getRandomQuote();
  
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  //if(inIframe())
  //{
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=MetalGearQuoteMachine&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" -' + currentAuthor));

    $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=MetalGearQuoteMachine&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
  //}
  
  $(".quote-text").animate(
    { opacity: 0 },
    400,
    function() {
      $(this).animate({ opacity: 1}, 400);
      $('#text').text(randomQuote.quote);
    }
  );

  $(".quote-author").animate(
    { opacity: 0 },
    400,
    function() {
      $(this).animate({ opacity: 1}, 400);
      $('#author').html(randomQuote.author);
    }
  );

  var color = Math.floor(Math.random() * colors.length);
  $("html body").animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    400
  );
  $(".button").animate(
    {
      backgroundColor: colors[color]
    },
    400
  );
}

$(document).ready(function() {
  getQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote);

  $('#tweet-quote').on('click', function() {
  //  if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=MetalGearQuoteMachine&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" -' + currentAuthor));
  //  }
  });

  $('#tumblr-quote').on('click', function() {
  //  if(!inIframe()) {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=MetalGearQuoteMachine&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
  //  }
  });
});
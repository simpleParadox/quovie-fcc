function setQuote(e,t,n){t="undefined"!=typeof t?t:".quote1",n="undefined"!=typeof n?n:".movie1",e.quote.length>80?($(t).css("font-size","1.5em"),console.log("yes")):$(t).css("font-size","2em"),$(t).html('"'+e.quote+'"'),$(n).html("~ "+e.author)}function setBackground(e){var t=$(window).width(),n="";n=t>1400?"original":t>900?"w1280":t>600?"w780":"w300",e=e.replace("%size%",n),console.log(e),$("body").css("background-image","url("+e+")")}function setTweetContent(e){$("#tweet-btn").attr("href","https://twitter.com/intent/tweet?text="+e)}function setLoading(){$("#get-quote-btn").html("<p><i class='fa fa-refresh loading' aria-hidden='true'></i>Loading</p>")}function removeLoading(){$("#get-quote-btn").html("<p><i class='fa fa-refresh' aria-hidden='true'></i>Generate</p>")}function getBackdrop(e){var t="https://image.tmdb.org/t/p/%size%//";$.ajax({url:"https://api.themoviedb.org/3/search/movie",type:"GET",data:{api_key:"ce668d9d2acd4840d5452f31c1c21e86",language:"en-US",query:e,page:"1",include_adult:"true"},dataType:"json",success:function(e){setBackground(null!==e.results[0].backdrop_path?t+=e.results[0].backdrop_path:"images/default-bg.jpg")},error:function(e){setBackground("images/default-bg.jpg"),console.log(e)}})}function generateQuote(e){e="undefined"!=typeof e?e:1,setLoading(),$(".content").hide().fadeOut(2e3),$.ajax({url:"https://andruxnet-random-famous-quotes.p.mashape.com/",type:"POST",data:{cat:"movies",count:e},dataType:"json",success:function(e){setQuote(e),getBackdrop(e.author),setTweetContent(e.quote),$(".content").fadeIn(2e3),removeLoading()},error:function(e){console.log(e)},beforeSend:function(e){e.setRequestHeader("X-Mashape-Key","VGK2RyCOv7mshi5fFjlenbMiJwbpp1wbi47jsnXF6gGuKcVNwQ")}})}$(document).ready(function(){generateQuote(),$("#get-quote-btn").click(function(){setLoading(),generateQuote()})});
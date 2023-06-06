/*
* LAB 16
* AJAX and API queriying
*  
*/

const LEFT_BUTTON = document.getElementsByClassName("left_button")[0];
LEFT_BUTTON.addEventListener('click', function() {
  queryComic('https://xkcd.now.sh?comic='+ String(CURR_NUM-1));
});

const RIGHT_BUTTON = document.getElementsByClassName("right_button")[0];
RIGHT_BUTTON.addEventListener('click', function() {
  queryComic('https://xkcd.now.sh?comic='+ String(CURR_NUM+1));
});

//https://xkcd.now.sh/?comic=303

function queryComic(in_url = 'https://xkcd.now.sh?comic=latest') {
  $.ajax({
    url: in_url,
    type: "GET",
    dataType : "json",
    success: queryAndSetComic,
    error: function (jqXHR, textStatus, errorThrown) { 
        console.log("Error:", textStatus, errorThrown);
    }
  });
} 

let comicObj = null;

function queryAndSetComic(data) {
  comicObj = data;
  console.log(data);
  setComic();
}

function setComic() {
  const COMIC_IMG = document.getElementsByClassName("comic")[0];
  COMIC_IMG.src = comicObj.img;
  const COMIC_IMG_TITLE = document.getElementsByClassName("comic_title")[0];
  COMIC_IMG_TITLE.innerHTML = comicObj.title
  const COMIC_IMG_SUBTITLE = document.getElementsByClassName("comic_subtitle")[0];
  COMIC_IMG_SUBTITLE.innerHTML = "#" + comicObj.num + ", " + comicObj.month + "/" + comicObj.year
  MOST_RECENT_NUM = MOST_RECENT_NUM ?? comicObj.num;
  CURR_NUM = comicObj.num;

  RIGHT_BUTTON.style.display = MOST_RECENT_NUM == comicObj.num ? "none" : "block";
  LEFT_BUTTON.style.display = MOST_RECENT_NUM == 1 ? "none" : "block";
}

var MOST_RECENT_NUM = null;
var CURR_NUM = null;

queryComic();



/* 
// the better way to do this, using fetch()
let RESPONSE = ""
fetch('https://xkcd.com/info.0.json', {
  method: 'GET',
  mode: 'no-cors',
})
.then(response => {
  RESPONSE = response;
  console.log(response);
})
.catch(error => {
  // Handle any errors
});
*/
/*
* LAB 14
* loops
*  
*/

const QUERY_BUTTON = document.getElementsByClassName("query_button")[0]

QUERY_BUTTON.addEventListener('click', queryComic)

function queryComic() {
  QUERY_BUTTON.style.display = 'none';
  $.ajax({
    url: "https://xkcd.now.sh?comic=latest",
    type: "GET",
    dataType : "json",
    success: queryAndSetComic,
    error: function (jqXHR, textStatus, errorThrown) { 
        console.log("Error:", textStatus, errorThrown);
    }
  });
}
let QUERIED_COMIC = null;
function queryAndSetComic(data) {
  QUERIED_COMIC = data;
  console.log(data);
  setComic();
}

function setComic() {
  const COMIC_IMG = document.getElementsByClassName("comic")[0];
  COMIC_IMG.src = QUERIED_COMIC.img;
  const COMIC_IMG_TITLE = document.getElementsByClassName("comic_title")[0];
  COMIC_IMG_TITLE.innerHTML = QUERIED_COMIC.title
  const COMIC_IMG_SUBTITLE = document.getElementsByClassName("comic_subtitle")[0];
  COMIC_IMG_SUBTITLE.innerHTML = "#" + QUERIED_COMIC.num + ", " + QUERIED_COMIC.month + "/" + QUERIED_COMIC.year
}

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
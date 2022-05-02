// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;

let results = document.getElementById("results");

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res.articles);
    append(res.articles);
  });

function append(data) {
  results.innerHTML = null;
  data.forEach((element) => {
    let news = document.createElement("div");
    news.setAttribute("class", "news");

    let img = document.createElement("img");

    img.src = element.urlToImage;
    let details = document.createElement("div");
    details.setAttribute("class", "details");
    let topic = document.createElement("h3");
    topic.innerText = element.title;

    let description = document.createElement("p");
    description.innerText = element.description;
    details.append(topic, description);
    news.append(img, details);
    results.append(news);
  });
}

function cSearch() {
  let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res.articles);
      append(res.articles);
    });
}

let sidebar = document.getElementById("sidebar").children;
for (let el of sidebar) {
  el.addEventListener("click", cSearch);
}




//search part
let searchData=JSON.parse(localStorage.getItem("search"))||[]
let search=(e)=>{
    if(e.key==="Enter"){
    
        let obj={
            search: document.getElementById("search_input").value,
        }
        searchData.push(obj);
        localStorage.setItem("search",JSON.stringify(searchData));
         window.location.href="search.html"

    }
}






document.getElementById("search_input").addEventListener("keydown",search);









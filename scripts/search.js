// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


let search=JSON.parse(localStorage.getItem("search"));

search.map(element => {
    if(element.search==="tesla"){
        
      let url=`https://masai-mock-api.herokuapp.com/news?q=${element.search} `
      fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res.articles);
    append(res.articles);
  });
      
    }
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
          news.addEventListener("click",function(){
              print(element);
          })
        });
      }
      let newsPrint=JSON.parse(localStorage.getItem("news"))||[]
        function print(element){
           newsPrint.push(element);

           localStorage.setItem("news",JSON.stringify(newsPrint));
           window.location.href="news.html"
        }


        

});


let search1=(e)=>{
    if(e.key==="Enter"){
    
    let value1=document.getElementById("search_input").value
        let url=`https://masai-mock-api.herokuapp.com/news?q=${value1} `
        fetch(url).then((res)=>{
            return res.json();
        }).then((res)=>{
            append(res.articles);
        })
    }
}

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
      news.addEventListener("click",function(){
          print(element);
      })
    });
  }

  let newsPrint=JSON.parse(localStorage.getItem("news"))||[]
        function print(element){
           newsPrint.push(element);

           localStorage.setItem("news",JSON.stringify(newsPrint));
           window.location.href="news.html"
        }


document.getElementById("search_input").addEventListener("keydown",search1);

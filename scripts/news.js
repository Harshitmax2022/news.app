// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


let data=JSON.parse(localStorage.getItem("news"));
let results=document.getElementById("detailed_news")
data.forEach(element => {
    data.forEach((element) => {
        let news = document.createElement("div");
        news.setAttribute("class", "news");
    
        let img = document.createElement("img");
    
        img.src = element.urlToImage;
        let details = document.createElement("div");
        details.setAttribute("class", "details");
        let author =document.createElement("h3");
        author.innerText=`Author is - ${element.author}`;
        let topic = document.createElement("h3");
        topic.innerText = `Title -${element.title}`;
    let content=document.createElement("p");
    content.innerText=`Content- ${element.content}`
        let description = document.createElement("p");
        description.innerText = `Detail Description -${element.description}`;
        details.append(author,content,topic, description);
        news.append(img, details);
        results.append(news);
       console.log(element)
      });
});
const loadphone = category_id =>{
   const url = `https://openapi.programming-hero.com/api/news/category/0${category_id}`
   fetch(url)
   .then(res => res.json())
   .then(data => displyNews(data.data))
    
};
const displyNews = newses => {
  //  news found messase 
  document.getElementById('total-news').innerText = newses.length;
  // displyNews
  const newsContainer = document.getElementById('news-container');
   for (news of newses){
    console.log(news)
    
    const newsDiv = document.createElement('div')
    newsDiv.innerHTML = `
    <div class="card">
      <div class="card-horizontal">
          <div class="img-square-wrapper">
              <img class="" src="${news.thumbnail_url}" alt="Card image cap">
          </div>
          <div class="card-body">
              <h4 class="card-title">${news.title}</h4>
              <p class="card-text">${news.details.length > 200 ? news.details.slice(0,400)+ '...' : news.details}</p>
          </div>
      </div>
      <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
      </div>
  </div>
    `;
    newsContainer.appendChild(newsDiv)

   }
 
}

loadphone(8)
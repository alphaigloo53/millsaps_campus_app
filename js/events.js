console.log("events.js loaded");

document.addEventListener("DOMContentLoaded", function() {
  let newsContainer = document.querySelector("#news-container");
  let searchInput = document.querySelector("#search-input");
  let fetchButton = document.querySelector("#fetch-news-btn");
  fetchButton.addEventListener("click", async function() {
    let searchTerm = searchInput.value;
    if (searchTerm === "") {
      searchTerm = "college campus";
    }
    let apiKey = "3a796cfa6d5148d982912d0af2f88f84";
    let endpoint = `https://newsapi.org/v2/everything?q=${searchTerm}&language=en&pageSize=9&apiKey=${apiKey}`;
    newsContainer.innerHTML = "<p>Loading news...</p>";
    let response = await fetch(endpoint);
    let data = await response.json();
    console.log(data);
    let articles = data.articles;
    newsContainer.innerHTML = "";
    articles.forEach(function(article) {
      if (!article.title || !article.description) {
        return;
      }
      let imageHTML = "";
      if (article.urlToImage) {
        imageHTML = `<img src="${article.urlToImage}" class="card-img-top news-img" alt="News image">`;
      }
      newsContainer.innerHTML += `
        <div class="col-md-4">
          <div class="card h-100">
            ${imageHTML}
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <a href="${article.url}" target="_blank" class="btn btn-outline-primary btn-sm">Read More</a>
            </div>
            <div class="card-footer text-muted">
              <small>${article.source.name}</small>
            </div>
          </div>
        </div>
      `;
    });

    if (articles.length === 0) {
      newsContainer.innerHTML = "<p>No articles found. Try a different search term</p>";
    }

  }); 

});

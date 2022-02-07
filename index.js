const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');
const ArticlesApi = require('./articlesApi');

model = new ArticlesModel();
api = new ArticlesApi();
view = new ArticlesView(model, api);

console.log('Hello!');

// Local data
// const articlesData = [
//   {headline: "First article", thumbnail: "./images/image1.jpeg", webUrl: "https://www.google.com/"},
//   {headline: "Second article", thumbnail: "./images/image2.jpeg", webUrl: "https://www.google.com/"}, 
//   {headline: "Third article", thumbnail: "./images/image3.jpeg", webUrl: "https://www.google.com/"}
// ];

// model.setArticles(articlesData);
// view.displayArticles();

// API
api.loadArticles((articles) => {
  let articlesList = articles.response.results;
  console.log(articlesList);    // Log list of articles
  model.setArticles(articlesList);
  view.displayArticles();
});

  
model.reset();

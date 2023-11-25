import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
const News = ({ category }) => {
  const [articles, addArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [finalSearch, setSearch] = useState('');
  const {searchTerm} = useParams();
  let resultsFound = true;
  let totalResults = 0;
  let page = 1;
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const fetchData = async () => {
    setLoading(true);
    const url1 = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=9`;
    const url2 = `https://newsapi.org/v2/top-headlines?q=${finalSearch}&apiKey=${apiKey}&page=${page}&pageSize=9`;
    const url = (category === "search")? url2: url1;
    page += 1;
    let data = await fetch(url);
    let parseData = await data.json();
    const uniqueArticles = parseData.articles.filter((article) => {
      return !articles.some((existingArticle) => existingArticle.url === article.url);
    });
    addArticles((previousArticles) => [...previousArticles, ...uniqueArticles]);
    setLoading(false);
    resultsFound = (articles.length === 0)? false: true;
    totalResults = parseData.totalResults;
  };

  const observer = new IntersectionObserver(() => {
    if (articles.length < totalResults) {
      fetchData();
    }
  });

  useEffect(() => {
    setSearch(searchTerm || '');
    addArticles([]);
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
    observer.observe(document.getElementById("load"));
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="flex flex-column place-items-center">
      {!resultsFound && (category === "search") && <p>Sorry! No results found for your search:{searchTerm}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles &&
          articles.map((e) => (
            <NewsItem
              key={e.url + new Date().getMilliseconds()}
              url={e.url}
              imageLink={e.urlToImage}
              author={e.author}
              title={e.title}
              description={e.description}
              date={e.publishedAt}
              source={e.source.name}
            />
          ))}
      </div>
      {isLoading && <Loading/>}
      <div id="load" className="h-1"></div>
    </div>
  );
};
export default News;

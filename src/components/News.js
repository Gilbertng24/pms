import React, { useState, useEffect} from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import WithNewsLoading from "./WithNewsLoading";

function News(){

  const fectDataInterval = 18000000; // 1800,0000 milliseconds (18000 seconds = 300 mins)
  //const fectDataInterval = 1800000; // 1800,000 milliseconds (1800 seconds = 30 mins)
  const ratateNewsItemInterval = 5000; //5 seconds

  const [appState, setAppState] = useState({
    loading: false,
    newsList: null,
  });

  const NewsLoading = WithNewsLoading(NewsItem);
  // //newsapi.org
  // //newsapi works for local host, but does not work for Github page due to it's policy.
  // const newsAPI = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=c54af98eb3d54b599abd450a6d9ce599';

  // //GNews.io
  const apikey = '27f9541b45d21761ec795da0527d80dd';
  const newsAPI = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

  // //Azure
  // const azureApiKey = 'be33eb94-6052-4413-bf40-8f0fb8121550';
  // const newsAPI = 'https://api.cognitive.microsoft.com/bing/v7.0/news/search'
  // // Define your search parameters
  // const searchQuery = 'your_search_query'; // Modify with your query
  // const count = 10; // Number of results to retrieve
  // // Set up the request headers
  // const headers = {
  //   'Ocp-Apim-Subscription-Key': azureApiKey, // Include your API key here
  // };


  useEffect(() => {
    async function fetchData() {
      setAppState({ loading: true });

      const res = await axios.get(newsAPI);

      // //for Azure
      // const res = await axios.get(newsAPI, {
      //   params: {
      //     q: searchQuery,
      //     count: count,
      //   },
      //   headers: headers,
      // });

  console.log("........*.......")
  console.log(res.data.articles);
      const newsList = res.data.articles.map((article, index) => {return {id: index, author : article.author, title: article.title, publishedAt: article.publishedAt}});
      //setAppState({ loading: false, newsList: res.data.articles.slice(0,4) });
      setAppState({ loading: false, newsList: newsList});
    }
    fetchData();
    // Set up a timer to fetch data every 30 minutes
    const intervalId = setInterval(() => {
      fetchData();
    }, fectDataInterval); 

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };    
  }, [])

  
  //Loop through the newsList items and repeakly display one by one.
  const [currentIndex, setCurrentIndex] = useState(0);
  const initialNews = (appState.newsList == null) ? null : appState.newsList[currentIndex];
  const [currentItem, setCurrentItem] = useState(initialNews);

  useEffect(() => {
    if (appState.newsList != null){
      // Define a function to display the next item
    const displayNextItem = () => {
      if (currentIndex < appState.newsList.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setCurrentItem(appState.newsList[currentIndex + 1]);
      }
      //re-initial index to 0 for repeating
      else if (currentIndex == appState.newsList.length - 1) {  
        setCurrentIndex(0);
        setCurrentItem(appState.newsList[currentIndex]);
      }
    };

      // Use setTimeout to display items at a n-second interval
      const intervalId = setInterval(displayNextItem, ratateNewsItemInterval);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [currentIndex, appState.newsList]);

  //console.log(currentItem);

  return (
    <div className="fixed-bottom">
      <NewsLoading isLoading={appState.loading} news={currentItem} />
    </div>
  )
}

export default News;
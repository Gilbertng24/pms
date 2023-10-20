import React, { useState, useEffect} from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import WithNewsLoading from "./WithNewsLoading";

function News(){

  const fectDataInterval = 1800000; // 1800,000 milliseconds (1800 seconds = 30 mins)
  const ratateNewsItemInterval = 500000; //5 seconds

  const [appState, setAppState] = useState({
    loading: false,
    newsList: null,
  });

  const NewsLoading = WithNewsLoading(NewsItem);
  const newsAPI = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=c54af98eb3d54b599abd450a6d9ce599';
  
  useEffect(() => {
    async function fetchData() {
      setAppState({ loading: true });
      const res = await axios.get(newsAPI);
      //console.log(res.data.articles);
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
    <div>
      <NewsLoading isLoading={appState.loading} news={currentItem} />
    </div>
  )
}

export default News;
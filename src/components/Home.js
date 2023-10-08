import React, { useState, useEffect} from "react";
import axios from "axios";
import NewsHeading from "./NewsHeading";
import WithListLoading from "./WithListLoading";
import List from "./List";

function Home(){
  const [appState, setAppState] = useState({
    loading: false,
    news: null,
  });

  const ListLoading = WithListLoading(List);

  useEffect(() => {
    async function fetchData() {
      setAppState({ loading: true });
      const apiUrl = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=c54af98eb3d54b599abd450a6d9ce599';
      //const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
      const res = await axios.get(apiUrl);
      //console.log(res.data.articles.slice(0,4))
      //console.log(res)
      setAppState({ loading: false, news: res.data.articles.slice(0,4) })
    }
    fetchData();
  }, [setAppState])

  return (
    <div>
      <ListLoading isLoading={appState.loading} news={appState.news} />
    </div>
  )
}

export default Home;
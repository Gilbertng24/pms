import React, { useState, useEffect} from "react";
import axios from "axios";
import WithListLoading from "./WithListLoading";
import List from "./List";

function Home(){
  const [appState, setAppState] = useState({
    loading: false,
    news: null,
  });

  const ListLoading = WithListLoading(List);

  // useEffect(() => {
  //   async function fetchData() {
  //     setAppState({ loading: true });
  //     const apiUrl = 'https://newsapi.org/v2/top-headlines?country=ca&apiKey=c54af98eb3d54b599abd450a6d9ce599';
  //     //const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  //     const res = await axios.get(apiUrl);
  //     //console.log(res.data.articles.slice(0,4))
  //     //console.log(res)
  //     setAppState({ loading: false, news: res.data.articles.slice(0,4) })
  //   }
  //   fetchData();
  // }, [])

  return (
    <div className="container">
      {/* <ListLoading isLoading={appState.loading} news={appState.news} /> */}

      <div className="row">
        <div className="col">
          <h1 className="container mt-4">Cards</h1>
          <div className="card" style={{width: "400px"}}>
            <div className="card-header">
              Custom Printed Mug
            </div>
            <img className="card-img" src="https://pixelprowess.com/i/mug-rex.jpg" alt="Oscar" />
            <div className="card-body">
              <h5 className="card-title">Rex</h5>
              <h5 className="card-subtitle">Mayor of Binaryville</h5>
              <p className="card-text lh-sm">A well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
              <a href="#" className="card-link">more info</a>
            </div>
            <div className="card-footer">
              Now on sale
            </div> 
          </div>
        </div>

        <div className="col">
          <h1 className="container mt-4">Cards</h1>
          <div className="card" style={{width: "400px"}}>
            <div className="card-header">
              Custom Printed Mug
            </div>
            <img className="card-img" src="https://pixelprowess.com/i/mug-rex.jpg" alt="Oscar" />
            <div className="card-body">
              <h5 className="card-title">Rex</h5>
              <h5 className="card-subtitle">Mayor of Binaryville</h5>
              <p className="card-text lh-sm">A well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
              <a href="#" className="card-link">more info</a>
            </div>
            <div className="card-footer">
              Now on sale
            </div> 
          </div>
        </div>

      </div>

      <div className="row">
        <div className="col">
          <h1 className="container mt-4">Cards</h1>
          <div className="card" style={{width: "400px"}}>
            <div className="card-header">
              Custom Printed Mug
            </div>
            <img className="card-img" src="https://pixelprowess.com/i/mug-rex.jpg" alt="Oscar" />
            <div className="card-body">
              <h5 className="card-title">Rex</h5>
              <h5 className="card-subtitle">Mayor of Binaryville</h5>
              <p className="card-text lh-sm">A well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
              <a href="#" className="card-link">more info</a>
            </div>
            <div className="card-footer">
              Now on sale
            </div> 
          </div>
        </div>

        <div className="col">
          <h1 className="container mt-4">Cards</h1>
          <div className="card" style={{width: "400px"}}>
            <div className="card-header">
              Custom Printed Mug
            </div>
            <img className="card-img" src="https://pixelprowess.com/i/mug-rex.jpg" alt="Oscar" />
            <div className="card-body">
              <h5 className="card-title">Rex</h5>
              <h5 className="card-subtitle">Mayor of Binaryville</h5>
              <p className="card-text lh-sm">A well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.</p>
              <a href="#" className="card-link">more info</a>
            </div>
            <div className="card-footer">
              Now on sale
            </div> 
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;
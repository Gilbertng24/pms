import React, { useState, useEffect} from "react";
import axios from "axios";
import AdviceItem from "./AdviceItem";
import ActiveBus from "./ActiveBus";
import Covid19Item from "./Covid19Item";
import WithLoading from "./WithLoading";

function Home(){

  const fectDataInterval = 1800000; // 1800,000 milliseconds (1800 seconds = 30 mins)
  const ratateNewsItemInterval = 5000; //5 seconds
  const translinkApiKey = 'bR8iPRq64PPyp5iIYoSd';
  const translinkStopNo = 52030; //E 49 Ave @Main St

  const [adviceState, setAdviceState] = useState({
    loading: false,
    data: null,
  });

  const [busState, setBusState] = useState({
    loading: false,
    data: null,
  });

  const [covid19State, setCovid19State] = useState({
    loading: false,
    data: null,
  });

  
  const [weatherState, setWeatherState] = useState({
    loading: false,
    data: null,
  });


  const Advice = WithLoading(AdviceItem);
  const adviceAPI = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    async function fetchAdvice() {
      setAdviceState({ loading: true });
      const res = await axios.get(adviceAPI);
      console.log(res);
      if (res.data != null){
        const advice = res.data.slip.advice;
        setAdviceState({ loading: false, data: advice});  
      }
    }
    fetchAdvice();
    // Set up a timer to fetch data every 30 minutes
    const adviceIntervalId = setInterval(() => {
      fetchAdvice();
    }, fectDataInterval); 

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(adviceIntervalId);
    };    
  }, [])


  const ActiveBusRoute = WithLoading(ActiveBus);
  //const translinkAPI = 'https://api.translink.ca/rttiapi/v1/routes/49?apikey=bR8iPRq64PPyp5iIYoSd';
  //const translinkAPI = 'https://api.translink.ca/rttiapi/v1/stops/60980/estimates?apikey=bR8iPRq64PPyp5iIYoSd&count=3&timeframe=120&routeNo=050';
  //const translinkAPI = 'https://api.translink.ca/rttiapi/v1/buses?apikey=bR8iPRq64PPyp5iIYoSd&routeNo=099';
  //https://api.translink.ca/rttiapi/v1/buses?apikey=bR8iPRq64PPyp5iIYoSd&stopNo=52030
  const translinkAPI = `https://api.translink.ca/rttiapi/v1/buses?apikey=${translinkApiKey}&stopNo=${translinkStopNo}`; 
  

  useEffect(() => {   
    async function fetchData() {
      console.log("......");
      console.log(translinkAPI);
      setBusState({ loading: true });
      try{
        const res = await axios.get(translinkAPI);
        console.log(res);
        if (res.data != null){
          const list = res.data.map((route, index) => {return {id: index, destination : route.Destination, routeNo: route.RouteNo, vehicleNo: route.VehicleNo}});
          setBusState({ loading: false, data: list});  
        }  
      }
      catch (error){
        const list = "error";
        setBusState({ loading: false, data: list});  
      }
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
  },[])

  const Covid19 = WithLoading(Covid19Item);
  //const translinkAPI = 'https://api.translink.ca/rttiapi/v1/routes/49?apikey=bR8iPRq64PPyp5iIYoSd';
  //const translinkAPI = 'https://api.translink.ca/rttiapi/v1/stops/60980/estimates?apikey=bR8iPRq64PPyp5iIYoSd&count=3&timeframe=120&routeNo=050';
  //const translinkAPI = 'https://api.translink.ca/rttiapi/v1/buses?apikey=bR8iPRq64PPyp5iIYoSd&routeNo=099';
  //https://api.translink.ca/rttiapi/v1/buses?apikey=bR8iPRq64PPyp5iIYoSd&stopNo=52030
  const covid19API = `https://api.covid19tracker.ca/summary`; 
  

  // useEffect(() => {   
  //   async function fetchData() {
  //     console.log("......");
  //     console.log(covid19API);
  //     setBusState({ loading: true });
  //     const res = await axios.get(covid19API, {
  //       crossDomain: true, // For cross-origin requests
  //     });
  //     console.log(res);
  //     if (res.data != null){
  //       const list = res.data.map((route, index) => {return {id: index, destination : route.Destination, routeNo: route.RouteNo, vehicleNo: route.VehicleNo}});
  //       setCovid19State({ loading: false, data: list});  
  //     }
  //   }
  //   fetchData();
  //   // Set up a timer to fetch data every 30 minutes
  //   const intervalId = setInterval(() => {
  //     fetchData();
  //   }, fectDataInterval); 

  //   // Clean up the interval when the component unmounts
  //   return () => {
  //     clearInterval(intervalId);
  //   };    
  // },[])
 


  
  // //Loop through the newsList items and repeakly display one by one.
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const initialNews = (appState.newsList == null) ? null : appState.newsList[currentIndex];
  // const [currentItem, setCurrentItem] = useState(initialNews);

  // useEffect(() => {
  //   if (appState.newsList != null){
  //     // Define a function to display the next item
  //   const displayNextItem = () => {
  //     if (currentIndex < appState.newsList.length - 1) {
  //       setCurrentIndex(currentIndex + 1);
  //       setCurrentItem(appState.newsList[currentIndex + 1]);
  //     }
  //     //re-initial index to 0 for repeating
  //     else if (currentIndex == appState.newsList.length - 1) {  
  //       setCurrentIndex(0);
  //       setCurrentItem(appState.newsList[currentIndex]);
  //     }
  //   };

  //     // Use setTimeout to display items at a n-second interval
  //     const intervalId = setInterval(displayNextItem, ratateNewsItemInterval);

  //     // Clean up the interval when the component unmounts
  //     return () => clearInterval(intervalId);
  //   }
  // }, [currentIndex, appState.newsList]);

  // //console.log(currentItem);

  return (
    <div className="container">
      <div className="row">
        <Advice isLoading={adviceState.loading} data={adviceState.data} />
        <ActiveBusRoute isLoading={busState.loading} data={busState.data} stopNo={translinkStopNo}/>
      </div>
    </div>
  )
}

export default Home;
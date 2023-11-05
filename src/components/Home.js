import React, { useState, useEffect} from "react";
import axios from "axios";
import AdviceItem from "./AdviceItem";
import ActiveBus from "./ActiveBus";
import WithLoading from "./WithLoading";

function Home(){
  const fectDataInterval = 1800000; // 1800,000 milliseconds (1800 seconds = 30 mins)
  const translinkApiKey = 'bR8iPRq64PPyp5iIYoSd';
  const translinkStopNo = 60970; //Nearby Cosco Richmond, BC.
  const [adviceState, setAdviceState] = useState({
    loading: false,
    data: null,
  });
  const [busState, setBusState] = useState({
    loading: false,
    data: null,
  });
  const Advice = WithLoading(AdviceItem);
  const adviceAPI = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    async function fetchAdvice() {
      setAdviceState({ loading: true });
      const res = await axios.get(adviceAPI);
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
  //paht --> https://api.translink.ca/rttiapi/v1/buses?apikey=bR8iPRq64PPyp5iIYoSd&stopNo=52030
  const translinkAPI = `https://api.translink.ca/rttiapi/v1/buses?apikey=${translinkApiKey}&stopNo=${translinkStopNo}`; 
  
  useEffect(() => {   
    async function fetchData() {
      setBusState({ loading: true });
      try{
        const res = await axios.get(translinkAPI);
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
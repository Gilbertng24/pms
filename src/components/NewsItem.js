import React from "react";
import { nanoid } from "nanoid";
import { format } from 'date-fns-tz';

function NewsItem(props){
  const dateTimeFormat = 'MMMM dd, yyyy HH:mm:ss';
  const vancouverTimeZone = 'America/Vancouver';

//console.log(props);  
  return (    
    <div className="container-fluid position-absolute bottom-0 start-0 bg-primary">
      <footer className="text-start text-lg-start text-white">
        <div className="text-left p-3" key={nanoid()}>
          {/* <span className="fw-bold bg-info text-danger fw-bold">{(props === null || props.news === null || props.news.author === null) ? null : props.news.author}:</span> */}
          <span className="fst-italic bg-info text-danger fw-bold"> {(props === null || props.news === null || props.news.publishedAt === null) ? null: format(new Date(props.news.publishedAt), dateTimeFormat,{timeZone: vancouverTimeZone,})}</span>
          <span> {(props === null || props.news === null || props.news.title === null) ? null : props.news.title}</span>
        </div>
      </footer>
    </div>   
  );
}

export default NewsItem;
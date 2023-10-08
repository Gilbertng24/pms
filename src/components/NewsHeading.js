import React from "react";

function NewsHeading(props){
  const news = props;
  return (
    // <div>
    //   <ul>
    //     {news.map((heading) => {<li>{heading.title}</li>})};
    //   </ul>
    // </div>

    <div className="container my-5">
      <div>
        <p>Testing</p>
      </div>
      <footer className="bg-primary text-center text-lg-start text-white">
        <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
          <ul>
            {news.map((heading) => {<li>{heading.title}</li>})};
          </ul>
        </div>
      </footer>
    </div>



  )
}

export default NewsHeading;

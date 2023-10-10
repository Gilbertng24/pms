import React from 'react';
import { nanoid } from 'nanoid';

const List = (props) => {
  const { news } = props;
  if (!news || news.length === 0) return <p>No todos, sorry</p>;
  return (
    <div className="container-fluid position-absolute bottom-0 start-0 bg-primary">
        <footer className="text-start text-lg-start text-white">
            {news.map((news) => {
              return (
                <div className="text-left p-3" key={nanoid()}>
                      <span className="fw-bold">{news.author}:</span>
                      <span> {news.title}</span>
                </div>
              );
            })}
        </footer>
    </div>    
  );
};
export default List;

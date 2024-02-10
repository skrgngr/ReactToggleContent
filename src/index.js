// index.js
import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse>
              <Card
                cardTitle="Card Title 1"
                cardText="Lorem Ipsum Text 1"
                updatedTime="Last Updated 1 min ago"
                image="https://picsum.photos/id/237/200/300"
              />
            </Collapse>
          </div> 
          <div className="col">
            <Collapse>
              <Card
                cardTitle="Card Title 2"
                cardText="Lorem Ipsum Text 2"
                updatedTime="Last Updated 2 min ago"
                image="https://picsum.photos/id/237/200/300"
              />
            </Collapse>
          </div> 
          <div className="col">
            <Collapse>
              <Card
                cardTitle="Card Title 3"
                cardText="Lorem Ipsum Text 3 "
                updatedTime="Last Updated 3 min ago"
                image="https://picsum.photos/id/237/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

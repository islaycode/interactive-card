import { useState } from "react";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Form from "./components/Form";
const App = () => {
  const [date, setdate] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  return (
    <div className="container">
      <div className="cardSection">
        <CardFront />
        <CardBack/>
      </div>
      <div className="formSection">
        <Form date={date} />
      </div>
    </div>
  );
};

export default App;

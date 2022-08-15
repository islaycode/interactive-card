import { useState } from "react";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import Form from "./components/Form";
const App = () => {
  const [date, setdate] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [state, setState] = useState({
    holderName: "",
    cardNumber: "",
    cvv: "",
    mm: "",
    yy: "",
  });
  return (
    <div className="container">
      <div className="cardSection">
        <CardFront
          holderName={state.holderName}
          cardNumber={state.cardNumber}
          mm={state.mm}
          yy={state.yy}
        />
        <CardBack cvv={state.cvv} />
      </div>
      <div className="formSection">
        <Form
          date={date}
          holderName={state.holderName}
          cardNumber={state.cardNumber}
          cvv={state.cvv}
          mm={state.mm}
          yy={state.yy}
          setState={setState}
        />
      </div>
    </div>
  );
};

export default App;

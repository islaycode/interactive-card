import { useState } from "react";
import Button from "./Button";

const Form = ({ date, holderName, cardNumber, yy, mm, cvv, setState }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [errors, setErrors] = useState({
    name: false,
    number: false,
    cvv: false,
    mm: false,
    yy: false,
  });

  const handleCardDisplay = () => {
    const rawText = [...cardNumber.split(" ").join("")]; // Remove old space
    const creditCard = []; // Create card as array
    rawText.forEach((t, i) => {
      if (i % 4 === 0) creditCard.push(" "); // Add space
      creditCard.push(t);
    });
    return creditCard.join(""); // Transform card array to string
  };
  const handleSubmit = () => {
    console.log(
      "num",
      cardNumber,
      "name",
      holderName,
      "mm",
      mm,
      "yy",
      yy,
      "cvv",
      cvv
    );
    if (holderName === "") setErrors((errors) => ({ ...errors, name: true }));
    if (cardNumber === "") setErrors((errors) => ({ ...errors, number: true }));
    if (mm === "") setErrors((errors) => ({ ...errors, mm: true }));
    if (yy === "") setErrors((errors) => ({ ...errors, yy: true }));
    if (cvv === "") setErrors((errors) => ({ ...errors, cvv: true }));

    console.log("e", errors);
  };
  return (
    <>
      <form>
        <label htmlFor="name">CARD HOLDER NAME</label>
        <input
          value={holderName}
          onChange={handleChange}
          type="text"
          placeholder="e.g. Jane Appleseed"
          name="holderName"
        />
        {errors.name ? <span className="danger">Can't be blank</span> : null}
        <label htmlFor="card-number" className="mt-10">
          CARD NUMBER
        </label>
        <input
          onChange={handleChange}
          value={handleCardDisplay()}
          type="tel"
          pattern="\d*"
          maxLength="19"
          name="cardNumber"
          placeholder="e.g. 1234 1345 5500"
        />
        {errors.number ? <span className="danger">Can't be blank</span> : null}
        <label className="mt-20">EXP. DATE (MM/YY)</label>
        <section className="mt-10 d-flex">
          <div>
            <select
              name="mm"
              placeholder="MM"
              value={mm}
              onChange={handleChange}
            >
              <option className="d-n" selected>
                MM
              </option>
              {date?.map((item, index) => {
                return (
                  <>
                    <option id={item} key={index}>
                      {item}
                    </option>
                  </>
                );
              })}
            </select>
            {errors.mm ? <div className="danger">Can't be blank</div> : null}
          </div>
          <div className="ml-30">
            <select name="yy" value={yy} onChange={handleChange}>
              <option className="d-n" selected>
                YY
              </option>
              <option value={22}>22</option>
              <option value={21}>21</option>
              <option value={20}>20</option>
              <option value={19}>19</option>
              <option value={18}>18</option>
              <option value={17}>17</option>
              <option value={16}>16</option>
              <option value={15}>15</option>
            </select>
            {errors.yy ? <div className="danger">Can't be blank</div> : null}
          </div>
          <div className="ml-20">
            <input
              className="m-0 w-90"
              type="tel"
              name="cvv"
              placeholder="e.g. 123"
              value={cvv}
              maxLength="3"
              pattern="\d*"
              onChange={handleChange}
            />
            {errors.cvv ? <div className="danger">Can't be blank</div> : null}
          </div>
        </section>
      </form>
      <Button onClick={handleSubmit} label={"Confirm"} />
    </>
  );
};

export default Form;

import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import "./App.css";

function App() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("eur");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // Calling the api whenever the user switches the currency
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
    )
      .then((res) => {
        setInfo(res.data[from]);
      })
      .catch((err) => {
        console.log(err);
        console.log("Fetching currency list from fallback URL");

        Axios.get(
          `https://latest.currency-api.pages.dev/v1/currencies/${from}.json`
        ).then((res) => {
          setInfo(res.data[from]);
        });
      });
  }, [from, to]);

  // Calling the convert function when the api is called and when the input amount changes
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info, input]);

  // Function to convert the currency
  const convert = () => {
    let rate = info[to];
    setOutput(input * rate);
  };

  // Function to switch the to and from currencies
  const flip = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Currency Converter</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Amount</h3>
          <input
            type="number"
            placeholder="Enter the amount"
            onChange={(e) => {
              let value = e.target.value;
              if (value === "") {
                value = 0;
              }
              setInput(value);
            }}
          />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setFrom(e.value);
            }}
            value={from}
            placeholder="From"
          />
        </div>
        <div className="switch">
          <HiSwitchHorizontal
            size="30px"
            onClick={() => {
              flip();
            }}
          />
        </div>
        <div className="right">
          <h3>To</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setTo(e.value);
            }}
            value={to}
            placeholder="To"
          />
        </div>
      </div>
      <div className="result">
        {/* <button
          onClick={() => {
            convert();
          }}
        >
          Convert
        </button> */}
        <h2>Converted Amount:</h2>
        <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
      </div>
    </div>
  );
}

export default App;

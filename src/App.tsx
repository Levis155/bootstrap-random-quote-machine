import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import "./App.css"

function App() {
  return (
    <div className="container-fluid bg-primary min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="bg-white w-50 p-5">
        <div>
          <FaQuoteLeft />
          <p className="text-center fs-1 d-flex align-items-center gap-3">
            Either write something worth reading or do something worth writing.
          </p>
        </div>
        <p className="text-end">- Benjamin Franklin</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-1">
            <a className="cta-btn" href="#" target="_blank">
              <FaXTwitter />
            </a>
            <a className="cta-btn" href="#" target="_blank">
              <FaTumblr />
            </a>
          </div>
          <div>
            <button className="cta-btn">New quote</button>
          </div>
        </div>
      </div>

      <span className="mt-4 text-white">by Levis</span>
    </div>
  );
}

export default App;

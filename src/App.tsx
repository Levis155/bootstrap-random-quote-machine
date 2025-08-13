import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";

function App() {
  return (
    <div className="container-fluid bg-primary min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="bg-white w-50">
        <p>Believe you can and you're halfway there.</p>
        <p>- Theodore Roosevelt</p>
        <div>
          <div>
            <button><FaSquareXTwitter /></button>
            <button><FaTumblr /></button>
          </div>
          <div>
            <button>new quote</button>
          </div>
        </div>
      </div>

      <span>by Levis</span>
    </div>
  )
}

export default App

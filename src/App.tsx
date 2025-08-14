import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { BeatLoader } from "react-spinners";
import "./App.css";

function App() {
  const [fetchError, setFetchError] = useState<string | null>(null);

  const { isFetching, isError, error, data, refetch } = useQuery({
    queryKey: ["get-random-quote"],
    queryFn: async () => {
      setFetchError(null);
      const response = await axios.get("https://dummyjson.com/quotes/random");
      console.log(response.data);
      return response.data;
    },
  });

  useEffect(() => {
    if (isError) {
      if (axios.isAxiosError(error)) {
        const serverMessage = error.response?.data.message;
        setFetchError(serverMessage);
      } else {
        setFetchError("Something went wrong.");
      }
    }
  }, [error]);

  return (
    <div className="container-fluid bg-primary min-vh-100 d-flex flex-column justify-content-center align-items-center">
      {isFetching && <BeatLoader size={20} color="#f5c417" />}
      {isError && <h2>{fetchError}</h2>}
      {!isFetching && !isError && data && (
        <>
          <div className="bg-white w-50 p-5">
            <div>
              <FaQuoteLeft />
              <p className="text-center fs-1 d-flex align-items-center gap-3">
                {data.quote}
              </p>
            </div>
            <p className="text-end">- {data.author}</p>
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
                <button
                  className="cta-btn"
                  onClick={() => {
                    refetch();
                  }}
                >
                  New quote
                </button>
              </div>
            </div>
          </div>

          <span className="mt-4 text-white">by Levis</span>
        </>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { BeatLoader } from "react-spinners";
import generateRandomColor from "./utils/generateRandomColor";
import "./App.css";

function App() {
  const [primaryColor, setPrimaryColor] = useState<string>("#000000");

  const { isFetching, isError, error, data, refetch } = useQuery({
    queryKey: ["get-random-quote"],
    queryFn: async () => {
      const response = await axios.get("https://dummyjson.com/quotes/random");
      console.log(response.data);
      return response.data;
    },
  });

  useEffect(() => {
    if (data) {
      setPrimaryColor(generateRandomColor());
    }
  }, [data]);

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: primaryColor }}
    >
      {isFetching && <BeatLoader size={20} color="#ffffff" />}
      {isError && !isFetching && (
        <h2 style={{ color: "#fff" }}>
          {axios.isAxiosError(error)
            ? error.response?.data?.message || error.message
            : "Something went wrong."}
        </h2>
      )}
      {!isFetching && !isError && data && (
        <>
          <div className="bg-white w-50 p-2 p-sm-3">
            <div>
              <p className="text-center fs-3" style={{ color: primaryColor }}>
                <FaQuoteLeft
                  style={{ color: primaryColor, marginRight: "1rem" }}
                />
                {data.quote}
              </p>
            </div>
            <p className="text-end fs-5" style={{ color: primaryColor }}>
              - {data.author}
            </p>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <a
                  className="cta-btn fs-5"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    `"${data.quote}" — ${data.author}`
                  )}`}
                  target="_blank"
                  style={{ backgroundColor: primaryColor }}
                >
                  <FaXTwitter />
                </a>
                <a
                  className="cta-btn fs-5"
                  href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
                    data.author
                  )}&content=${encodeURIComponent(data.quote)}`}
                  target="_blank"
                  style={{ backgroundColor: primaryColor }}
                >
                  <FaTumblr />
                </a>
              </div>
              <div>
                <button
                  className="cta-btn fs-5"
                  style={{ backgroundColor: primaryColor }}
                  onClick={() => {
                    refetch();
                  }}
                >
                  New quote
                </button>
              </div>
            </div>
          </div>

          <span className="mt-4 text-white fs-5">by Levis</span>
        </>
      )}
    </div>
  );
}

export default App;

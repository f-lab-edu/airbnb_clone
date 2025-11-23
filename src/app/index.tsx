import { useEffect } from "react";
import "./style.css";

const API_BASE_URL = process.env.API_BASE_URL;
const ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

export const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${API_BASE_URL}/movie/now_playing?language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      console.log(response);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Emoji of the Day</h1>
    </div>
  );
};

export default App;

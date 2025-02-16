import { useEffect, useState } from "react";
import "./assets/style/basic.css";
import axios from "axios";
import MainHeader from "./components/Header/MainHeader";

function App() {
  // const thxNomad = "인증키도 없이 활용가능하게 해주신 노마드코더 만세!!"
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://nomad-movies.nomadcoders.workers.dev/movies`)
      .then((response) => {
        setData(response.data);
        // console.log("데이터 출력 : ", response.data);
      })
      .catch((error) => {
        console.log("에러 출력 : ", error);
      });
  }, []);

  console.log(data);
  return (
    <>
      <MainHeader />
      <div>
        {data.map((item) => (
          <ul key={item.id}>
            <li>
              <h2>{item.title}</h2>
              <p>{item.overview}</p>
              <p>{item.backdrop_path}</p>
              <img src={item.poster_path} alt="" />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;

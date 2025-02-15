import axios from "axios";
import { useEffect, useState } from "react";

const Testing = () => {
  const serviceKey = "580d4d43-3cf5-45f1-b45a-08c83359380f";
  const numOfRows = "10";
  const pageNo = "1";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://api.kcisa.kr/API_CIA_076/request?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}`
      )
      .then((response) => {
        setData(response.data.response.body.items.item);
        // console.log(response.data.response.body.items);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>API 데이터</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.TITLE}</li>
        ))}
      </ul>
    </div>
  );
};

export default Testing;

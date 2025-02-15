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
          <div key={index}>
            <div>
              <strong>제목:</strong> {item.TITLE}
            </div>
            <div>
              <strong>출연진:</strong>{" "}
              {item.ACTOR[0]
                ? item.ACTOR.split(",").slice(0, 2).join(", ") // 최대 5명까지만 표시
                : "출연진 정보 없음"}
            </div>
            <div>{item.IMAGE_OBJECT}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Testing;

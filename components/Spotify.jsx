import axios from "axios";
import { useEffect } from "react";

const Spotify = () => {
  const serviceKey = "c30b8145bb584c99a3c02d5cfe6cac6a";

  useEffect(() => {
    axios
      .get("https://api.spotify.com.{serviceKey}")
      .then((response) => {
        const data = response.data?.reponse;
        console.log("api 데이터 : ", data);
      })
      .catch((error) => {
        console.log("에러 : ", error);
      });
  }, []);

  return <div></div>;
};

export default Spotify;

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Contents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://nomad-movies.nomadcoders.workers.dev/movies`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("에러 출력 : ", error);
      });
  }, []);

  return (
    <Container>
      <Content>
        {data.map((item) => (
          <MovieCard key={item.id}>
            <img src={item.poster_path} alt={item.title} />
            <MovieInfo>
              <h2>{item.title}</h2>
              <p>{item.overview}</p>
            </MovieInfo>
          </MovieCard>
        ))}
      </Content>
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const MovieCard = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  img {
    height: 400px;
    object-fit: contain;
  }
`;

const MovieInfo = styled.div`
  padding: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

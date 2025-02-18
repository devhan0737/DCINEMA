import { useEffect, useState } from "react";
import styled from "styled-components";
import API from "./../../api/api";

const Contents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getPopularMovies()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("에러 출력 : ", error);
      });
  }, []);

  console.log(data);

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
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  h2 {
    text-align: left;
    font-weight: 900;
  }
  p {
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.6;
    max-height: 4.8em;
    word-wrap: break-word;
    hyphens: auto;
  }
`;

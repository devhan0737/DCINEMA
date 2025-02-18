import { useEffect, useState } from "react";
import styled from "styled-components";
import API from "../../api/api";

const Contents = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // 현재 페이지 수
  const totalPost = 40; // 총 게시물 수
  const pageRange = 5; // 한 페이지에 보여줄 갯수
  const btnRange = 5; // 한 번에 보여줄 버튼 갯수

  const currentSet = Math.ceil(page / btnRange); // 현재 버튼이 몇 번째 세트인지 나타내는 수
  const startPage = (currentSet - 1) * btnRange + 1; // 현재 보여질 버튼의 첫번째 수

  const endPage = startPage + btnRange - 1; // 현재 보여질 끝 버튼의 수
  const totalSet = Math.ceil(Math.ceil(totalPost / pageRange) / btnRange); // 전체 버튼 세트 수

  const startPost = (page - 1) * pageRange + 1; // 시작 게시물 번호
  const endPost = startPost + pageRange - 1; // 끝 게시물 번호

  useEffect(() => {
    API.getPopularMovies()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("에러 출력 : ", error);
      });
  }, []);

  console.log(posts);

  return (
    <Container>
      <MovieCardWrapper>
        {posts.slice(startPost - 1, endPost).map((post) => (
          <MovieCard key={post.id}>
            <img src={post.poster_path} alt={post.title} />
            <MovieInfo>
              <h3>{post.title}</h3>
              <p>{post.overview}</p>
            </MovieInfo>
          </MovieCard>
        ))}
      </MovieCardWrapper>

      <Nav>
        {currentSet > 1 && (
          <Button onClick={() => setPage(startPage - 1)} $active={false}>
            &lt;
          </Button>
        )}
        {Array(btnRange)
          .fill(startPage)
          .map((_, i) => {
            return (
              <Button
                key={i}
                onClick={() => setPage(startPage + i)}
                $active={page === startPage + i}
              >
                {startPage + i}
              </Button>
            );
          })}
        {totalSet > currentSet && (
          <Button onClick={() => setPage(endPage + 1)} $active={false}>
            &gt;
          </Button>
        )}
      </Nav>
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  max-width: 93%;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Button = styled.button`
  border: none;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
`;

const MovieCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 기본적으로 3개의 열로 구성
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); // 화면이 1200px 이하일 때 2개의 열로 변경
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); // 화면이 768px 이하일 때 1개의 열로 변경
  }
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

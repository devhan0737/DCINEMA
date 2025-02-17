import apiClient from "./apiClient";

const API = {
  // 기본 페이지
  getHomePage: () => apiClient.get("/"),

  // 인기 있는 영화 리스트
  getPopularMovies: (params) => apiClient.get("/movies", { params }),

  // 특정 ID의 영화 정보
  getMovieById: (id) => apiClient.get(`/movies/${id}`),

  // 특정 ID의 영화 출연진 정보
  getMovieCredits: (id) => apiClient.get(`/movies/${id}/credits`),

  // 특정 ID의 영화 관련 비디오 정보
  getMovieVideos: (id) => apiClient.get(`/movies/${id}/videos`),

  // 특정 ID의 영화 제공 서비스 정보
  getMovieProviders: (id) => apiClient.get(`/movies/${id}/providers`),

  // 특정 ID의 영화와 유사한 영화 리스트
  getSimilarMovies: (id) => apiClient.get(`/movies/${id}/similar`),
};

export default API;

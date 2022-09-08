const key = "9db476c7ff7210e3afa19a2a536f7af7";

const requests = {
  requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestPopularTvShows: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=2`,
  requestLatestMovies: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
  requestUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestPopularActors: `https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRatedTv: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
  searchApi: 'https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${search}&page=1&include_adult=false',
};

 export function requestPopularMovies(page){
  return `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`
}
export function requestSearch(query,page){
  return `https://api.themoviedb.org/3/search/tv?api_key=9db476c7ff7210e3afa19a2a536f7af7&language=en-US&query=${query}&page=${page}&include_adult=false`;
}

export default requests;
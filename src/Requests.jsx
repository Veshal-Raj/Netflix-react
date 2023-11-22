const key = '4b158dbb480e612db7d470e0d08387c3'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&language=en-US`,
    requestAiring: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}`,
    requestRecommendations: `https://api.themoviedb.org/3/movie/movie_id/recommendations?api_key=${key}&language=en-US&page=1`,



}
console.log(requests)
export default requests;
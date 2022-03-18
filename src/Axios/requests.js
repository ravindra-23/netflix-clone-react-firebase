export const API_KEY = 'a1ece1c64e9a9e900d0e50c3fe6609da';

const requests = {
    // Movies
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

    // Tv shows

    fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginalsTV: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US`,
    fetchAiringTodayTV: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,
    fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
}

export default requests
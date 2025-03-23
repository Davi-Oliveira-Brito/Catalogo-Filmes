const API_KEY = "75a9f0e5fec63fa754c993b6e2919f0c"; // Substitua com sua chave do TMDB
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query, page = 1) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}&page=${page}`);
        const data = await response.json();

        if (data.results.length > 0) {
            return data.results.map(movie => ({
                titulo: movie.title,
                imagem: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/150",
                sinopse: movie.overview,
                ano: movie.release_date ? movie.release_date.split("-")[0] : "Desconhecido",
                classificacao: movie.vote_average
            }));
        } else {
            return [];
        }
    } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        return [];
    }
};

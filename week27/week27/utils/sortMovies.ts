import { type Movie, type SortOption } from '../src/types/movie.types';

export const sortMovies = (movies: Movie[], sortBy: SortOption): Movie[] => {
  const sorted = [...movies];

  switch (sortBy) {
    case 'rating':
      return sorted.sort((a, b) => b.vote_average - a.vote_average);
    
    case 'release_date':
      return sorted.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
    
    default:
      return sorted;
  }
};
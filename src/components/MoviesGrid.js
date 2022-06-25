import movies from '../movies.json';
import { MovieCard } from './MovieCard';
import styles from '../styles/MovieGrid.module.css';

export function MoviesGrid() {
    console.log(movies);
  return (
    <ul className={styles.moviesGrid}>
        {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
        })}
    </ul>
  );
}

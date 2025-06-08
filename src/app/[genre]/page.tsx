import { movies } from "../../../data/dummyData";
import MovieCard from "../components/UI/movie-card";

export interface Movies {
  id: number;
  title: string;
  year: number;
  cast: string[];
  genres: string[];
  href: string;
  extract: string;
  thumbnail: string;
  thumbnail_width: number;
  thumbnail_height: number;
}
export default async function MovieListPage({
  params,
}: {
  params: { genre: string };
}) {
  await params;
  const genreMovies = (movies as Movies[]).filter((movie) =>
    movie.genres.includes(params.genre)
  );

  return (
    <div className="container mx-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {genreMovies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} genre={params.genre} />
      ))}
    </div>
  );
}

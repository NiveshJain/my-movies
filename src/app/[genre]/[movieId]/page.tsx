import { notFound } from "next/navigation";
import { movies } from "../../../../data/dummyData";

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ movieId: string; genre: string }>;
}) {
  const { movieId, genre } = await params;
  const details = movies.filter(
    (movie) => movie.genres.includes(genre) && movie.id === parseInt(movieId)
  )[0];

  if (!details) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center gap-8">
      <img
        src={details.thumbnail}
        alt={details.title}
        className="w-full md:w-1/3 rounded-lg"
      />
      <div className="text-white">
        <h1 className="text-4xl font-bold mb-4">{details.title}</h1>
        <p className="mb-4">{details.extract}</p>
        <h2 className="text-2xl font-bold">Cast</h2>
        <ul>
          {details.cast.map((actor) => (
            <li key={actor}>{actor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

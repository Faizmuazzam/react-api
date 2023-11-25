import { useEffect, useState } from "react";
import { MovieType } from "../utils/Types";
import { Instance } from "../utils/AxiosInstance";
import { Link } from "react-router-dom";

const Loading = () => (
  <span className="loading loading-infinity loading-lg"></span>
);

const Movie = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      // const res = await axios.get(`${baseUrl}movie`);
      const res = await Instance.get(`/movie`);
      // console.log(res.data);
      setIsLoading(false);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: Number) => {
    try {
      await Instance.delete(`/movie/${id}`);
      setIsLoading(false);
      getMovies();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className="max-w-[900px] mx-auto">
      <ul className="list-none p-5">
        {data.map((movie: MovieType) => (
          <li
            className="list-none p-6 rounded-lg shadow-xl mb-5"
            key={movie.id}
          >
            <h3 className="text-2xl font-bold mb-3">{movie.title}</h3>
            <p className="text-base">{movie.desc}</p>
            <span className="text-sm"></span>

            <div className="block mt-5">
              <Link to={`detail/${movie.id}`} className="btn btn-primary mr-2">
                Detail
              </Link>
              <button
                onClick={() => handleDelete(movie.id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;

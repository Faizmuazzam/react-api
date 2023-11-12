import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../api/Api";



type MovieType = {
  id: number;
  title: string;
  desc: string;
  rating: number;
};

const Movie = () => {
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const res = await axios.get(`${baseUrl}movie`);
      // console.log(res.data);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="max-w-[900px] mx-auto">
      <ul className="list-none p-5">
        {data.map((movie: MovieType) => (
          <li className="list-none p-6 rounded-lg shadow-xl mb-5" key={movie.id}>
            <h3 className="text-2xl font-bold mb-3">{movie.title}</h3>
            <p className="text-base">{movie.desc}</p>
            <span className="text-sm"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;

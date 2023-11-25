import { useEffect, useState } from "react";
import { MovieType } from "../utils/Types";
import { useParams } from "react-router-dom";
import { Instance } from "../utils/AxiosInstance";

const Read: React.FC<MovieType> = () => {
  const { id } = useParams();

  const [data, setData] = useState<MovieType[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      // const res = await axios.get(`${baseUrl}movie`);
      const res = await Instance.get(`/movie/${id}`);
      // console.log(res.data);
      setIsLoading(false);
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="max-w-[900px] mx-auto my-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.desc}</p>
          <p>Rating : {data.rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;

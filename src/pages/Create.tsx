import { useEffect, useState } from "react";

import axios from "axios";

import { baseUrl } from "../api/Api";


const Create = () => {
  const [putData, setPutData] = useState({});

  const [data, setData] = useState({});

  const getMovies = async () => {
    try {
      const res = await axios.get(`${baseUrl}movie`);
      // console.log(res.data);
      setData(res.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="max-w-[900px] mx-auto py-10">
      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="title"
          />
        </div>
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="rating"
          />
        </div>
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
            name="desc"
          ></textarea>
        </div>

        <div className="mt-5">
          <button className="btn btn-success">Success</button>
        </div>
      </form>
    </div>
  );
};

export default Create;

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { MovieType } from "../utils/Types";
import { Instance } from "../utils/AxiosInstance";

const Create = () => {
  // const [putData, setPutData] = useState({});

  const [data, setData] = useState({
    title: "",
    rating: "",
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // e.target.name
    // e.target.value
    setData({ ...data, [name]: value });
  };

  const createData = () => {
    ``;
    try {
      // const response = axios.post<MovieType>(`${baseUrl}movie`, data, {
      //   headers: { "Content-Type": "application/json" },
      // });

      const response = Instance.post<MovieType>('/movie', data);

      console.log(`Sukses Create Data : ${response}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto py-10">
      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Jajal Keks"
            className="input input-bordered w-full"
            name="title"
            value={data.title}
            onChange={handleChange}
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
            value={data.rating}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text">Desc</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
            name="desc"
            value={data.desc}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            onClick={createData}
            className="btn btn-success"
          >
            Success
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

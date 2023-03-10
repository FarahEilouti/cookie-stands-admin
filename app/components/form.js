import React from "react";
import { useState } from "react";
import ReportTable from "./reportTable";

export default function Form() {
  const [userInput, setUserInput] = useState({
    location: "",
    max: 0,
    min: 0,
    avg: 0,
  });
  const [fullReplyState, setFullReplyState] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFullReplyState([...fullReplyState, userInput]);
  };

  return (
    <div>
      <section className="py-4 px-4 rounded-md text-center font-bold- text-[#1C82AD] ">
        <form className="m-6" onSubmit={submitHandler}>
          <label className="block font-bold text-2xl mb-2 ">
            {" "}
            Cookies Shop{" "}
          </label>
          <label className="block font-bold text-2xl mb-2">
            {" "}
            Put your order here{" "}
          </label>
          <br></br>
          <label className="block font-bold text-xl mb-2"> Location </label>
          <input
            onChange={handleChange}
            placeholder="Location"
            name="location"
            className="border rounded-md py-3 px-4 text-center "
          />
          <br></br>
          <label className="block font-bold text-xl mb-2">
            {" "}
            Maximum Cookies per hour{" "}
          </label>
          <input
            onChange={handleChange}
            placeholder="maximum"
            name="max"
            className="border rounded-md py-3 px-4 text-center "
          />
          <label className="block font-bold text-xl mb-2">
            {" "}
            Minimum Cookies per hour{" "}
          </label>
          <input
            onChange={handleChange}
            placeholder="minimum"
            name="min"
            className="border rounded-md py-3 px-4 text-center "
          />
          <label className="block font-bold text-xl mb-2">
            {" "}
            Average Cookies per sale{" "}
          </label>
          <input
            onChange={handleChange}
            placeholder="average"
            name="avg"
            className="border rounded-md py-3 px-4 text-center "
          />
          <br></br>
          <button className="bg-green-900 py-2 px-10 rounded-md text-white font-bold hover:bg-green-800 ">
            Create
          </button>
        </form>
      </section>
      <section className="w-full pt-10 text-center "></section>


      <section>
        {fullReplyState.length > 0 && <ReportTable report={fullReplyState} />}
        {fullReplyState.length == 0 && <h2>No Cookie Stands Available</h2>}

      </section>
    </div>
  );
}

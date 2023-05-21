import React, { useEffect } from "react";

const Blogs = () => {
  // dynamic title
  const titles = (title) => {
    useEffect(() => {
      document.title = `${title}-Findus`;
    }, [title]);
  };

  titles("Blogs");
  return (
    <div>
      <div className="my-16 ms-8">
        <h1 className="font-bold text-3xl text-center mb-8 underline">Q&A</h1>
        <div className="text-left ">
          <h3 className="font-bold  bg-black text-yellow-500 py-2 ps-4">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="font-semibold bg-yellow-500 py-4 ps-4">
            <span className="font-bold ">Answer: </span>
            Tokens are pieces of data that carry just enough information to
            facilitate the process of determining a user's identity or
            authorizing a user to perform an action. All in all, tokens are
            artifacts that allow application systems to perform the
            authorization and authentication process.
          </p>
          <hr />
          <h3 className="font-bold mt-4 bg-black text-yellow-500 py-2 ps-4">
            2. Compare SQL and NoSQL databases?
          </h3>
          <div className="font-semibold bg-yellow-500 py-4 ps-4">
            <span className="font-bold">Answer: </span>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables, with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL
          </div>
          <hr />
          <h3 className="font-bold mt-4 bg-black text-yellow-500 py-2 ps-4">
            3.What is express js? What is Nest JS?
          </h3>
          <p className="font-semibold bg-yellow-500 py-4 ps-4">
            <span className="font-bold">Answer: </span>
            Nest offers a ready-to-use application architecture using
            controllers, providers, and modules. This enables developers and
            teams create applications that are simple to test and maintain.
            Express does not require a specific structure, which can provide
            flexibility for small or one-person development teams
          </p>
          <hr />
          <h3 className="font-bold mt-4 bg-black text-yellow-500 py-2 ps-4">
            4. What is MongoDB aggregate and how does it work?
          </h3>
          <p className="font-semibold bg-yellow-500 py-4 ps-4">
            <span className="font-bold">Answer: </span>
            What is Aggregation in MongoDB? Aggregation is a way of processing a
            large number of documents in a collection by means of passing them
            through different stages. The stages make up what is known as a
            pipeline. The stages in a pipeline can filter, sort, group, reshape
            and modify documents that pass through the pipeline
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

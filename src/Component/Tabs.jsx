import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { FaStarHalfAlt } from "react-icons/fa";
const WrapTabs = () => {
  //all toy
  const [alltoys, setAlltoys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toy")
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, []);

  //Science kits
  const [science, setScience] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toy?subcategory=1")
      .then((res) => res.json())
      .then((data) => setScience(data));
  }, []);

  //Math learning
  const [math, setMath] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toy?subcategory=2")
      .then((res) => res.json())
      .then((data) => setMath(data));
  }, []);

  //Engineering kits
  const [engineerin, setEngineerin] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toy?subcategory=3")
      .then((res) => res.json())
      .then((data) => setEngineerin(data));
  }, []);

  //Engineering tools
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toy?subcategory=4")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="mt-16 pt-8">
      <h1 className="font-bold  text-white  bg-black  text-center  text-4xl  py-16">
        Our Popular Toys
      </h1>
      <div>
        <Tabs>
          <TabList className="font-semibold text-center py-4 bg-yellow-500 text-white ">
            <Tab>All Toys</Tab>
            <Tab>Science kits</Tab>
            <Tab>Math learning</Tab>
            <Tab>Engineering kits</Tab>
            <Tab>Engineering tools</Tab>
          </TabList>
          <div className="bg-white my-16">
            <TabPanel>
              <div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                  {alltoys.map((toy) => {
                    return (
                      <div
                        key={toy._id}
                        className="border rounded p-4 shadow-md shadow-yellow-500"
                      >
                        <div className="h-[350px]">
                          <img
                            src={toy.picture}
                            className="w-[100%] h-[100%] rounded"
                            alt=""
                          />
                        </div>
                        <div className="font-semibold text-md">
                          <h3>Name: {toy.name}</h3>
                          <p className="my-1">Price: ${toy.price}</p>
                          <p className="flex items-center">
                            Rating:
                            <span className="ms-2">
                              <FaStarHalfAlt className="text-yellow-500" />
                            </span>
                            <span>{toy.rating}</span>
                          </p>
                        </div>
                        <div className="text-center">
                          <Link to={`/details/${toy._id}`}>
                            <button className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                  {science.map((toy) => {
                    return (
                      <div
                        key={toy._id}
                        className="border rounded p-4 shadow-md shadow-yellow-500"
                      >
                        <div className="h-[350px]">
                          <img
                            src={toy.picture}
                            className="w-[100%] h-[100%] rounded"
                            alt=""
                          />
                        </div>
                        <div className="font-semibold text-md">
                          <h3>Name: {toy.name}</h3>
                          <p className="my-1">Price: ${toy.price}</p>
                          <p className="flex items-center">
                            Rating:
                            <span className="ms-2">
                              <FaStarHalfAlt className="text-yellow-500" />
                            </span>
                            <span>{toy.rating}</span>
                          </p>
                        </div>
                        <div className="text-center">
                          <Link to={`/details/${toy._id}`}>
                            <button className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                  {math.map((toy) => {
                    return (
                      <div
                        key={toy._id}
                        className="border rounded p-4 shadow-md shadow-yellow-500"
                      >
                        <div className="h-[350px]">
                          <img
                            src={toy.picture}
                            className="w-[100%] h-[100%] rounded"
                            alt=""
                          />
                        </div>
                        <div className="font-semibold text-md">
                          <h3>Name: {toy.name}</h3>
                          <p className="my-1">Price: ${toy.price}</p>
                          <p className="flex items-center">
                            Rating:
                            <span className="ms-2">
                              <FaStarHalfAlt className="text-yellow-500" />
                            </span>
                            <span>{toy.rating}</span>
                          </p>
                        </div>
                        <div className="text-center">
                          <Link to={`/details/${toy._id}`}>
                            <button className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                  {engineerin.map((toy) => {
                    return (
                      <div
                        key={toy._id}
                        className="border rounded p-4 shadow-md shadow-yellow-500"
                      >
                        <div className="h-[350px]">
                          <img
                            src={toy.picture}
                            className="w-[100%] h-[100%] rounded"
                            alt=""
                          />
                        </div>
                        <div className="font-semibold text-md">
                          <h3>Name: {toy.name}</h3>
                          <p className="my-1">Price: ${toy.price}</p>
                          <p className="flex items-center">
                            Rating:
                            <span className="ms-2">
                              <FaStarHalfAlt className="text-yellow-500" />
                            </span>
                            <span>{toy.rating}</span>
                          </p>
                        </div>
                        <div className="text-center">
                          <Link to={`/details/${toy._id}`}>
                            <button className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                  {tools.map((toy) => {
                    return (
                      <div
                        key={toy._id}
                        className="border rounded p-4 shadow-md shadow-yellow-500"
                      >
                        <div className="h-[350px]">
                          <img
                            src={toy.picture}
                            className="w-[100%] h-[100%] rounded"
                            alt=""
                          />
                        </div>
                        <div className="font-semibold text-md">
                          <h3>Name: {toy.name}</h3>
                          <p className="my-1">Price: ${toy.price}</p>
                          <p className="flex items-center">
                            Rating:
                            <span className="ms-2">
                              <FaStarHalfAlt className="text-yellow-500" />
                            </span>
                            <span>{toy.rating}</span>
                          </p>
                        </div>
                        <div className="text-center">
                          <Link to={`/details/${toy._id}`}>
                            <button className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};
export default WrapTabs;

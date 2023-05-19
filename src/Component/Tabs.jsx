import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const WrapTabs = () => {
  const [toys, setToys] = useState([]);
  const [toys1, setToys1] = useState([]);
  const [toys2, setToys2] = useState([]);
  const [toys3, setToys3] = useState([]);
  const [toys4, setToys4] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/toy1")
      .then((res) => res.json())
      .then((data) => setToys1(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/toy2")
      .then((res) => res.json())
      .then((data) => setToys2(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/toy3")
      .then((res) => res.json())
      .then((data) => setToys3(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/toy4")
      .then((res) => res.json())
      .then((data) => setToys4(data));
  }, []);

  return (
    <div className="mt-16 text-center bg-black text-white pt-8">
      <h1 className="font-bold text-5xl mb-16">Our Popular Toys</h1>
      <Tabs>
        <TabList className="font-semibold">
          <Tab onClick={() => setToys()}>All Toys</Tab>
          <Tab onClick={() => setToys1()}>Science kits</Tab>
          <Tab onClick={() => setToys2()}>Math learning</Tab>
          <Tab onClick={() => setToys3()}>Engineering kits</Tab>
          <Tab onClick={() => setToys4()}>Engineering tools</Tab>
        </TabList>
        <TabPanel>
          <h2>All Toys</h2>
          <div>
            {toys.map((toy) => (
              <h1>{toy.price}</h1>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {toys1.map((toy) => (
              <h1>{toy.price}</h1>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          <div>
            {toys2.map((toy) => (
              <h1>{toy.price}</h1>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
          <div>
            {toys3.map((toy) => (
              <h1>{toy.price}</h1>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
          <div>
            {toys4.map((toy) => (
              <h1>{toy.price}</h1>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default WrapTabs;

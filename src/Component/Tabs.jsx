import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const WrapTabs = () => {
  const [toys, setToys] = useState([]);
  const [alltoys, setAlltoys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toy")
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, []);

  return (
    <div className="mt-16 text-center bg-black text-white pt-8">
      <h1 className="font-bold text-5xl mb-16">Our Popular Toys</h1>
      <Tabs>
        <TabList className="font-semibold">
          <Tab onClick={() => setToys(0)}>All Toys</Tab>
          <Tab onClick={() => setToys(1)}>Science kits</Tab>
          <Tab onClick={() => setToys(2)}>Math learning</Tab>
          <Tab onClick={() => setToys(3)}>Engineering kits</Tab>
          <Tab onClick={() => setToys(4)}>Engineering tools</Tab>
        </TabList>
        <TabPanel>
          <h2>
            {alltoys.map((tory) => {
              <h1>{tory.length}</h1>;
            })}
          </h2>
          <div></div>
        </TabPanel>
        <TabPanel>
          <div>
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          <div></div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
          <div></div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
          <div></div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default WrapTabs;

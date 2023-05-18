import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const WrapTabs = () => (
  <div className="mt-16 text-center bg-black text-white pt-8">
    <h1 className="font-bold text-5xl mb-16">Our Popular Toys</h1>
    <Tabs>
      <TabList className="font-semibold">
        <Tab>All Toys</Tab>
        <Tab>Science kits</Tab>
        <Tab>Math learning</Tab>
        <Tab>Engineering kits</Tab>
        <Tab>Engineering tools</Tab>
      </TabList>
      <TabPanel>
        <h2>All Toys</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
      </TabPanel>
    </Tabs>
  </div>
);
export default WrapTabs;

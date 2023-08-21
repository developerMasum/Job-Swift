import { RiCloseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import './CustomModal.css'
import { authContext } from "../../../Auth/AuthProvider";
import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CustomModal = ({ data, showPop, setShowPop }) => {
  const { user, logout } = useContext(authContext)
      console.log(data);
  return (
    <div className={`modalBackground ${showPop ? "visible" : "hidden"}`}>
      <div className="modalContainer p-6 rounded-lg shadow-md bg-white">
        <button
          onClick={() => setShowPop(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <RiCloseLine />
        </button>
       <div>
       <div className="border-b-[1px]"> <h1 className="text-2xl font-semibold mb-4">Job Preview : {data?.jobTitle}</h1></div>
       <h1>{user?.displayName}</h1>
       <h1>{data?.jobTitle}</h1>
       <h2>{data?.jobLocation}</h2>
       <div>
       <Tabs>
    <TabList>
      <Tab>OVERVIEW</Tab>
      <Tab>APPLICATION</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
       </div>
       </div>
      </div>
    </div>
  );
};

export default CustomModal;

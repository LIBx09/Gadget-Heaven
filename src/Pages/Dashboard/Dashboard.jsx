import Heading from "../../components/Heading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Dashboard = () => {
  return (
    <>
      <div>
        <Heading
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
        <div className=" text-center">
          <Tabs>
            <div className="bg-[#9538E2] h-16">
              <TabList>
                <Tab>Cart</Tab>
                <Tab>WishList</Tab>
              </TabList>
            </div>

            <TabPanel>
              <div className="flex justify-between items-center w-10/12 mx-auto my-10">
                <h3 className=" border-sky-700 border-x-4 text-2xl font-bold p-2 rounded-lg">
                  Cart
                </h3>
                <div className="flex flex-col md:flex-row items-center">
                  <h4 className="md:w-72 border-sky-700 border-x-4 text-2xl font-bold p-2 rounded-lg my-5 md:my-1">
                    Total Cost:{" "}
                  </h4>
                  <div className="">
                    <button className="btn outline outline-violet-600 mx-4 text-[#9538E2]">
                      Sort by Price
                    </button>
                    <button className="btn  bg-violet-600 text-white">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

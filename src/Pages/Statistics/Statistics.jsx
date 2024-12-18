import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { Helmet } from "react-helmet";

const Statistics = () => {
  // Load data using useLoaderData
  const productData = useLoaderData();

  const [chartData, setChartData] = useState([]);

  // Prepare data for chart once loader data is available
  useEffect(() => {
    if (productData && productData.length > 0) {
      const formattedData = productData.map((product) => ({
        name: product.title, // or 'name', depending on what the product data contains
        price: product.price,
        rating: product.rating,
      }));
      setChartData(formattedData);
    }
  }, [productData]);

  return (
    <div>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <Heading
        title={"Statistics"}
        subtitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      <div>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="price" barSize={20} fill="#82ca9d" />
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available to display</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;

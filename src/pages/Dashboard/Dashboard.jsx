import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Overview from "../../components/Overview/Overview";
import CustomDataTable from "../../components/DataTable/CustomDataTable";

function Dashboard() {
  const [overviews, setOverviews] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [overviewRes, userRes] = await Promise.all([
          fetch("http://localhost:3000/overview"),
          fetch("http://localhost:3000/user"),
        ]);

        if (!overviewRes.ok || !userRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const overviewData = await overviewRes.json();
        const userData = await userRes.json();

        setOverviews(overviewData);
        setData(userData);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-4 p-2 ">
      <div className="col-span-1 ">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <Header />
        <Overview overviews={overviews} />
        <CustomDataTable data={data} />
      </div>
    </div>
  );
}

export default Dashboard;

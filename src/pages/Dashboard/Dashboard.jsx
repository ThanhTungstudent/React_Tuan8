import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Overview from "../../components/Overview/Overview";
import CustomDataTable from "../../components/DataTable/CustomDataTable";
import MainLayout from "../../components/MainLayout/MainLayout";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch("http://localhost:3000/user");

        if (!userRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const userData = await userRes.json();

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

  return <CustomDataTable data={data} />;
}

export default Dashboard;

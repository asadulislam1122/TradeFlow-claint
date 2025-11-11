import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import AllCard from "../AllCard/AllCard";
import { div } from "framer-motion/client";
import Loading from "../../Loading/Loading";
import ExportCard from "../AllCard/ExportCard";

const MyExports = () => {
  const { user } = use(AuthContext);
  // console.log(user.email);
  const [exportData, setExportData] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(exportData);
  useEffect(() => {
    fetch(`http://localhost:3000/my-export?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setExportData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.email]);

  if (loading) {
    <div>
      <Loading></Loading>
    </div>;
  }
  return (
    <div>
      <h2 className="font-bold text-3xl text-blue-600 text-center mt-4 mb-4">
        My Exports <span className="text-green-600">{exportData.length}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto">
        {exportData.map((card) => (
          <ExportCard card={card}></ExportCard>
        ))}
      </div>
    </div>
  );
};

export default MyExports;

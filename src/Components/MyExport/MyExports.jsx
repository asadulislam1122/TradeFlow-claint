import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import Loading from "../../Loading/Loading";
import ExportCard from "../AllCard/ExportCard";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [exportData, setExportData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-export?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setExportData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-3xl text-blue-600 text-center mt-4 mb-4">
        My Exports <span className="text-green-600">{exportData.length}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {exportData.map((card) => (
          <ExportCard
            key={card._id}
            card={card}
            exportData={exportData}
            setExportData={setExportData}
          />
        ))}
      </div>
    </div>
  );
};

export default MyExports;

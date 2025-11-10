import React, { use } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { useLoaderData } from "react-router";
import AllCard from "../AllCard/AllCard";
import ImportCart from "../AllCard/ImportCart";

const MyImports = () => {
  // const { user } = use(AuthContext);
  // console.log(user);
  const importData = useLoaderData();
  // console.log(importData);
  return (
    <div className="bg-gray-100">
      <h2 className="text-blue-600 p-4 text-3xl  mb-4 text-center font-bold">
        My Imports <span className="text-green-600">({importData.length})</span>
      </h2>
      <div className="grid mb-11 mt-4  grid-cols-1 w-11/12 mx-auto md:grid-cols-3 gap-6">
        {importData.map((importcard) => (
          <ImportCart importcard={importcard} key={importcard._id}></ImportCart>
        ))}
      </div>
    </div>
  );
};

export default MyImports;

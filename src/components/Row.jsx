import React, { useEffect } from "react";
import requests from "../configs/requests";
import instance from "../configs/axios";

const Row = ({ title, fetchUrl }) => {
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <>
      <div className="Row__title">{title}</div>
      <div className="row_image"></div>
    </>
  );
};

export default Row;

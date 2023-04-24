import { useState, useEffect } from "react";
import { fakeFetch } from "../fakeFetch";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/menu");
      if (res.status === 200) {
        setData(res.data?.menu);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { data };
};

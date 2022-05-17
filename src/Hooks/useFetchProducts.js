import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
export default function useFetchProducts(col) {
  const [loading, setLoading] = useState(false);
  const [prods, setProds] = useState([]);
  const [error, setError] = useState(false);

  const func = async () => {
    const arr = [];
    try {
      setLoading(true);
      const docs = await getDocs(collection(db, col));

      docs.forEach((doc) => {
        arr.push(doc.data());
      });

      setLoading(false);
      setProds(arr);
    } catch (error) {
      setLoading(false);

      setError(error);
    }
  };

  useEffect(() => {
    func();
  }, []);

  return { loading, prods, error };
}

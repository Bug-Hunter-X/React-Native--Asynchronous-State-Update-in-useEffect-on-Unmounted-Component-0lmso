import React, { useState, useEffect, useRef } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (isMountedRef.current) {
        setData({ message: 'Data fetched successfully!' });
      }
    };

    fetchData();

    return () => {
      isMountedRef.current = false; 
    };
  }, []);

  return data ? <Text>{data.message}</Text> : <Text>Loading...</Text>;
};

export default DataFetcher;
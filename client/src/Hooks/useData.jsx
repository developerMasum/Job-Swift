import React, { useEffect, useState } from 'react';

const useData = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        fetch("/appliedJobs.json")
          .then(res => res.json())
          .then(data => setData(data))
      }, []);
      return [Data];
};

export default useData;
import React, { useEffect, useState } from "react";

// Custom Hook
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${currency}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, [currency]);

  return { data, error };
}

// Component
function CurrencyComponent({ currency }) {
  const { data, error } = useCurrencyInfo(currency);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data.rates) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Currency Info for {currency}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default CurrencyComponent;

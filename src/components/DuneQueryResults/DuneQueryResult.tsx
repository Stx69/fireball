import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface DuneQueryResultProps {
  query: string;
}

const DuneQueryResult: React.FC<DuneQueryResultProps> = ({ query }) => {
  const [result, setResult] = useState<CustomAny>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://dune/api/queries/2627038/4360949/results', {
          sql: query
        });
        setResult(response.data.result); // Extract the result from the response object
      } catch (error: CustomAny) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Return the result data instead of the entire response object
  return (
    <div>
      {/* Display the result */}
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default DuneQueryResult;

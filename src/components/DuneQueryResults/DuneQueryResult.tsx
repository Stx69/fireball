import React, { useEffect, useState } from 'react';

import fetch, { Headers } from 'node-fetch';

const { DUNE_API_KEY } = process.env;
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
        const params = { query_parameters: { interval_day: '2', whitelist: '717' } };

        // Add the API key to a header object

        const body = JSON.stringify(params);
        const meta = {
          'dune-api-key': DUNE_API_KEY
        };
        const header = new Headers(meta);

        const response = await fetch('https://api.dune.com/api/v1/query/2627038/execute', {
          method: 'POST',
          headers: header,
          body: body // This is where we pass the parameters
        });
        if (response.ok) {
          setResult(await response.json()); // Extract the result from the response object
          console.log(response);
        } else {
          console.log('Error:', response.status);
        }
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

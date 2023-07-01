import React, { useEffect, useState } from 'react';

const REFRESH_INTERVAL = 60 * 60 * 1000; // 1 hour in milliseconds
const formatTimestamp = (timestamp) => {
  const date = new Date(Number(timestamp) + REFRESH_INTERVAL);

  return date.toString();
};

const { DUNE_API_KEY } = process.env;
interface Row {
  totalALPHA: string;
  totalFOMO: string;
  totalFUD: string;
  totalKEK: string;
  bwidowALPHA: string;
  bwidowFOMO: string;
  bwidowFUD: string;
  bwidowKEK: string;
  chronosALPHA: string;
  chronosFOMO: string;
  chronosFUD: string;
  chronosKEK: string;
  claims_by_bwidow: string;
  claims_by_chronos: string;
  claims_by_gor: string;
  claims_by_hope: string;
  claims_by_ron: string;
  claims_by_whitelist: string;
  day: string;
  gorALPHA: string;
  gorFOMO: string;
  gorFUD: string;
  gorKEK: string;
  hopeALPHA: string;
  hopeFOMO: string;
  hopeFUD: string;
  hopeKEK: string;
  ronALPHA: string;
  ronFOMO: string;
  ronFUD: string;
  ronKEK: string;
}

interface Metadata {
  column_names: string[];
  result_set_bytes: number;
  total_row_count: number;
  datapoint_count: number;
  pending_time_millis: number;
  execution_time_millis: number;
}

interface Result {
  rows: Row[];
  metadata: Metadata;
}

interface Root {
  execution_id: string;
  query_id: number;
  state: string;
  submitted_at: string;
  expires_at: string;
  execution_started_at: string;
  execution_ended_at: string;
  result: Result;
}

const DuneQueryResult = () => {
  const [dataJson, setDataJson] = useState<Root | null>(null);
  const [dataJsonRows, setDataJsonRows] = useState<Row[] | null>(null);
  const [dataJsoncolumn, setDataJsoncolumn] = useState<Metadata['column_names'] | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedRows, setDisplayedRows] = useState<Row[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem('dataJsonMonthly2');
      const storedTimestamp = localStorage.getItem('dataJsonMonthly2Timestamp');
      const currentTime = Date.now();

      if (storedData && storedTimestamp) {
        //const jsonData = JSON.parse(storedData);
        const lastRefreshTime = parseInt(storedTimestamp);

        if (currentTime - lastRefreshTime < REFRESH_INTERVAL) {
          // Use stored data if the refresh interval has not passed
          setDataFromLocalStorage(storedData);

          return;
        }
      } else {
        try {
          refresh();
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, []);

  const setDataFromAPI = (jsonData) => {
    setDataJson(jsonData.result);
    setDataJsonRows(jsonData.result.rows);
    setDataJsoncolumn(jsonData.result.metadata.column_names);
    localStorage.setItem('dataJsonMonthly2', JSON.stringify(jsonData.result));
    localStorage.setItem('dataJsonMonthly2Timestamp', Date.now().toString());
  };

  const setDataFromLocalStorage = (storedData: string) => {
    const jsonData = JSON.parse(storedData);
    setDataJson(jsonData);
    setDataJsonRows(jsonData.rows);
    setDataJsoncolumn(jsonData.metadata.column_names);
  };

  useEffect(() => {
    if (dataJsonRows) {
      const pageSize = 6;
      const startIndex = currentPage * pageSize;
      const endIndex = startIndex + pageSize;
      const displayed = dataJsonRows.slice(startIndex, endIndex);
      setDisplayedRows(displayed);
    }
  }, [dataJsonRows, currentPage]);

  if (!dataJson) {
    return <div>Loading...</div>;
  }

  const pageCount = dataJsonRows ? Math.ceil(dataJsonRows.length / 6) : 0;

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const refresh = async () => {
    try {
      const storedTimestamp = localStorage.getItem('dataJsonMonthly2Timestamp');
      const currentTime = Date.now();

      if (storedTimestamp && currentTime - parseInt(storedTimestamp) < REFRESH_INTERVAL) {
        // Do not refresh if the refresh interval has not passed
        console.log('Refresh not able try in', formatTimestamp(storedTimestamp));

        return;
      }

      const response = await fetch('https://api.dune.com/api/v1/query/2627233/results?api_key=' + DUNE_API_KEY);
      const jsonData = await response.json();

      setDataFromAPI(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          Previous Page
        </button>
        <button onClick={goToNextPage} disabled={currentPage === pageCount - 1}>
          Next Page
        </button>
        <button onClick={refresh}>Refresh</button>
      </div>
      <pre>
        {dataJson && dataJsoncolumn && displayedRows ? (
          <table>
            <thead>
              <tr style={{ backgroundColor: '#1B1919' }}>
                {dataJsoncolumn.map((columnName) => (
                  <th key={columnName}>{columnName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#1B1919' : '#2B2929' }}>
                  {dataJsoncolumn.map((columnName) => (
                    <td key={columnName}>{row[columnName]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </pre>
    </div>
  );
};

export default DuneQueryResult;

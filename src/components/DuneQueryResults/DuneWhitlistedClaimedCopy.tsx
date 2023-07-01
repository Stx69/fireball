import React, { useEffect, useState } from 'react';

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

interface JsonTableProps {
  jsonData: Root | null;
}

const DuneQueryResult3 = () => {
  const [dataJsonOffline, setDataJsonOffline] = useState<Root | null>(null);
  const [dataJsonRowsOffline, setDataJsonRowsOffline] = useState<Row[] | null>(null);
  const [dataJsoncolumnOffline, setDataJsoncolumnOffline] = useState<Metadata['column_names'] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!dataJsonOffline) {
        try {
          // const response = await fetch('https://api.dune.com/api/v1/query/2627038/results?api_key=' + duneapi);
          // const jsonData = await response.json();

          const jsonData: JsonTableProps = await JSON.parse(`[
            {
              "execution_id": "01H45W4VB7THC4X1K44QSXXXRH",
              "query_id": 2627038,
              "state": "QUERY_STATE_COMPLETED",
              "submitted_at": "2023-06-30T10:03:58.696236Z",
              "expires_at": "2023-09-28T10:04:04.634516Z",
              "execution_started_at": "2023-06-30T10:03:58.711942Z",
              "execution_ended_at": "2023-06-30T10:04:04.634514Z",
              "result": {
                "rows": [
                  {
                    "totalALPHA": "531.265",
                    "totalFOMO": "2381.875",
                    "totalFUD": "106.436",
                    "totalKEK": "44.705",
                    "bwidowALPHA": "0.000",
                    "bwidowFOMO": "426.813",
                    "bwidowFUD": "4.893",
                    "bwidowKEK": "0.000",
                    "chronosALPHA": null,
                    "chronosFOMO": null,
                    "chronosFUD": null,
                    "chronosKEK": null,
                    "claims_by_bwidow": 6,
                    "claims_by_chronos": null,
                    "claims_by_gor": null,
                    "claims_by_hope": 2,
                    "claims_by_ron": 1,
                    "claims_by_whitelist": 26,
                    "day": "2023-06-3000:00:00.000UTC",
                    "gorALPHA": null,
                    "gorFOMO": null,
                    "gorFUD": null,
                    "gorKEK": null,
                    "hopeALPHA": "239.215",
                    "hopeFOMO": "418.631",
                    "hopeFUD": "0.000",
                    "hopeKEK": "35.907",
                    "ronALPHA": "292.050",
                    "ronFOMO": "0.000",
                    "ronFUD": "101.543",
                    "ronKEK": "8.798"
                  },
                  {
                    "totalALPHA": "1386.633",
                    "totalFOMO": "2671.610",
                    "totalFUD": "224.928",
                    "totalKEK": "139.336",
                    "bwidowALPHA": "0.000",
                    "bwidowFOMO": "885.000",
                    "bwidowFUD": "4.169",
                    "bwidowKEK": "0.000",
                    "chronosALPHA": null,
                    "chronosFOMO": null,
                    "chronosFUD": null,
                    "chronosKEK": null,
                    "claims_by_bwidow": 15,
                    "claims_by_chronos": null,
                    "claims_by_gor": null,
                    "claims_by_hope": 2,
                    "claims_by_ron": 4,
                    "claims_by_whitelist": 37,
                    "day": "2023-06-2900:00:00.000UTC",
                    "gorALPHA": null,
                    "gorFOMO": null,
                    "gorFUD": null,
                    "gorKEK": null,
                    "hopeALPHA": "522.321",
                    "hopeFOMO": "0.000",
                    "hopeFUD": "0.000",
                    "hopeKEK": "78.402",
                    "ronALPHA": "864.312",
                    "ronFOMO": "472.000",
                    "ronFUD": "217.824",
                    "ronKEK": "60.934"
                  },
                  {
                    "totalALPHA": "544.352",
                    "totalFOMO": "1357.000",
                    "totalFUD": "89.866",
                    "totalKEK": "67.351",
                    "bwidowALPHA": "261.152",
                    "bwidowFOMO": "0.000",
                    "bwidowFUD": "87.366",
                    "bwidowKEK": "7.570",
                    "chronosALPHA": null,
                    "chronosFOMO": null,
                    "chronosFUD": null,
                    "chronosKEK": null,
                    "claims_by_bwidow": 1,
                    "claims_by_chronos": null,
                    "claims_by_gor": null,
                    "claims_by_hope": 1,
                    "claims_by_ron": 1,
                    "claims_by_whitelist": 18,
                    "day": "2023-06-2800:00:00.000UTC",
                    "gorALPHA": null,
                    "gorFOMO": null,
                    "gorFUD": null,
                    "gorKEK": null,
                    "hopeALPHA": "283.200",
                    "hopeFOMO": "0.000",
                    "hopeFUD": "0.000",
                    "hopeKEK": "59.781",
                    "ronALPHA": "0.000",
                    "ronFOMO": "472.000",
                    "ronFUD": "0.000",
                    "ronKEK": "0.000"
                  }
                ],
                "metadata": {
                  "column_names": [
                    "day",
                    "claims_by_whitelist",
                    "totalFUD",
                    "totalFOMO",
                    "totalALPHA",
                    "totalKEK",
                    "claims_by_bwidow",
                    "bwidowFUD",
                    "bwidowFOMO",
                    "bwidowALPHA",
                    "bwidowKEK",
                    "claims_by_chronos",
                    "chronosFUD",
                    "chronosFOMO",
                    "chronosALPHA",
                    "chronosKEK",
                    "claims_by_hope",
                    "hopeFUD",
                    "hopeFOMO",
                    "hopeALPHA",
                    "hopeKEK",
                    "claims_by_gor",
                    "gorFUD",
                    "gorFOMO",
                    "gorALPHA",
                    "gorKEK",
                    "claims_by_ron",
                    "ronFUD",
                    "ronFOMO",
                    "ronALPHA",
                    "ronKEK"
                  ],
                  "result_set_bytes": 912,
                  "total_row_count": 3,
                  "datapoint_count": 93,
                  "pending_time_millis": 15,
                  "execution_time_millis": 5922
                }
              }
            }
          ]
          `);

          setDataJsonOffline(jsonData[0].result);
          setDataJsonRowsOffline(jsonData[0].result.rows);
          setDataJsoncolumnOffline(jsonData[0].result.metadata.column_names);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, []);

  if (!dataJsonOffline) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display the result */}
      {/* <pre>{JSON.stringify(dataJson, null, 2)}</pre> */}
      <pre>
        {dataJsonOffline && dataJsoncolumnOffline && dataJsonRowsOffline ? (
          <table>
            <thead>
              <tr style={{ backgroundColor: '#1B1919' }}>
                {dataJsoncolumnOffline.map((columnName) => (
                  <th key={columnName}>{columnName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataJsonRowsOffline.map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#1B1919' : '#2B2929' }}>
                  {dataJsoncolumnOffline.map((columnName) => (
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

export default DuneQueryResult3;

import React from 'react';

import { Box, Typography } from '@mui/material';

import { ContentWrapper } from 'components/Content/ContentWrapper';

import DuneWhitlistedClaimed from '/home/stx/dework/fireball/src/components/DuneQueryResults/DuneWhitlistedClaimed';
import DuneWhitlistedClaimedMonths from '/home/stx/dework/fireball/src/components/DuneQueryResults/DuneWhitlistedClaimedMonths';

//https://api.dune.com/api/v1/query/2627038/results?api_key=<api_key>
const Dune: React.FC = () => {
  // const jsonDataStatic = JSON.parse(`[{
  //   "execution_id": "01H45W4VB7THC4X1K44QSXXXRH",
  //   "query_id": 2627038,
  //   "state": "QUERY_STATE_COMPLETED",
  //   "submitted_at": "2023-06-30T10:03:58.696236Z",
  //   "expires_at": "2023-09-28T10:04:04.634516Z",
  //   "execution_started_at": "2023-06-30T10:03:58.711942Z",
  //   "execution_ended_at": "2023-06-30T10:04:04.634514Z",
  //   "result": {
  //     "rows": [
  //       {
  //         "TotalALPHA": "531.265",
  //         "TotalFOMO": "2381.875",
  //         "TotalFUD": "106.436",
  //         "TotalKEK": "44.705",
  //         "bwidowALPHA": "0.000",
  //         "bwidowFOMO": "426.813",
  //         "bwidowFUD": "4.893",
  //         "bwidowKEK": "0.000",
  //         "chronosALPHA": null,
  //         "chronosFOMO": null,
  //         "chronosFUD": null,
  //         "chronosKEK": null,
  //         "claims_by_bwidow": 6,
  //         "claims_by_chronos": null,
  //         "claims_by_gor": null,
  //         "claims_by_hope": 2,
  //         "claims_by_ron": 1,
  //         "claims_by_whitelist": 26,
  //         "day": "2023-06-30 00:00:00.000 UTC",
  //         "gorALPHA": null,
  //         "gorFOMO": null,
  //         "gorFUD": null,
  //         "gorKEK": null,
  //         "hopeALPHA": "239.215",
  //         "hopeFOMO": "418.631",
  //         "hopeFUD": "0.000",
  //         "hopeKEK": "35.907",
  //         "ronALPHA": "292.050",
  //         "ronFOMO": "0.000",
  //         "ronFUD": "101.543",
  //         "ronKEK": "8.798"
  //       },
  //       {
  //         "TotalALPHA": "1386.633",
  //         "TotalFOMO": "2671.610",
  //         "TotalFUD": "224.928",
  //         "TotalKEK": "139.336",
  //         "bwidowALPHA": "0.000",
  //         "bwidowFOMO": "885.000",
  //         "bwidowFUD": "4.169",
  //         "bwidowKEK": "0.000",
  //         "chronosALPHA": null,
  //         "chronosFOMO": null,
  //         "chronosFUD": null,
  //         "chronosKEK": null,
  //         "claims_by_bwidow": 15,
  //         "claims_by_chronos": null,
  //         "claims_by_gor": null,
  //         "claims_by_hope": 2,
  //         "claims_by_ron": 4,
  //         "claims_by_whitelist": 37,
  //         "day": "2023-06-29 00:00:00.000 UTC",
  //         "gorALPHA": null,
  //         "gorFOMO": null,
  //         "gorFUD": null,
  //         "gorKEK": null,
  //         "hopeALPHA": "522.321",
  //         "hopeFOMO": "0.000",
  //         "hopeFUD": "0.000",
  //         "hopeKEK": "78.402",
  //         "ronALPHA": "864.312",
  //         "ronFOMO": "472.000",
  //         "ronFUD": "217.824",
  //         "ronKEK": "60.934"
  //       },
  //       {
  //         "TotalALPHA": "544.352",
  //         "TotalFOMO": "1357.000",
  //         "TotalFUD": "89.866",
  //         "TotalKEK": "67.351",
  //         "bwidowALPHA": "261.152",
  //         "bwidowFOMO": "0.000",
  //         "bwidowFUD": "87.366",
  //         "bwidowKEK": "7.570",
  //         "chronosALPHA": null,
  //         "chronosFOMO": null,
  //         "chronosFUD": null,
  //         "chronosKEK": null,
  //         "claims_by_bwidow": 1,
  //         "claims_by_chronos": null,
  //         "claims_by_gor": null,
  //         "claims_by_hope": 1,
  //         "claims_by_ron": 1,
  //         "claims_by_whitelist": 18,
  //         "day": "2023-06-28 00:00:00.000 UTC",
  //         "gorALPHA": null,
  //         "gorFOMO": null,
  //         "gorFUD": null,
  //         "gorKEK": null,
  //         "hopeALPHA": "283.200",
  //         "hopeFOMO": "0.000",
  //         "hopeFUD": "0.000",
  //         "hopeKEK": "59.781",
  //         "ronALPHA": "0.000",
  //         "ronFOMO": "472.000",
  //         "ronFUD": "0.000",
  //         "ronKEK": "0.000"
  //       }
  //     ],
  //     "metadata": {
  //       "column_names": [
  //         "day",
  //         "claims_by_whitelist",
  //         "TotalFUD",
  //         "TotalFOMO",
  //         "TotalALPHA",
  //         "TotalKEK",
  //         "claims_by_bwidow",
  //         "bwidowFUD",
  //         "bwidowFOMO",
  //         "bwidowALPHA",
  //         "bwidowKEK",
  //         "claims_by_chronos",
  //         "chronosFUD",
  //         "chronosFOMO",
  //         "chronosALPHA",
  //         "chronosKEK",
  //         "claims_by_hope",
  //         "hopeFUD",
  //         "hopeFOMO",
  //         "hopeALPHA",
  //         "hopeKEK",
  //         "claims_by_gor",
  //         "gorFUD",
  //         "gorFOMO",
  //         "gorALPHA",
  //         "gorKEK",
  //         "claims_by_ron",
  //         "ronFUD",
  //         "ronFOMO",
  //         "ronALPHA",
  //         "ronKEK"
  //       ],
  //       "result_set_bytes": 912,
  //       "total_row_count": 3,
  //       "datapoint_count": 93,
  //       "pending_time_millis": 15,
  //       "execution_time_millis": 5922
  //     }
  //   }
  // }]
  // `);

  return (
    <ContentWrapper>
      {/* Content */}
      <Box sx={{ padding: 2 }}>
        <Typography variant='h6' sx={{ mb: 1 }}>
          Dune Graphs Fireball pilots
        </Typography>

        {/* <h1>Whitelisted Claimed offline</h1> */}
        {/* <DuneQueryResult query={query} /> */}
        {/* <DuneWhitlistedClaimedCopy /> */}

        <h1>Whitelisted Claimed Daily online</h1>

        <DuneWhitlistedClaimed />

        <h1>Whitelisted Claimed Monthly Whole dao online</h1>

        <DuneWhitlistedClaimedMonths />
      </Box>
      {/* Sidebar */}
      <Box sx={{ padding: 2 }}>
        <Typography variant='h6' sx={{ mb: 1 }}>
          Sidebar
        </Typography>
        <Typography>Playground for learning and practicing</Typography>
      </Box>
    </ContentWrapper>
  );
};

export default Dune;

import React from 'react';

import { Box, Typography } from '@mui/material';

import { ContentWrapper } from 'components/Content/ContentWrapper';

import DuneQueryResult from '/home/stx/dework/fireball/src/components/DuneQueryResults/DuneQueryResult';

// https://dune.com/queries/2627038/4360949
const Dune: React.FC = () => {
  const query = `
  WITH

  allday AS ( 
  SELECT date_trunc('day', evt_block_time) AS day , count(evt_block_time) /4 as claims_by_whitelist, 
  SUM(CASE WHEN _alchemicaType = cast(0 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS TotalFUD,
  SUM(CASE WHEN _alchemicaType = cast(1 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS TotalFOMO,
  SUM(CASE WHEN _alchemicaType = cast(2 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS TotalALPHA,
  SUM(CASE WHEN _alchemicaType = cast(3 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS TotalKEK
  --,CONCAT ('<a href="https://app.aavegotchi.com/gotchi/',replace(cast("_gotchiId" as varchar), '\', '0'),'" target="_blank" >',replace(cast("_gotchiId" as varchar), '\', '0'),'</a>') as "Gotchi_id" , CONCAT ('<a href="https://gotchiverse.io/auction?tokenId=',replace(cast("_realmId" as varchar), '\', '0'),'" target="_blank" >',replace(cast("_realmId" as varchar), '\', '0'),'</a>') as "Realm_id"
      FROM aavegotchi_polygon.RealmDiamond_evt_AlchemicaClaimed
      WHERE cast("_gotchiId" AS bigint) IN (
              SELECT "tokenId"
              FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingExecuted a
              WHERE whitelistId = {{whitelist}}
                  AND NOT EXISTS (
                      SELECT *
                      FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingEnded b
                      WHERE a.listingId = b.listingId
                  )
          ) 
          AND evt_block_time > now() - interval '{{interval_day}}' day
        
      GROUP BY 1
      order by day desc 
  ) , 
  bwidow as (
  SELECT date_trunc('day',evt_block_time) as day,
  count(evt_block_time) /4 as claims_by_bwidow, 
  SUM(CASE WHEN _alchemicaType = cast(0 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS bwidowFUD,
  SUM(CASE WHEN _alchemicaType = cast(1 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS bwidowFOMO,
  SUM(CASE WHEN _alchemicaType = cast(2 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS bwidowALPHA,
  SUM(CASE WHEN _alchemicaType = cast(3 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS bwidowKEK
  from aavegotchi_polygon.RealmDiamond_evt_AlchemicaClaimed 
  where cast("_gotchiID" as bigint) in (SELECT tokenId FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingExecuted a WHERE whitelistId = {{whitelist}} 
   AND borrower = 0xcf1434054dceda1681bf0806f46d669fd25a347f
    AND not EXISTS ( SELECT * FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingEnded b WHERE a.listingId = b.listingId ))
    AND evt_block_time > now() - interval '{{interval_day}}' day
   -- and  EXISTS (select * from RealmDiamond_evt_ChannelAlchemica m where listid.tokenId = cast(_gotchiID as bigint))
  group by 1 
  order by day desc), 
  chronos as (
  SELECT date_trunc('day',evt_block_time) as day,
  count(evt_block_time) / 4 as claims_by_chronos, 
  SUM(CASE WHEN _alchemicaType = cast(0 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS chronosFUD,
  SUM(CASE WHEN _alchemicaType = cast(1 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS chronosFOMO,
  SUM(CASE WHEN _alchemicaType = cast(2 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS chronosALPHA,
  SUM(CASE WHEN _alchemicaType = cast(3 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS chronosKEK
  from aavegotchi_polygon.RealmDiamond_evt_AlchemicaClaimed  
  where cast("_gotchiID" as bigint) in (SELECT tokenId FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingExecuted a WHERE whitelistId = {{whitelist}} 
   AND borrower = 0xa8fee56c46906fc783fc64cd97867da58800ef22
    AND not EXISTS ( SELECT * FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingEnded b WHERE a.listingId = b.listingId ))
    AND evt_block_time > now() - interval '{{interval_day}}' day
   -- and  EXISTS (select * from RealmDiamond_evt_ChannelAlchemica m where listid.tokenId = cast(_gotchiID as bigint))
  group by 1 
  order by  day desc), 
  
  hope as (
  SELECT date_trunc('day',evt_block_time) as day,
  count(evt_block_time) / 4 as claims_by_hope, 
  SUM(CASE WHEN _alchemicaType = cast(0 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS hopeFUD,
  SUM(CASE WHEN _alchemicaType = cast(1 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS hopeFOMO,
  SUM(CASE WHEN _alchemicaType = cast(2 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS hopeALPHA,
  SUM(CASE WHEN _alchemicaType = cast(3 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS hopeKEK
  from aavegotchi_polygon.RealmDiamond_evt_AlchemicaClaimed  
  where cast("_gotchiID" as bigint) in (SELECT tokenId FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingExecuted a WHERE whitelistId = {{whitelist}} 
   AND borrower = 0xa39a8e55a93c7a27ecb48eac86844bb1173e30da
    AND not EXISTS ( SELECT * FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingEnded b WHERE a.listingId = b.listingId ))
    AND evt_block_time > now() - interval '{{interval_day}}' day
   -- and  EXISTS (select * from RealmDiamond_evt_ChannelAlchemica m where listid.tokenId = cast(_gotchiID as bigint))
  group by 1 
  order by day desc ),
  
  gor as (
  SELECT date_trunc('day',evt_block_time) as day,
  count(evt_block_time) / 4 as claims_by_gor, 
  SUM(CASE WHEN _alchemicaType = cast(0 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS gorFUD,
  SUM(CASE WHEN _alchemicaType = cast(1 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS gorFOMO,
  SUM(CASE WHEN _alchemicaType = cast(2 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS gorALPHA,
  SUM(CASE WHEN _alchemicaType = cast(3 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS gorKEK
  from aavegotchi_polygon.RealmDiamond_evt_AlchemicaClaimed  
  where cast("_gotchiID" as bigint) in (SELECT tokenId FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingExecuted a WHERE whitelistId = {{whitelist}} 
   AND borrower = 0x3c1a885bd95f2fb025d36246f242b2bf1525e011
    AND not EXISTS ( SELECT * FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingEnded b WHERE a.listingId = b.listingId ))
    AND evt_block_time > now() - interval '{{interval_day}}' day
   -- and  EXISTS (select * from RealmDiamond_evt_ChannelAlchemica m where listid.tokenId = cast(_gotchiID as bigint))
  group by 1 
  order by  day desc),
  ron as (
  SELECT date_trunc('day',evt_block_time) as day,
  count(evt_block_time) / 4 as claims_by_ron, 
  SUM(CASE WHEN _alchemicaType = cast(0 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS ronFUD,
  SUM(CASE WHEN _alchemicaType = cast(1 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS ronFOMO,
  SUM(CASE WHEN _alchemicaType = cast(2 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS ronALPHA,
  SUM(CASE WHEN _alchemicaType = cast(3 as uint256) THEN CAST(CAST("_amount" as DECIMAL )/ 1e18 / 1.355932203389831 as Decimal (10,3)) END) AS ronKEK
  from aavegotchi_polygon.RealmDiamond_evt_AlchemicaClaimed 
  where cast("_gotchiID" as bigint) in (SELECT tokenId FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingExecuted a WHERE whitelistId = {{whitelist}} 
   AND borrower = 0x1787de36fd5759fb003066b4fab1af2951421bc8
    AND not EXISTS ( SELECT * FROM aavegotchi_polygon.aavegotchi_diamond_evt_GotchiLendingEnded b WHERE a.listingId = b.listingId ))
    AND evt_block_time > now() - interval '{{interval_day}}' day
  group by  1   
  order by day desc)
  
  
  SELECT allday.day,
         allday.claims_by_whitelist,
         allday.TotalFUD,
         allday.TotalFOMO,
         allday.TotalALPHA,
         allday.TotalKEK,
         bwidow.claims_by_bwidow,
         bwidow.bwidowFUD,
         bwidow.bwidowFOMO,
         bwidow.bwidowALPHA,
         bwidow.bwidowKEK,
         chronos.claims_by_chronos,
         chronos.chronosFUD,
         chronos.chronosFOMO,
         chronos.chronosALPHA,
         chronos.chronosKEK,
         hope.claims_by_hope,
         hope.hopeFUD,
         hope.hopeFOMO,
         hope.hopeALPHA,
         hope.hopeKEK,
         gor.claims_by_gor,
         gor.gorFUD,
         gor.gorFOMO,
         gor.gorALPHA,
         gor.gorKEK,
         ron.claims_by_ron,
         ron.ronFUD,
         ron.ronFOMO,
         ron.ronALPHA,
         ron.ronKEK
  FROM allday
  LEFT JOIN bwidow ON allday.day = bwidow.day   
  LEFT JOIN chronos ON allday.day = chronos.day 
  LEFT JOIN hope ON  allday.day = hope.day 
  LEFT JOIN gor ON allday.day = gor.day
  LEFT JOIN ron ON allday.day = ron.day
  ORDER BY allday.day DESC;
  
  `;

  return (
    <ContentWrapper>
      {/* Content */}
      <Box sx={{ padding: 2 }}>
        <Typography variant='h6' sx={{ mb: 1 }}>
          Dune Graphs
        </Typography>

        <h1>Dune Query Result</h1>
        <DuneQueryResult query={query} />
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

import { TheGraphApi } from 'api';

import { AppThunk } from 'core/store/store';

import { GotchiLastChanneled, GotchiLending, SortingItem } from 'shared/models';

import { CommonUtils } from 'utils';

// slices
import * as lentGotchisSlices from '../slices/lent-gotchis.slice';

export const onLoadLentGotchis =
  (address: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(lentGotchisSlices.loadLentGotchis());

    const { type, dir }: SortingItem = getState().client.lentGotchis.lentGotchisSorting;

    TheGraphApi.getLendingsByAddress(address).then((lentGotchis: GotchiLending[]) => {
      lentGotchis.forEach((lending: GotchiLending) => {
        lending.endTime = Number(lending.timeAgreed) + Number(lending.period);
      });
      const gotchiIds: string[] = lentGotchis.map((gotchi) => gotchi.id);
      TheGraphApi.getGotchisGotchiverseInfoByIds(gotchiIds)
        .then((gotchiIdsChanneled: GotchiLastChanneled[]) => {
          const modifiedLent: GotchiLending[] = lentGotchis.map((item: GotchiLending) => {
            const lastChanneled = gotchiIdsChanneled.find((o: GotchiLastChanneled) => o.id === item.id);

            return { ...item, lastChanneled: lastChanneled?.lastChanneled ? lastChanneled?.lastChanneled : '0' };
          });

          // const promises: Promise<CustomAny>[] = lentGotchis.map((gotchi) => RealmApi.getGotchiLastChanneled(gotchi.id));
          // Promise.all(promises)
          //   .then((response: GotchiLastChanneled[]) => {
          //     const modifiedLent: GotchiLending[] = [];
          //     let i = 0;
          //     for (const gotchi of lentGotchis) {
          //       const modifiedGotchi = { ...gotchi, lastChanneled: response[i].toString() ? response[i].toString() : '0' };
          //       modifiedLent.push(modifiedGotchi);
          //       i += 1;
          //     }
          const sortedLentGotchis: GotchiLending[] = CommonUtils.basicSort(modifiedLent, type, dir);
          dispatch(lentGotchisSlices.loadLentGotchisSucceded(sortedLentGotchis));
        })
        .catch(() => dispatch(lentGotchisSlices.loadLentGotchisFailed()))
        .finally(() => dispatch(lentGotchisSlices.setIsInitialLentGotchisLoading(false)));
    });
  };

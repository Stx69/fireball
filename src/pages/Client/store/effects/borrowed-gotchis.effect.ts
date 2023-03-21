import { TheGraphApi } from 'api';

import { AppThunk } from 'core/store/store';

import { GotchiLending, SortingItem } from 'shared/models';

import { CommonUtils } from 'utils';

import {
  loadBorrowedGotchis,
  loadBorrowedGotchisFailed,
  loadBorrowedGotchisSucceded,
  setIsInitialBorrowedGotchisLoading
} from '../slices';

export const onLoadBorrowedGotchis =
  (address: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(loadBorrowedGotchis());

    const { type, dir }: SortingItem = getState().client.borrowedGotchis.borrowedGotchisSorting;

    TheGraphApi.getBorrowedByAddress(address)
      .then((borrowedGotchis: GotchiLending[]) => {
        const promises: Promise<CustomAny>[] = borrowedGotchis.map((gotchi) => TheGraphApi.getGotchisGotchiverseInfoByIds([gotchi.id]));
        Promise.all(promises).then((response) => {      
          const modifiedBorrowed = borrowedGotchis.map(item => {
          
            const obj = response.find(o => o[0].id === item.id);
          
            return { ...item, ...obj[0] };
          });
          
          const sortedBorrowedGotchis: GotchiLending[] = CommonUtils.basicSort(modifiedBorrowed, type, dir);

          dispatch(loadBorrowedGotchisSucceded(sortedBorrowedGotchis));
        });
      })
      .catch(() => dispatch(loadBorrowedGotchisFailed()))
      .finally(() => dispatch(setIsInitialBorrowedGotchisLoading(false)));
  };

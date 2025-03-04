import { BaazaarGraphApi } from '../../api/baazaar-graph.api';
import { EthersApi } from 'api';

import { AppThunk } from 'core/store/store';

import { RarityTypes } from 'shared/constants';
import { GraphFiltersTypes, GraphFiltersValueTypes, GraphQueryParams } from 'shared/models';

import { GraphFiltersUtils, TilesUtils } from 'utils';

import { ActivityTileListingFilterTypes } from '../../constants';
import {
  ActivityTileListingDTO,
  ActivityTileListingFilters,
  ActivityTileListingFiltersType,
  ActivityTileListingVM
} from '../../models';
import { getBaazaarErc1155PurchasesQuery } from '../../queries';
// slices
import * as activityTilesListingsSlices from '../slices/activity-tiles-listings.slice';

export const loadBaazaarActivityTilesListings = (): AppThunk => (dispatch, getState) => {
  dispatch(activityTilesListingsSlices.loadActivityTilesListings());

  const activityTilesListingsGraphQueryParams: GraphQueryParams =
    getState().baazaar.activity.tiles.activityTilesListingsGraphQueryParams;
  const filters: ActivityTileListingFilters = getState().baazaar.activity.tiles.activityTilesListingsFilters;

  let whereParams: string = '';
  Object.entries(filters).forEach(([_, filter]: [_: string, filter: ActivityTileListingFiltersType]) => {
    if (filter.isFilterActive) {
      whereParams += GraphFiltersUtils.getGraphWhereParam(filter);
    }
  });

  const query = getBaazaarErc1155PurchasesQuery(activityTilesListingsGraphQueryParams, whereParams);

  BaazaarGraphApi.getErc1155Purchases<ActivityTileListingDTO>(query)
    .then((tilesListings: ActivityTileListingDTO[]) => {
      const modifiedListings: ActivityTileListingVM[] = mapActivityTilesDTOToVM(tilesListings);

      dispatch(activityTilesListingsSlices.loadActivityTilesListingsSucceded(modifiedListings));
    })
    .catch(() => {
      dispatch(activityTilesListingsSlices.loadActivityTilesListingsFailed());
    })
    .finally(() => {
      dispatch(activityTilesListingsSlices.setIsActivityTilesListingsInitialDataLoading(false));
    });
};

export const onLoadBaazaarActivityTilesListings = (): AppThunk => (dispatch, getState) => {
  const isFiltersUpdated: boolean = getState().baazaar.activity.tiles.activityTilesListingsIsFiltersUpdated;

  if (isFiltersUpdated) {
    dispatch(loadBaazaarActivityTilesListings());
  }
};

export const updateActivityTilesListingsFilterByKey =
  ({ key, value }: { key: ActivityTileListingFilterTypes; value: GraphFiltersValueTypes }): AppThunk =>
  (dispatch, getState) => {
    const filters: ActivityTileListingFilters = getState().baazaar.activity.tiles.activityTilesListingsFilters;

    const updatedFilter: GraphFiltersTypes = GraphFiltersUtils.onGetUpdatedSelectedGraphFilter(filters[key], value);

    dispatch(
      activityTilesListingsSlices.setActivityTilesListingsFilters({
        ...filters,
        [key]: updatedFilter as ActivityTileListingFiltersType
      })
    );
  };

export const resetActivityTilesListingsFilters = (): AppThunk => (dispatch, getState) => {
  const filters: ActivityTileListingFilters = getState().baazaar.activity.tiles.activityTilesListingsFilters;

  const updatedFilters: ActivityTileListingFilters = Object.fromEntries(
    Object.entries(filters).map(([_, filter]: [_: string, filter: ActivityTileListingFiltersType]) => [
      [filter.key],
      GraphFiltersUtils.getResetedFilterByType(filter)
    ])
  );

  dispatch(activityTilesListingsSlices.setActivityTilesListingsFilters(updatedFilters));
};

export const resetActivityTilesData = (): AppThunk => (dispatch, getState) => {
  const filters: ActivityTileListingFilters = getState().baazaar.activity.tiles.activityTilesListingsFilters;

  const updatedFilters: ActivityTileListingFilters = Object.fromEntries(
    Object.entries(filters).map(([_, filter]: [_: string, filter: ActivityTileListingFiltersType]) => [
      [filter.key],
      GraphFiltersUtils.getResetedFilterByType(filter)
    ])
  );

  dispatch(activityTilesListingsSlices.setActivityTilesListingsFilters(updatedFilters));
  dispatch(activityTilesListingsSlices.resetActivityTilesListings());
  dispatch(activityTilesListingsSlices.setActivityTilesListingsIsFiltersUpdated(false));
  dispatch(activityTilesListingsSlices.setIsActivityTilesListingsInitialDataLoading(true));
};

const mapActivityTilesDTOToVM = (listings: ActivityTileListingDTO[]): ActivityTileListingVM[] => {
  return listings.map((listing: ActivityTileListingDTO) => {
    return {
      ...listing,
      id: Number(listing.listingID),
      erc1155TypeId: Number(listing.erc1155TypeId),
      quantity: Number(listing.quantity),
      timeLastPurchased: Number(listing.timeLastPurchased),
      name: TilesUtils.getNameById(listing.erc1155TypeId),
      imageSrcUrl: TilesUtils.getImageById(listing.erc1155TypeId),
      rarity: RarityTypes.Golden,
      isDeprecated: TilesUtils.getDeprecatedById(listing.erc1155TypeId),
      currentListing: {
        id: Number(listing.listingID),
        price: EthersApi.fromWei(listing.priceInWei)
      },
      lastSoldListing: {
        id: Number(listing.listingID),
        price: EthersApi.fromWei(listing.priceInWei),
        soldDate: new Date(Number(listing.timeLastPurchased) * 1000).toJSON()
      }
    };
  });
};

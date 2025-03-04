import { useCallback, useState } from 'react';

import { Backdrop, Button, Divider } from '@mui/material';

import classNames from 'classnames';

import { Sorting } from 'shared/models';

import { LazySorting } from 'components/Filters/LazySorting';
import { Filters } from 'components/Filters/components/Filters/Filters';

import { styles } from './styles';

interface SortFilterPanelProps {
  sorting: Sorting;
  itemsLength: number;
  placeholder: JSX.Element;
  filters?: CustomAny;
  setSelectedFilters?: (key: string, values: CustomAny) => void;
  resetFilters?: () => void;
  exportData?: () => void;
  isShowFilters?: boolean;
  filtersCount?: number;
  isPanelDisabled?: boolean;
}

export function SortFilterPanel({
  sorting,
  itemsLength,
  placeholder,
  isShowFilters = false,
  filters,
  setSelectedFilters,
  resetFilters,
  filtersCount,
  exportData,
  isPanelDisabled = false
}: SortFilterPanelProps) {
  const classes = styles();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const onToglleFilterDropdown = (isOpen: boolean): void => {
    setIsDropdownOpen(!isOpen);
  };

  const onCloseDropdown = (): void => {
    setIsDropdownOpen(false);
  };

  const onSetSelectedFilters = (key: string, filtersObj: CustomAny): void => {
    if (setSelectedFilters) {
      setSelectedFilters(key, filtersObj);
    }
  };

  const onResetFilters = useCallback((): void => {
    setIsDropdownOpen(false);

    if (resetFilters) {
      resetFilters();
    }
  }, [setIsDropdownOpen, resetFilters]);

  const onExportData = useCallback((): void => {
    if (exportData) {
      exportData();
    }
  }, [exportData]);

  return (
    <div className={classNames(classes.container, isDropdownOpen ? 'opened' : 'closed')}>
      <LazySorting {...sorting} isSortingDisabled={isPanelDisabled} />

      {isShowFilters && (
        <div className={classes.dropdownContainer}>
          <Divider flexItem orientation='vertical' sx={{ mx: 0.5, my: 1 }} />

          <Button
            className={classNames(classes.filterButton, isDropdownOpen && 'active')}
            color='primary'
            onClick={() => onToglleFilterDropdown(isDropdownOpen)}
          >
            Filters
          </Button>
          {Boolean(filtersCount) && <span className={classes.filtersCount}>{filtersCount}</span>}

          {isDropdownOpen && (
            <div className={classes.filtersDropdown}>
              <Filters filters={filters} onSetSelectedFilters={onSetSelectedFilters} />

              <div className={classes.buttonsWrapper}>
                <Button variant='contained' color='warning' size='small' onClick={onResetFilters}>
                  Reset
                </Button>
                <Button variant='contained' color='secondary' size='small' onClick={onExportData}>
                  Export data (.json)
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {
        <div className={classNames(classes.inner, classes.results)}>
          <span>{itemsLength}</span>
          <span className={classes.placeholder}>{placeholder}</span>
        </div>
      }

      <Backdrop className={classes.filterBackdrop} open={isDropdownOpen} onClick={onCloseDropdown} />
    </div>
  );
}

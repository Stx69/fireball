import { useCallback, useEffect, useState } from 'react';

import { Button } from '@mui/material';

import classNames from 'classnames';
import _ from 'lodash';

import { styles } from './styles';

interface MultiButtonSelectionFilterProps {
  filter: CustomAny;
  onSetSelectedFilters: (key: string, value: CustomAny[]) => void;
  isDisabled: boolean;
}

export function MultiButtonSelectionFilter({
  filter,
  onSetSelectedFilters,
  isDisabled
}: MultiButtonSelectionFilterProps) {
  const classes = styles();

  const [items, setItems] = useState<CustomAny[]>([]);

  useEffect(() => {
    setItems(filter.items);
  }, [filter.items]);

  const onHandleSelectionChange = useCallback(
    (index: number) => {
      const itemsCopy = _.cloneDeep(items);
      itemsCopy[index].isSelected = !itemsCopy[index].isSelected;

      setItems(itemsCopy);

      const selectedItems: CustomAny[] = itemsCopy.filter((item) => item.isSelected);

      onSetSelectedFilters(filter.key, selectedItems);
    },
    [filter, onSetSelectedFilters, items]
  );

  return (
    <div className={classes.wrapper}>
      {filter.title && <span className={classes.title}>{filter.title}</span>}
      <div className={classes.items}>
        {items.map((item: CustomAny, index: number) => (
          <Button
            className={classNames(classes.item, item.isSelected && 'selected')}
            key={item.value}
            size='small'
            onClick={() => onHandleSelectionChange(index)}
            disabled={isDisabled}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
}

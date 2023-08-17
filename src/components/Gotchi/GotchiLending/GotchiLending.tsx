import { useState } from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from '@mui/material';

import classNames from 'classnames';
import { Duration } from 'luxon';

import { EthersApi } from 'api';

import { GhstTokenIcon } from 'components/Icons/Icons';
import { ViewInAppButton } from 'components/ViewInAppButton/ViewInAppButton';

import { CommonUtils, GraphUtils } from 'utils';

import { styles } from './styles';

export function GotchiLending({ gotchi }: { gotchi: CustomAny }) {
  const classes = styles();

  const periodToMillis: number = gotchi.period * 1000;
  const periodObject = Duration.fromMillis(periodToMillis)
    .shiftTo('years', 'months', 'days', 'hours')
    .normalize()
    .toObject();

  const renderPeriod = () => {
    return (
      <>
        {Object.entries(periodObject).map((period, index) => {
          const value: CustomAny = period[1];
          const key: string = value > 1 ? period[0] : period[0].slice(0, -1);

          if (value === 0) {
            return null;
          }

          return (
            <span style={{ margin: '2px 2px 0' }} key={index}>
              {value} {key}
            </span>
          );
        })}
      </>
    );
  };

  const [selectedGotchiIds, setSelectedGotchiIds] = useState<string[]>([]);

  const handleSelectButtonClick = () => {
    const gotchiId = gotchi;

    const selectedGotchiIdsJSON = localStorage.getItem('selectedGotchiIds');
    const selectedGotchiIds = selectedGotchiIdsJSON ? JSON.parse(selectedGotchiIdsJSON) : [];

    const updatedSelectedGotchiIds = selectedGotchiIds.includes(gotchiId.id)
      ? selectedGotchiIds.filter((id) => id !== gotchiId.id)
      : [...selectedGotchiIds, gotchiId.id];

    setSelectedGotchiIds(updatedSelectedGotchiIds);
    localStorage.setItem('selectedGotchiIds', JSON.stringify(updatedSelectedGotchiIds));
  };

  return (
    <div>
      <div className={classNames(classes.section, classes.head)}>
        <div className={classes.inner}>
          <AccessTimeIcon className={classes.innerIcon} fontSize='small' />
          {renderPeriod()}
        </div>
        <div className={classes.inner}>
          <GhstTokenIcon className={classes.innerIcon} width={18} height={18} />
          {CommonUtils.formatPrice(EthersApi.fromWei(gotchi.upfrontCost))}
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.splits}>
          <div>owner</div>
          <div>
            <span className={gotchi.splitOwner > 0 ? 'highlight' : ''}>{gotchi.splitOwner}</span>%
          </div>
        </div>
        <div className={classes.splits}>
          <div>borrower</div>
          <div>
            <span className={gotchi.splitBorrower > 0 ? 'highlight' : ''}>{gotchi.splitBorrower}</span>%
          </div>
        </div>
        <div className={classes.splits}>
          <div>other</div>
          <div>
            <span className={gotchi.splitOther > 0 ? 'highlight' : ''}>{gotchi.splitOther}</span>%
          </div>
        </div>
      </div>

      <div className={classNames(classes.section, classes.tokens)}>
        {gotchi.tokensToShare.map((token: CustomAny, index: number) => {
          const tokenName = GraphUtils.getTokenName(token);

          return (
            <img
              className={classes.token}
              src={GraphUtils.getTokenImg(tokenName)}
              width={32}
              alt={tokenName}
              key={index}
            />
          );
        })}
      </div>

      <ViewInAppButton link={`https://app.aavegotchi.com/lending/${gotchi.lendingId}`}>Aavegotchi.com</ViewInAppButton>

      <Button
        fullWidth
        size='small'
        onClick={handleSelectButtonClick}
        style={{
          backgroundColor: selectedGotchiIds.includes(gotchi.id) ? 'darkviolet' : 'inherit',
          color: selectedGotchiIds.includes(gotchi.id) ? 'white' : 'black'
        }}
      >
        {selectedGotchiIds.includes(gotchi.id) ? 'Deselect' : 'Select'}
      </Button>
    </div>
  );
}

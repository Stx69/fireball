import { alpha } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const gotchiFitSetsStyles = makeStyles((theme) =>
  createStyles({
    setsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(130px,1fr))',
      gridGap: theme.spacing(1)
    },
    set: {
      position: 'relative',
      transition: '.2s linear',
      padding: theme.spacing(1, 0.5),
      textAlign: 'center',
      '&:hover': {
        background: theme.palette.background.default,
        zIndex: 2
      }
    },
    setImage: {
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      },
      '& span': {
        display: 'none'
      }
    },
    setName: {
      margin: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    setBonus: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      opacity: 0,
      '$set:hover &': {
        opacity: 1
      }
    },
    setBonusRS: {
      marginRight: theme.spacing(0.5),
      '& span': {
        color: theme.palette.primary.main,
        marginRight: 2
      }
    },
    setTraits: {
      fontSize: 12,
      '& img': {
        width: 15,
        height: 'auto'
      }
    },
    setRS: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: 0,
      zIndex: 1,
      padding: theme.spacing(0.25, 0.5),
      lineHeight: 1,
      fontSize: 12,
      backgroundColor: alpha(theme.palette.common.black, 0.8),
      fontWeight: 600,
      '& span': {
        color: theme.palette.primary.main
      }
    },
    setWearables: {
      width: 50,
      position: 'absolute',
      bottom: theme.spacing(-1),
      opacity: 0,
      visibility: 'hidden',
      borderRadius: 5,
      transition: '.3s',
      background: theme.palette.background.default,
      '$set:hover &': {
        opacity: 1,
        visibility: 'visible',
        transform: 'none'
      }
    },
    setWearablesLeft: {
      right: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      transform: 'translate(100%)'
    },
    setWearablesRight: {
      left: '100%',
      transform: 'translate(-100%)'
    },
    setWearable: {
      width: '100%',
      '& + &': {
        paddingTop: theme.spacing(0.5)
      }
    }
  })
);

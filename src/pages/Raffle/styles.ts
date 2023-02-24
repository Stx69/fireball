import { alpha } from '@mui/system';
import { createStyles, makeStyles } from '@mui/styles';

export const styles = makeStyles((theme) =>
  createStyles({
    container: {
      maxWidth: 1280,
      padding: theme.spacing(8, 3, 3),
      margin: '0 auto'
    }
  })
);

export const titleStyles = makeStyles((theme) =>
  createStyles({
    titleWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: 20,
      backgroundColor: alpha(theme.palette.secondary.dark, 0.5),
      borderRadius: 4,
      padding: 12,
      [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between'
      }
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      margin: '0 0 20px',
      color: theme.palette.warning.main,
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        margin: 0,
        textAlign: 'left'
      }
    }
  })
);

export const tableStyles = makeStyles((theme) =>
  createStyles({
    row: {
      marginBottom: 32,
      minHeight: 55,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    subtitle: {
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 400,
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start'
      }
    },
    subtitleIcon: {
      marginLeft: 8
    },
    toggleWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-start'
      },
      [theme.breakpoints.up('lg')]: {
        justifyContent: 'space-between'
      }
    },
    toggleButtonWrapper: {
      marginLeft: 20,
      '& .MuiToggleButton-sizeSmall': {
        padding: '4px 6px'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: 5
      }
    },
    toggleButton: {
      textTransform: 'none'
    },
    input: {
      '& label:first-letter': {
        textTransform: 'uppercase'
      },
      '& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
      },
      '& input[type=number]': {
        MozAppearance: 'textfield'
      },
      '& .MuiOutlinedInput-root.Mui-disabled': {
        '& fieldset': {
          borderColor: 'transparent',
          backgroundColor: alpha(theme.palette.secondary.dark, 0.5)
        }
      },
      '& .MuiInputLabel-root.Mui-disabled': {
        color: alpha('#fff', 0.5)
      },
      '&.common': {
        '& input ': {
          color: theme.palette.rarity.common
        },
        '& label ': {
          color: theme.palette.rarity.common
        },
        '& fieldset': {
          borderColor: theme.palette.rarity.common
        },
        '&:hover fieldset': {
          borderColor: theme.palette.rarity.common
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.rarity.common
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: theme.palette.rarity.common
        }
      },
      '&.uncommon': {
        '& input ': {
          color: theme.palette.rarity.uncommon
        },
        '& label ': {
          color: theme.palette.rarity.uncommon
        },
        '& fieldset': {
          borderColor: theme.palette.rarity.uncommon
        },
        '&:hover fieldset': {
          borderColor: theme.palette.rarity.uncommon
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.rarity.uncommon
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: theme.palette.rarity.uncommon
        }
      },
      '&.rare': {
        '& input ': {
          color: theme.palette.rarity.rare
        },
        '& label ': {
          color: theme.palette.rarity.rare
        },
        '& fieldset': {
          borderColor: theme.palette.rarity.rare
        },
        '&:hover fieldset': {
          borderColor: theme.palette.rarity.rare
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.rarity.rare
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: theme.palette.rarity.rare
        }
      },
      '&.legendary': {
        '& input ': {
          color: theme.palette.rarity.legendary
        },
        '& label ': {
          color: theme.palette.rarity.legendary
        },
        '& fieldset': {
          borderColor: theme.palette.rarity.legendary
        },
        '&:hover fieldset': {
          borderColor: theme.palette.rarity.legendary
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.rarity.legendary
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: theme.palette.rarity.legendary
        }
      },
      '&.mythical': {
        '& input ': {
          color: theme.palette.rarity.mythical
        },
        '& label ': {
          color: theme.palette.rarity.mythical
        },
        '& fieldset': {
          borderColor: theme.palette.rarity.mythical
        },
        '&:hover fieldset': {
          borderColor: theme.palette.rarity.mythical
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.rarity.mythical
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: theme.palette.rarity.mythical
        }
      },
      '&.godlike': {
        '& input ': {
          color: theme.palette.rarity.godlike
        },
        '& label ': {
          color: theme.palette.rarity.godlike
        },
        '& fieldset': {
          borderColor: theme.palette.rarity.godlike
        },
        '&:hover fieldset': {
          borderColor: theme.palette.rarity.godlike
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.rarity.godlike
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: theme.palette.rarity.godlike
        }
      },
      '&.drop': {
        '& input ': {
          color: theme.palette.customColors.light
        },
        '& label ': {
          color: theme.palette.customColors.light
        },
        '& fieldset': {
          borderColor: theme.palette.customColors.light
        },
        '&:hover fieldset': {
          borderColor: theme.palette.customColors.light
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.customColors.light
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: theme.palette.customColors.light
        }
      }
    },
    ticketBg: {
      position: 'relative',
      marginBottom: 4,
      minHeight: 40,
      padding: 6,
      '& img': {
        height: '95%',
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.15,
        pointerEvents: 'none'
      }
    },
    priceWrapper: {
      maxWidth: 300,
      margin: 'auto'
    },
    price: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    chance: {
      padding: 0,
      '&.common.highlighted': { backgroundColor: alpha(theme.palette.rarity.common, 0.05) },
      '&.uncommon.highlighted': { backgroundColor: alpha(theme.palette.rarity.uncommon, 0.05) },
      '&.rare.highlighted': { backgroundColor: alpha(theme.palette.rarity.rare, 0.05) },
      '&.legendary.highlighted': { backgroundColor: alpha(theme.palette.rarity.legendary, 0.05) },
      '&.mythical.highlighted': { backgroundColor: alpha(theme.palette.rarity.mythical, 0.05) },
      '&.godlike.highlighted': { backgroundColor: alpha(theme.palette.rarity.godlike, 0.05) },
      '&.drop.highlighted': { backgroundColor: alpha(theme.palette.rarity.drop, 0.05) }
    },
    textHighlight: {
      position: 'relative',
      zIndex: 5,
      '&.common': { color: theme.palette.rarity.common },
      '&.uncommon': { color: theme.palette.rarity.uncommon },
      '&.rare': { color: theme.palette.rarity.rare },
      '&.legendary': { color: theme.palette.rarity.legendary },
      '&.mythical': { color: theme.palette.rarity.mythical },
      '&.godlike': { color: theme.palette.rarity.godlike },
      '&.drop': { color: theme.palette.customColors.light }
    },
    tableValue: {
      fontSize: 16,
      fontWeight: 400,
      [theme.breakpoints.up('sm')]: {
        fontSize: 17
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 18
      }
    },
    ticketVisual: {
      minHeight: 28,
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center'
    },
    countEnteredCheckbox: {
      position: 'absolute',
      top: '100%',
      marginTop: -24,
      whiteSpace: 'nowrap',
      '& span': {
        fontSize: 13,
        opacity: 0.7,
        transition: 'opacity .3s ease-in-out'
      },
      '&:hover span': {
        opacity: 1
      },
      [theme.breakpoints.up('md')]: {
        marginTop: -10
      }
    },
    enteredValue: {
      position: 'relative',
      '&:hover .perc': {
        opacity: 1,
        visibility: 'visible'
      }
    },
    enteredValuePerc: {
      color: 'rgba(255, 255, 255, .7)',
      position: 'absolute',
      bottom: -13,
      right: 0,
      left: 0,
      textAlign: 'center',
      opacity: 0,
      visibility: 'hidden',
      fontSize: 13,
      whiteSpace: 'nowrap',
      transition: 'opacity .2s ease-in-out'
    },
    wearablesTitle: {
      marginBottom: 12,
      fontSize: 19,
      textAlign: 'center',
      '&:first-letter': {
        textTransform: 'uppercase'
      },
      [theme.breakpoints.up('md')]: {
        textAlign: 'left'
      }
    },
    wearable: {
      borderRadius: theme.shape.borderRadius,
      height: '100%',
      padding: '24px 12px 16px',
      textAlign: 'center',
      '&.common': {
        backgroundColor: alpha(theme.palette.rarity.common, 0.1)
      },
      '&.uncommon': {
        backgroundColor: alpha(theme.palette.rarity.uncommon, 0.1),
        '&.mystery': {
          backgroundColor: alpha(theme.palette.rarity.uncommon, 0.15)
        }
      },
      '&.rare': {
        backgroundColor: alpha(theme.palette.rarity.rare, 0.1),
        '&.mystery': {
          backgroundColor: alpha(theme.palette.rarity.rare, 0.15)
        }
      },
      '&.legendary': {
        backgroundColor: alpha(theme.palette.rarity.legendary, 0.1),
        '&.mystery': {
          backgroundColor: alpha(theme.palette.rarity.legendary, 0.15)
        }
      },
      '&.mythical': {
        backgroundColor: alpha(theme.palette.rarity.mythical, 0.1),
        '&.mystery': {
          backgroundColor: alpha(theme.palette.rarity.mythical, 0.15)
        }
      },
      '&.godlike': {
        backgroundColor: alpha(theme.palette.rarity.godlike, 0.1),
        '&.mystery': {
          backgroundColor: alpha(theme.palette.rarity.godlike, 0.15)
        }
      },
      '&.drop': {
        backgroundColor: alpha(theme.palette.customColors.light, 0.1),
        '&.mystery': {
          backgroundColor: alpha(theme.palette.customColors.light, 0.15)
        }
      },
      '&.mystery': {
        backgroundColor: alpha(theme.palette.error.light, 0.2)
      }
    },
    itemsWrapper: {
      textAlign: 'center',
      marginTop: 40
    }
  })
);

export const raffleCountdownStyles = makeStyles(() =>
  createStyles({
    countdownWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  })
);

export const raffleNavStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: '12px 0',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    buttonContainer: {
      textAlign: 'center'
    },
    button: {
      margin: 4,
      paddingRight: 12,
      paddingLeft: 12,
      color: '#fff',
      border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      backgroundColor: alpha(theme.palette.secondary.dark, 0.4),
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark
      },
      '&.Mui-disabled': {
        backgroundColor: alpha(theme.palette.secondary.dark, 0.2),
        borderColor: alpha(theme.palette.secondary.light, 0.2),
        color: alpha('#fff', 0.3),
        '& $label': {
          opacity: 0.4
        }
      },
      '&.active, &.active:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,

        '& $label': {
          color: theme.palette.secondary.main
        },
        '&.Mui-disabled': {
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          color: alpha('#fff', 0.2),

          '& $label': {
            color: theme.palette.primary.main
          }
        }
      }
    },
    label: {
      fontSize: 14,
      fontWeight: 600,
      textAlign: 'center'
    }
  })
);

export const raffleDataStyles = makeStyles(() =>
  createStyles({
    title: {
      textAlign: 'center',
      fontSize: 10,
      '&.live': {
        color: '#ff0c0c',
        fontSize: 12
      },
      '&.upcoming': {
        color: '#1fd71f',
        fontSize: 12
      },
      '&.ended': {
        color: '#979797'
      }
    }
  })
);

export const raffleChanceStyles = makeStyles((theme) =>
  createStyles({
    container: {
      color: theme.palette.common.white,
      marginTop: theme.spacing(1)
    },
    itemWon: {
      color: '#1de91d'
    },
    itemChance: {
      color: '#ffff00'
    },
    label: {
      minWidth: 60,
      display: 'inline-block',
      textAlign: 'right',
      color: theme.palette.common.white,
      marginRight: theme.spacing(1)
    }
  })
);

export const ticketStyles = makeStyles((theme) =>
  createStyles({
    ticket: {
      textAlign: 'center',
      position: 'relative'
    },
    ticketImg: {
      opacity: 0.2,
      display: 'block',
      margin: 'auto',
      width: 90
    },
    ticketTitle: {
      position: 'absolute',
      top: '50%',
      right: 0,
      left: 0,
      transform: 'translateY(-50%)',
      margin: 0,
      fontSize: 16,
      fontWeight: 400,
      [theme.breakpoints.up('sm')]: {
        fontSize: 17
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 18
      }
    }
  })
);

export const itemsStyles = makeStyles(() =>
  createStyles({
    list: {
      display: 'grid',
      gap: 12,
      gridTemplateColumns: 'repeat(auto-fill, minmax(192px, 1fr))'
    },
    listItem: {
      position: 'relative',
      '&:not(.highlight)': {
        opacity: '.4',
        filter: 'grayscale(1)'
      },
      '&.clean, &:hover': {
        opacity: '1 !important',
        filter: 'grayscale(0) !important',
        transition: 'all .2s ease-in-out'
      }
    }
  })
);

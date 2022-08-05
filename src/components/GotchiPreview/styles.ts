import { createStyles, makeStyles } from '@mui/styles';

export const gotchiPreviewStyles = makeStyles(theme => createStyles({
    gotchi: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        padding: theme.spacing(2),
        margin: 'auto'
    },
    gotchiView: {
        flexBasis: '45%',
        display: 'flex',
        alignItems: 'flex-end',
        paddingRight: theme.spacing(2),
        borderRight: `2px solid ${theme.palette.background.paper}`
    },
    gotchiCenter: {
        flex: 1,
        margin: '0 2.5% 5%'
    },
    centerHead: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(3)
    },
    collateral: {
        width: 26,
        height: 26,
        '& img': {
            width: '100%'
        }
    },
    wearables: {
        width: '20%'
    },
    body: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    title: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(1),
        borderBottom: `2px solid ${theme.palette.background.paper}`
    },
    name: {
        fontSize: 22,
        marginRight: theme.spacing(2)
    },
    infoList: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '1.5% -1%'
    },
    infoItem: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.background.secondary,
        padding: theme.spacing(1),
        margin: '1.5% 1%',
        borderRadius: 3,
        fontSize: 16
    },
    rarity: {
        padding: theme.spacing(.5, 1),
        margin: 0
    },
    infoLabel: {
        color: theme.palette.primary.main
    },
    infoValue: {
        marginLeft: theme.spacing(.5)
    },
    infoIcon: {
        marginLeft: theme.spacing(.5)
    },
    traits: {
        maxWidth: 550,
        backgroundColor: theme.palette.background.secondary,
        padding: '2%',
        fontSize: 16,
        '& > div': {
            flexBasis: '48%',
            margin: '1%',
            padding: theme.spacing(.5)
        },
        '& img': {
            width: 24,
            height: 24
        }
    }
}));
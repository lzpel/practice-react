import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import Create from '@material-ui/icons/Create';
import Loop from '@material-ui/icons/Loop';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import Settings from '@material-ui/icons/People';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import AssignmentIcon from '@material-ui/icons/Assignment';
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import {fade, makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

//mainとdrawerは左右で譲り合っているのでmainはこの値を参照しない。勝手に決めてよい。
const drawerWidth = 240;

export default function ListItemsDrawer() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    //変更
    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <Divider/>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Create/>
                    </ListItemIcon>
                    <ListItemText primary="新しくジョブを追加"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Loop/>
                    </ListItemIcon>
                    <ListItemText primary="定期実行ジョブ"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <QueryBuilder/>
                    </ListItemIcon>
                    <ListItemText primary="日時指定ジョブ"/>
                </ListItem>
                <ListItem button onClick={handleDrawerToggle}>
                    <ListItemIcon>
                        {open ? <ArrowBackIos/>:<ArrowForwardIos/>}
                    </ListItemIcon>
                    <ListItemText primary="展開"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="設定"/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                    />
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListSubheader inset>Saved reports</ListSubheader>
                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Current month"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Last quarter"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Year-end sale"/>
                </ListItem>
            </List>
        </Drawer>
    )
}
import React, { useState } from 'react';
import { FaBars, FaEllipsisV } from 'react-icons/fa';
import logo from '../assets/logo2.png';
import mobileLogo from '../assets/logo3.png';

import { SearchPanel } from "react-search-panel";

import { Button } from '@material-ui/core';
import { ClickAwayListener } from '@material-ui/core';
import { Grow } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Popper } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import { MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { InboxIcon, DraftsIcon, SendIcon, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const Header = ({ toggleCollapsed, }) => {
    const choices = [];
    const [input, setInput] = React.useState("");
    const [selectedChoices, setSelectedChoices] = useState(choices);


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header">
            <div className="header1">
            <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    // variant="contained"
                    // color="primary"
                    // onClick={handleClick}
                > 
                <div className="header-btn-toggle" onClick={() => toggleCollapsed()} >
                    <MenuOpenIcon />
                </div>
            </Button>
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="header2 desktopOnly">
                <SearchPanel
                    choices={choices}
                    onChange={event => setInput(event.target.value)}
                    onSelectionChange={setSelectedChoices}
                    placeholder="Search"
                    selectedChoices={selectedChoices}
                    value={input}
                    width={400}
                    className="search"
                />
            </div>

            <div className="header3">
                 <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    // variant="contained"
                    // color="primary"
                    onClick={handleClick}
                > 
                <div className="header-btn-toggle" onClick={() => handleClick} 
                    >
                        <PersonRoundedIcon />
                    </div>
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                        <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <InboxIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </StyledMenuItem>
                </StyledMenu>
            </div>
        </div>
    );
};

export default Header;
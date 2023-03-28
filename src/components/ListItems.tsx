import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalculateIcon from "@mui/icons-material/Calculate";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FilterListIcon from "@mui/icons-material/FilterList";
import HelpIcon from "@mui/icons-material/Help";
import PublicIcon from "@mui/icons-material/Public";
import TagIcon from "@mui/icons-material/Tag";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export const mainListItems = (
  <React.Fragment>
    <ListSubheader sx={{ paddingLeft: 2 }} component="div" inset>
      CORE
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CalculateIcon />
      </ListItemIcon>
      <ListItemText primary="Calculator" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SwapHorizIcon />
      </ListItemIcon>
      <ListItemText primary="Swap" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FilterListIcon />
      </ListItemIcon>
      <ListItemText primary="To Do List" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="FAQ" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader sx={{ paddingLeft: 2 }} component="div" inset>
      Links
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <TagIcon />
      </ListItemIcon>
      <ListItemText primary="Socials" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PublicIcon />
      </ListItemIcon>
      <ListItemText primary="Website" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="Buy Now" />
    </ListItemButton>
  </React.Fragment>
);

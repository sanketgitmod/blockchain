import * as React from "react";
import { ethers } from "ethers";
import { useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./ListItems";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Card from "./Card";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [getToken, setToken] = React.useState({
    totalToken: "",
    totalTokenValue: "",
    tokenBurned: "",
    totalTokenSupply: "",
    marketVolume: "",
    currentPrice: "",
  });
  const toggleDrawer = () => {
    setOpen(!open);
  };
  useEffect(() => {
    (async function block() {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://data-seed-prebsc-2-s2.binance.org:8545"
      );
      const daiAddress = "0xC07C903f3378A043423F74FCB3Ccc2798b60aB3B";
      const daiAbi = [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "delegate",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "numTokens",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "numTokens",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "buyer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "numTokens",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "delegate",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "tokenOwner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
      const resTotalToken = await daiContract.balanceOf(
        "0x312F0786252A4d26E51b7972C384469fc2cC69a9"
      );

      const totalToken: number =
        Math.round(ethers.utils.formatEther(resTotalToken) * 100) / 100;

      const totalTokenValue: number =
        Math.round(totalToken * 1724.32 * 100) / 100;

      const resTotalSupply = await daiContract.totalSupply();
      const totalTokenSupply: number =
        Math.round(ethers.utils.formatEther(resTotalSupply) * 100) / 100;
      const marketVolume = totalTokenSupply * 1724.32;
      const tokenBurned = totalTokenSupply - totalToken;

      const token: any = {
        totalToken: `${totalToken} TKN`,
        totalTokenValue: `${totalTokenValue}$`,
        tokenBurned: `${tokenBurned} TKN`,
        totalTokenSupply,
        marketVolume,
        currentPrice: "$1724.32",
      };
      setToken(token);
    })();
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar sx={{ boxShadow: "none" }} position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "white",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            ></Typography>

            <Button
              sx={{ marginRight: 2 }}
              variant="outlined"
              endIcon={<SwapHorizIcon />}
            >
              SWAP
            </Button>
            <ConnectButton label="CONNECT" />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          ></Toolbar>
          <List component="nav">
            {mainListItems}
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={12} lg={12}>
                <Card />
              </Grid>

              <Grid item xs={12}>
                <Paper
                  variant="outlined"
                  sx={{
                    border: 1,
                    color: "#1976D2",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={2} sm={4} md={4}>
                      <Item
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <Typography fontWeight={600} component="div">
                          My Total Token
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5 }}
                          fontSize={20}
                          fontWeight={600}
                          color="#1976D2"
                        >
                          {getToken?.totalToken}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                      <Item
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <Typography fontWeight={600} component="div">
                          Total Token Value
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5 }}
                          fontSize={20}
                          fontWeight={600}
                          color="#1976D2"
                        >
                          {getToken.totalTokenValue}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                      <Item
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <Typography fontWeight={600} component="div">
                          Token Burned
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5 }}
                          fontSize={20}
                          fontWeight={600}
                          color="#1976D2"
                        >
                          {getToken.tokenBurned}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                      <Item
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <Typography fontWeight={600} component="div">
                          Total Supply
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5 }}
                          fontSize={20}
                          fontWeight={600}
                          color="#1976D2"
                        >
                          {getToken.totalTokenSupply}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                      <Item
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <Typography fontWeight={600} component="div">
                          Market Volume (USD)
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5 }}
                          fontSize={20}
                          fontWeight={600}
                          color="#1976D2"
                        >
                          {getToken.marketVolume}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                      <Item
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <Typography fontWeight={600} component="div">
                          Current Price
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5 }}
                          fontSize={20}
                          fontWeight={600}
                          color="#1976D2"
                        >
                          {getToken.currentPrice}
                        </Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { styled } from "@mui/material/styles";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Button from "@mui/material/Button";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
});

export default function Example() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
      }}
    >
      <BootstrapButton
        fullWidth
        sx={{ cursor: "default" }}
        variant="outlined"
        disableRipple
        disableFocusRipple
        startIcon={<AccountBalanceWalletIcon />}
      >
        Wallet Address - 0x312F0786252A4d26E51b7972C384469fc2cC69a9
      </BootstrapButton>
    </Box>
  );
}

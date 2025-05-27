import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, IconButton, Snackbar, Alert } from '@mui/material';
import { ethers } from 'ethers';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import MetaMaskLogo from '/assets/metamask.svg';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Wallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>('0');
  const [showLogoutInfo, setShowLogoutInfo] = useState(false);
  const [showSwitchInfo, setShowSwitchInfo] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('User rejected connection');
      }
    }
  };

  const loadBalance = async (address: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const balanceBN = await provider.getBalance(address);
    const ethBalance = ethers.formatEther(balanceBN);
    setBalance(ethBalance);
  };

  const logout = () => {
    setAccount(null);
    setBalance('0');
    setShowLogoutInfo(true);
  };

  const switchAccount = () => {
    setShowSwitchInfo(true);
  };

  useEffect(() => {
    if (account) {
      loadBalance(account);
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length === 0) {
          logout();
        } else {
          setAccount(accounts[0]);
          loadBalance(accounts[0]);
        }
      });
    }

    return () => {
      window.ethereum?.removeAllListeners('accountsChanged');
    };
  }, [account]);

  return (
    <Box sx={{ p: 3 }}>
      {account ? (
        <>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
            <Box display="flex" alignItems="center">
              <img src={MetaMaskLogo} alt="MetaMask" style={{ width: 24, marginRight: 8 }} />
              <Typography variant="subtitle1" fontWeight={500}>
                {account}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={switchAccount}>
                <SwapHorizIcon />
              </IconButton>
              <IconButton onClick={logout}>
                <LogoutIcon />
              </IconButton>
            </Box>
          </Box>

          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
              {parseFloat(balance).toFixed(4)} ETH
            </Typography>
            <Typography variant="h6">
              ${(parseFloat(balance) * 1850).toFixed(2)} USD
            </Typography>
          </Box>
        </>
      ) : (

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={10}>
          <img src={MetaMaskLogo} alt="MetaMask" style={{ width: 100, marginBottom: 24 }} />
          <Button variant="contained" onClick={connectWallet} startIcon={<AccountBalanceWalletIcon />}>
            Connect Wallet
          </Button>
        </Box>
      )}

      <Snackbar open={showLogoutInfo} autoHideDuration={6000} onClose={() => setShowLogoutInfo(false)}>
        <Alert severity="info" onClose={() => setShowLogoutInfo(false)}>
          To fully disconnect, go to MetaMask → Connected Sites → Disconnect.
        </Alert>
      </Snackbar>

      <Snackbar open={showSwitchInfo} autoHideDuration={6000} onClose={() => setShowSwitchInfo(false)}>
        <Alert severity="info" onClose={() => setShowSwitchInfo(false)}>
          To switch accounts, open MetaMask and select a different account manually.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Wallet;

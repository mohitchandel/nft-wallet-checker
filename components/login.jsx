import { useState, useEffect } from 'react';
import { Link, Box, Flex, Text, Button, Stack } from '@chakra-ui/react';

import UAuth from '@uauth/js';

export const Login = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();

  const uauth = new UAuth({
    clientID: 'd6a62f91-4529-4524-9d4c-68ff96682525',
    redirectUri: 'https://nft-wallet-checker.vercel.app/',
    scope: 'openid wallet',
  });

  const loginHandler = async () => {
    setIsLogin(true);
    try {
      await uauth.loginWithPopup().then(() => uauth.user().then(setUser));
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log(accounts);

      setIsLogin(true);
      // setWalletAddress(user.wallet_address);
      console.log(walletAddress);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box>
        <Button colorScheme="blue" type="button" onClick={loginHandler}>
          {' '}
          Login with Unstoppable{' '}
        </Button>
      </Box>
    </>
  );
};

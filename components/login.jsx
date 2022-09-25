import { useState, useEffect } from 'react';
import UAuth from '@uauth/js';

export const Login = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();

  const uauth = new UAuth({
    clientID: 'd6a62f91-4529-4524-9d4c-68ff96682525',
    redirectUri: 'http://localhost:3000',
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
      <div
        className="bg-blue
      "
      >
        <button
          type="button"
          className="nft-gradient bg-blue-400 text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white"
          onClick={loginHandler}
        >
          {' '}
          Login with Unstoppable{' '}
        </button>
      </div>
    </>
  );
};

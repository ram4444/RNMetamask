import React, { useState } from 'react';

import { makeStyles, Button } from "@rneui/themed";
import {MetaMaskSDK} from '@metamask/sdk';
//import { Linking } from 'react-native';
//import BackgroundTimer from 'react-native-background-timer';

/*
const MMSDK = new MetaMaskSDK({
  openDeeplink: (link) => {
    Linking.openURL(link); // Use React Native Linking method or another way of opening deeplinks.
  },
  timer: BackgroundTimer, // To keep the dapp alive once it goes to background.
  dappMetadata: {
    name: 'My dapp', // The name of your dapp.
    url: 'https://mydapp.com', // The URL of your website.
  },
});


const ethereum = MMSDK.getProvider();
const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
*/

export default function MetamaskBtn() {
  //const { setMode, mode } = useThemeMode();
  const [buttonText, setButtonText] = useState('Metamask'); 

  const handleOnPress = async () => {
    /*
    const provider = new ethers.providers.Web3Provider(ethereum);

    // Get the balance of an account (by address or ENS name, if supported by network).
    const balance = await provider.getBalance(ethereum.selectedAddress);

    // Often you need to format the output to something more user-friendly,
    // such as in ether (instead of wei).
    const balanceInETH = ethers.utils.formatEther(balance);
    */
    setButtonText(buttonText === 'Metamask' ? 'MetamaskClicked' : 'MetamaskClicked2'); 


  };

  return (
      <Button onPress={handleOnPress}>{buttonText}</Button>
  );
}

/*
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
}));
*/

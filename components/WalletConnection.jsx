import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import {
  Center,
  Image,
  Input,
  FormControl,
  Button,
  Grid,
  GridItem,
  Container,
  Heading,
  ChakraProvider,
  Text,
} from '@chakra-ui/react';
import { NFT } from './NFT';

import { useAccount } from 'wagmi';

export const WalletConnection = () => {
  const { address, isConnected } = useAccount();
  const [nftData, setNftData] = useState({});
  const [walletAddress, setwalletAddress] = useState(
    isConnected ? address : '0x8cCcfb7278cA27DDe1ca9b097E005ff8fB94D7B9'
  );
  const [isLoading, setIsLoading] = useState(false);

  const validateAddress = (address) => {
    return ethers.utils.isAddress(address);
  };

  const imageNotFound =
    'https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg';

  /* A function that is called when the user clicks the button. */
  const fetchNftData = async () => {
    setIsLoading(true);

    if (!validateAddress(walletAddress)) {
      setIsLoading(false);
      alert('Please enter valid address');
      return;
    }

    axios
      .get(
        `https://api.covalenthq.com/v1/8001/address/${walletAddress}/balances_v2/?format=JSON&nft=true&no-nft-fetch=true&key=ckey_6c3466593e914850b13c73d38fc`
      )
      .then(function (response) {
        setIsLoading(false);
        if (response.length < 1) {
          alert('There is no data, Lost in space');
        }
        setNftData(response.data.data.items.filter((t) => t.type === 'nft'));
        console.log(nftData);
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchNftData();
  }, []);

  return (
    <ChakraProvider>
      <Container centerContent maxW="container.xl">
        <FormControl maxW="md" isRequired marginTop={10}>
          <Center>
            <Heading as="h3">NFT Wallet Address</Heading>
          </Center>
          <Input
            onChange={(e) => setwalletAddress(e.target.value)}
            defaultValue={walletAddress}
            type="text"
            placeholder="Wallet Address"
          />
        </FormControl>
        <Button
          disabled={isLoading}
          onClick={fetchNftData}
          bg="#0e76fd"
          color={'#fff'}
          marginY={4}
        >
          {isLoading ? 'Loading...' : 'Get NFTs'}
        </Button>
        <Grid marginY={10}>
          <GridItem>
            <Center>
              <Image
                rounded={'xl'}
                height={50}
                width={50}
                objectFit={'cover'}
                src={nftData.contract?.metadata?.thumbnail_url}
              />
            </Center>
          </GridItem>
          <GridItem marginY={4}>
            <Center>
              <Heading as="h4" size="lg">
                {nftData.contract?.name}
              </Heading>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Text>{nftData.contract?.metadata?.description}</Text>
            </Center>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} marginY={10}>
          {nftData.length > 0
            ? nftData.map((nft, index) => {
                return (
                  <GridItem marginY={6} key={index}>
                    <NFT
                      image={imageNotFound}
                      name={nft.contract_name}
                      tokenId={nft.nft_data[0].token_id}
                    />
                  </GridItem>
                );
              })
            : ''}
        </Grid>
      </Container>
    </ChakraProvider>
  );
};

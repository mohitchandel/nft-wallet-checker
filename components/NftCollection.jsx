import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Image,
  Input,
  FormControl,
  FormLabel,
  Button,
  Grid,
  GridItem,
  Container,
  Heading
} from "@chakra-ui/react";
import { NFT } from "./NFT";

export const NftCollection = () => {
  const [nftData, setNftData] = useState({});
  const [contAddress, setContAddress] = useState(
    "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
  );

  const validateAddress = () => {
    return;
  };

  const fetchNftData = async () => {
    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_NFTPORT_API_URL}/v0/nfts/${contAddress}`,
      params: {
        chain: "ethereum",
        account_address: contAddress,
        page_size: "50",
        include: "metadata",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_NFTPORT_API_KEY}`,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNftData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchNftData();
  },[])

  return (
    <>
      <Container centerContent>
        <FormControl isRequired>
          <FormLabel>NFT Contract Address</FormLabel>
          <Input type="text" placeholder="Contract Address" />
        </FormControl>
        <Button colorScheme="blue">Get NFTs</Button>
        <div>
        <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={nftData.contract?.metadata?.thumbnail_url}
          />
          <Heading as="h2" size="3xl" >
            {nftData.contract?.name}
          </Heading>
          <p>{nftData.contract?.metadata?.description}</p>
        </div>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {nftData.nfts?.map((nft) => {
            return (
              <GridItem>
                <NFT image={nft.metadata.image_url} name={nft.metadata.name} tokenId={nft.token_id} />
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

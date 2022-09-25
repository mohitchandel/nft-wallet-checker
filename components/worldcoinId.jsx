import { Center } from '@chakra-ui/react';
import { WorldIDWidget } from '@worldcoin/id';

export const WorldCoinId = () => {
  return (
    <>
      <Center>
        <WorldIDWidget
          actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
          signal="my_signal"
          enableTelemetry
          onSuccess={(verificationResponse) =>
            console.log(verificationResponse)
          } // pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
          debug={true} // to aid with debugging, remove in production
        />
      </Center>
    </>
  );
};

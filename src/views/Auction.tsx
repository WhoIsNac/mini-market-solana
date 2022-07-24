import { CreateAuction } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const Auction: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <DesContainer>
      <h1 style={{ marginBottom: 30 }}>Auction Creator</h1>
      <CreateAuction
        candyShop={candyShop}//ordre inverser
        wallet={wallet}
        walletConnectComponent={<WalletMultiButton />}
        cacheUserNFT={true}
      />

    </DesContainer>
  );
};

export default Auction;

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`;

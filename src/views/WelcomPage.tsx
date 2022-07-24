
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import logo from '../img/imagehome.png'; // with import

import styled from "styled-components";

const HomePage: React.FC = () => {
  const wallet = useAnchorWallet();

  return (

    <Wrapper>
    <DesContainer>
        
      <h1 >WELCOME TO THE MARKETPLACE</h1>
      <p>The first NFT platform. Lowest trading fees on Solana </p>
      <p> from 2% down to 0%. Live mints. Start trading now - no login required.</p>

    </DesContainer>
    <Wrapperbis>    <img src={logo} />
</Wrapperbis>
      </Wrapper>
  );
};

export default HomePage;

const DesContainer = styled.section`
  width: 100%;
  text-align: left;
  box-sizing: border-box;
margin: 0;
padding: 0;
font-weight: 300;
font-size: 20px;
margin: 40px 0 40px 0;
line-height: 1.5em;
letter-spacing: .5px;
color: var(--new-above-the-fold-p);
 
`;

const Wrapper = styled.section`
  padding: 4em;
`;

const Wrapperbis = styled.section`
position: relative;
margin: auto;

`;
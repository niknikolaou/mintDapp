import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Mainnet, Config, MetamaskConnector } from '@usedapp/core'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://polygon-mumbai.gateway.pokt.network/v1/lb/6312338e22a38a0039f241db',
  },
  connectors: {
    metamask: new MetamaskConnector(),
  }
}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

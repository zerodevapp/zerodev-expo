import React from "react";
import {
  WagmiConfig,
  configureChains,
  createClient,
} from "wagmi";
import { publicProvider } from 'wagmi/providers/public'
import { polygonMumbai } from 'wagmi/chains'
import { 
    GoogleSocialWalletConnector, 
    Auth0WalletConnector,
    FacebookSocialWalletConnector, 
    GithubSocialWalletConnector,
    DiscordSocialWalletConnector,
    TwitchSocialWalletConnector,
    TwitterSocialWalletConnector,
} from '@zerodevapp/wagmi'

const defaultProjectId = process.env.REACT_APP_ZERODEV_PROJECT_ID || 'b5486fa4-e3d9-450b-8428-646e757c10f6'

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [publicProvider()],
)

const connectorOptions = {
    chains,
    options: {
        projectId: defaultProjectId
    }
}

const client = createClient({
  autoConnect: false,
  connectors: [
    new GoogleSocialWalletConnector(connectorOptions),
    // new Auth0WalletConnector(connectorOptions)
  ],
  provider,
  webSocketProvider,
})

function ZeroDevWrapper({children}) {
  return (
    <WagmiConfig client={client}>
        {children}
    </WagmiConfig>
  )
}

export default ZeroDevWrapper
import { useCallback, useEffect } from 'react';
import { Button } from 'react-native';
import { useConnect } from 'wagmi'
import { ZeroDevWeb3Auth } from '@zerodevapp/web3auth';

export default function ConnectButton() {
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  console.log(connectors)
  console.log("HELLO WORLD")
  useEffect(() => {
    const zeroDevWeb3Auth = new ZeroDevWeb3Auth([process.env.REACT_APP_ZERODEV_PROJECT_ID || 'b5486fa4-e3d9-450b-8428-646e757c10f6'])
    zeroDevWeb3Auth.getUserInfo().then(console.log)

  }, [])

  const handleClick = useCallback(() => {
    connect({connector: connectors[0]})

  }, [])

  return (
    <Button title='Connect' onPress={handleClick} />
  );
}

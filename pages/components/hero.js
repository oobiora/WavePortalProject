import Head from 'next/head'
import Image from 'next/image'
import { ethers } from 'ethers'
import { WalletProviderContext } from '../_app.js'
import abi from '../../wavePortalABI.json'
import { useState, useEffect } from 'react'

export default function Hero() {
	const contractAddress = '0x32e07AfdC9b69de9f477908Acdbc6440cf9aa42D'
	const ABI = abi.abi

	const [loading, isLoading] = useState(false)
	const [waveCount, setWaveCount] = useState(null)

	useEffect(()=> {
		getWaveCount()
	}, [])

	const getWaveCount = async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner()
		const waveportalContract = new ethers.Contract(contractAddress, ABI, signer);

		let count = await waveportalContract.getTotalWaves()
		setWaveCount(count.toNumber())
		console.log("Retrieved total wave count... ", count.toNumber())
	}
	
	const wave = async () => {
		console.log(ABI)
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner()
		const waveportalContract = new ethers.Contract(contractAddress, ABI, signer);


		const waveTxn = await waveportalContract.wave()
		console.log("Mining...", waveTxn.hash)
		isLoading(waveTxn.hash)
		await waveTxn.wait()
		isLoading(false)
		getWaveCount()

	}
  return (
		<WalletProviderContext.Consumer>
		{
			({account, setAccount}) => 
			(account ?
			<div className="w-full h-full p-10 flex">
				<div className="container m-auto text-center text-4xl font-bold w-full h-max">
					<h3 className="text-2xl font-extralight animate-none">Welcome To</h3>
					<h1 className="text-blue-900">Wave Portal</h1>
					<p className="text-base">connected account: <span className="text-xs font-extralight">{account}</span></p>
					<h4 className="text-xs font-medium"> current waves: <span className="text-blue-600">{waveCount}</span></h4>
					{ !loading ?
					<button className="ring-2 hover:ring-4 ring-blue-200 hover:ring-blue-900 rounded-lg px-5 py-1 mx-auto text-base mt-10 font-medium transition delay-150 ease-in-out" onClick={wave}>Wave!</button> :
					<div className="animate-pulse text-lg text-blue-400 mt-10">
						Mining...
					</div>
					}
				</div>
			</div>
			:
			<div className="container mx-auto text-center mt-36">
				<h1 className="text-2xl font-extralight"> Please Connect to a wallet provider, <span>Metamask</span></h1>
				<button onClick={setAccount} className="ring-2 hover:ring-4 ring-blue-200 hover:ring-blue-900 rounded-lg px-5 py-1 mx-auto text-base mt-10 font-medium transition delay-150 ease-in-out">Connect Wallet Here</button>
			</div>)
		}
		</WalletProviderContext.Consumer>
  )
}
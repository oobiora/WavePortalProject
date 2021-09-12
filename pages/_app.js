import 'tailwindcss/tailwind.css'
import { useEffect, createContext, useState } from 'react'

export const WalletProviderContext = createContext(null)

function MyApp({ Component, pageProps }) {
	
	const connectWallet = () => {
		console.log("Connecting...")
		const { ethereum } = window;
		if (!ethereum) {
			alert("Please Download MetaMask, Its Free!")
			return
		} 

		if (ethereum != undefined) {
			ethereum.request({ method: 'eth_requestAccounts' })
				.then(accounts => {
					console.log("Connected", accounts[0])
					connect({account: accounts[0], setAccount: connectWallet})
				})
				.catch(e => console.log(e))
		}
		

	}


	var [wallet, connect] = useState({account: null, setAccount: connectWallet})



	const checkIfConnected = () => {
		const { ethereum } = window;
		if (!ethereum) {
			console.log("Make sure you have metamask!")
			return
		} else {
			console.log("Connected to ethereum", ethereum)
		}


		ethereum.request({ method: 'eth_accounts' })
			.then(accounts => {
				console.log(accounts)
				if (accounts.length !== 0) {
					const account = accounts[0];
					console.log("found an authorized account:", account)
					connect({account: account, setAccount: connectWallet})
				} else {
					console.log("No account found")
					connect({account: null, setAccount: connectWallet})
				}
			})
	}

	
	useEffect(() => {

		checkIfConnected()
		
	}, [])


  return (
		<WalletProviderContext.Provider value={wallet}>
			<Component {...pageProps} />
		</WalletProviderContext.Provider>
		
		)
}

export default MyApp

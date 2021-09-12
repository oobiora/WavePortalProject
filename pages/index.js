import Head from 'next/head'
import Image from 'next/image'
import Hero from './components/hero'
import Navbar from './components/navbar'
import AccountToolTip from './components/accountInfo'

export default function Home() {

  return (
		<div className="w-screen h-full">
			<Navbar />
			<AccountToolTip />
			<div className="row-span-1">
				<Hero />
			</div>
		</div>
  )
}

export default function Navbar() {
	return (
		<div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
			<div className="flex-1 px-2 mx-2">
				<span className="text-lg font-bold text-blue-200">
								WavePortal
							</span>
			</div> 
			<div className="flex-none">
				<button className="btn btn-square btn-ghost">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-error">   
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
					</svg>
				</button>
			</div>
		</div>
			
	)
}
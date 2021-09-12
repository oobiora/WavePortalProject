export default function AccountToolTip() {
	return (
		<div className="stat">
			<div className="stat-figure text-info animate-pulse">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">                     
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>     
				</svg>
			</div> 
			<div className="stat-title">Connected Account: </div> 
			<div className="stat-value text-info">2.6 Waves</div> 
		</div> 
	)
}
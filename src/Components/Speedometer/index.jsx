import { ReactInternetSpeedMeter } from "react-internet-meter";
import './index.css'
import React, { useEffect } from "react";

function Index() {
	const [checkSpeed, setCheckSpeed] = React.useState(0);

	const change = (num) => {

		if (num > 120) {
			console.log(1);
			return 120
		} else {
			return (num * 2) - 120
		}
	}

	return (
		<main>
			<div className="speedometer">
				<div className="speedometer-inner">
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick">
					</div>
					<div className="tick"><span></span>
					</div>
					<div
						className="arrow"
						style={{
							transform: `rotate(${change(checkSpeed)}deg) translateY(-73%)`
						}}
					>

					</div>
					{/* arrow.style.transform = "rotate(" + ((arrowWpm * 2) - 120) + "deg) translateY(-72%)"; */}
					<div className="unit"></div>
					<div className="wpm">
						<p>{checkSpeed}</p>
					</div>
				</div>
			</div>

			<ReactInternetSpeedMeter
				txtSubHeading="Internet connection is slow"
				outputType="" // "alert"/"modal"/"empty"
				customClassName={null}
				pingInterval={300} // milliseconds
				txtMainHeading="Opps..."
				thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
				threshold={50}
				imageUrl="https://raw.githubusercontent.com/mathiasbynens/small/master/bmp.bmp"
				downloadSize="1561257" //bytes
				callbackFunctionOnNetworkDown={(data) =>
					console.log(`Internet speed : ${data}`)
				}
				callbackFunctionOnNetworkTest={(data) => setCheckSpeed(data)}
			/>
		</main>
	);
}

export default Index;
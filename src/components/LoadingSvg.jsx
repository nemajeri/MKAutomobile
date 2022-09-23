import * as React from "react"

const LoadingSvg = () => (
    <>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="150px" height="50px" viewBox="0 0 150 50" enableBackground="new 0 0 150 50" xmlSpace="preserve">
<g>
	<rect opacity="0" x="19.077" y="21.538" fill="#F24130" width="30" height="7">
		<animate attributeName="opacity"
             values="0;1;0" 
             dur="1s"
             begin="0"
             repeatCount="indefinite"/>
	</rect>
	<rect opacity="0" x="60.154" y="21.538" fill="#F24130" width="30" height="7">
		<animate attributeName="opacity"
             values="0;1;0" 
             dur="1s"
             begin="0.2"
             repeatCount="indefinite"/>
	</rect>
	<rect opacity="0" x="101.231" y="21.538" fill="#F24130" width="30" height="7">
		<animate attributeName="opacity"
             values="0;1;0" 
             dur="1s"
             begin="0.4"
             repeatCount="indefinite"/>
	</rect>
</g>
</svg>
    </>
)

export default LoadingSvg
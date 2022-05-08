import './Header.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <div className='mka__header'>
      	<div className='mka__header-list'>
							<ul>
								<li><FaPhoneAlt /> +43 2262 20413</li>
								<li><FaMobileAlt /> +43 680 3149332</li>							
           				    </ul>
		</div>
							<div className='mka__header-link'>
								<p><FaRegEnvelope /> <a href="mailto:office@mkautomobile.at">office@mkautomobile.at</a></p>						
							</div>
   					 </div>
  );
}

export default Header;
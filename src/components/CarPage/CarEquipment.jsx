import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './CarPage.css'

const CarEquipment = () => {
  return (
    <>
        <ul className='mka__list-alignment__carpage'>
          <div className='mka__list-alignment__carpage inner-div'>
            <div>
            <li><FaCheck style={{color: "red"}}/>ABS</li>
            <li>Antriebsschlupfregelung (ASR)</li>
            <li>Bordcomputer</li>
            <li>elektr. Fensterheber</li>
            <li>Fahrerairbag</li>
            <li>Klimaanlage</li>
            <li>Kopfairbags</li>
            <li>Leichtmetall-/Alufelgen</li>
            <li>Mittelarmlehne</li>
            <li>Nebelscheinwerfer</li>
            <li>Reifendrucksensor</li>
            <li>Servicegepflegt</li>
            <li>Sitzheizung</li>
            <li>Tempomat</li>
            </div>
            <div>
            <li>Alarmanlage</li>
            <li>Beifahrerairbags</li>
            <li>CD Player</li>
            <li>elektr. Spiegel</li>
            <li>ISOFIX</li>
            <li>Klimaautomatik</li>
            <li>Lederlenkrad</li>
            <li>Metallic-Lackierung</li>
            <li>Navigationssystem</li>
            <li>Regensensor</li>
            <li>Seitenairbags</li>
            <li>Servolenkung</li>
            <li>Stabilitätsprogramme (ESP)</li>
            <li>Zentralverriegelung</li>
            </div>
            </div>
        </ul>
    </>
  )
}

export default CarEquipment
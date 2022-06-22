import React from 'react'
import './CarPurchase.css'

function CarPurchase() {
  return (
    <div className='mka__wrapper-purchase'>
    <div className='mka__container-purchase'>
      <div className='mka__content-purchase'>
        <p>Wir kaufen laufend Gebrauchtwagen unterschiedlicher Marken und Fahrzeugtypen.
           Wenn Sie Ihr altes Fahrzeug verkaufen möchten, würden wir es Ihnen gerne abkaufen. 
           Wir garantieren eine rasche und seriöse Abwicklung sowie einen fairen und marktüblichen Preis. 
           Die Bezahlung erfolgt direkt vor Ort und in bar. 
           Die behördliche Abmeldung übernehmen wir gerne für Sie.</p>
        <h2>VERMITTLUNG / KOMMISSIONSVERKAUF</h2>
        <p>Nutzen Sie unsere Fachkompetenz, unsere Branchenkenntnisse und unser Netzwerk sowie unseren Kundenkreis um Ihr Auto bestmöglich zu verkaufen!
           Wir übernehmen dabei gerne die komplette Abwicklung für Sie.</p>
        <p>Ihre Vorteile auf einen Blick:</p>
        <ul>
        <li>Das Auto wird vor dem Verkauf professionell aufbereitet</li>
        <li>Inserieren auf allen gängigen Plattformen, einschließlich Fotos</li>
        <li>Verkaufsgespräche und Vertragsgestaltung</li>
        <li>Garantie und Finanzierung können mit angeboten werden, keine zusätzlichen Kosten für den Verkäufer</li>
        </ul>
        <div className='mka__forms-purchase'>
          <div className='mka__form-design'>
          <p>Persönliche Daten</p>
        <form>
        <label>
          <input type="text" value="VORNAME"/>
          <input type="text" value="NACHNAME"/>
          <input type="text" value="GESCHLECHT"/>
          <input type="text" value="STRASSE / NR."/>
          <input type="text" value="PLZ"/>
          <input type="text" value="STADT"/>
          <input type="text" value="FIRMA"/>
        </label>
        </form>
        </div>
        <div className='mka__form-design'>
        <p>Kontaktdaten</p>
        <form>
        <label>
          <input type="text" value="E-MAIL"/>
          <input type="text" value="MOBILNUMMER"/>
          <input type="text" value="FAX"/>
          <input type="text" value="TEL"/>
        </label>
        </form>
        </div>
        <div className='mka__form-design'>
        <p>Fahrzeugdaten</p>
        <form>
        <label>
          <input type="text" value="MARKE"/>
          <input type="text" value="MODELL"/>
          <input type="text" value="PREISVORSTELLUNG"/>
          <input type="text" value="KRAFTSTOFF"/>
          <input type="text" value="KILOMETERSTAND"/>
          <input type="text" value="AKTUELLER ZUSTAND"/>
          <input type="text" value="EZ DES FAHRZEUGES"/>
          <input id='mka__larger-submit-field' type="text" value="SONDERAUSSTATTUNGEN"/>
        </label>
        </form>
        </div>
        </div>
        <h5 id='mka__input-field-title'>Fahrzeugbilder</h5>
        <div className='mka__input-field-docs'>
          <div className='mka__input-field-msg'>
            <p>Klicken oder ziehen Sie Dateien in diesen Bereich, um sie hochzuladen.</p>
            <p>Sie können bis zu 3 Dateien hochladen.</p>
          </div>
        </div>
        <button type='submit' className='mka__form-button'>SENDEN</button>
    </div>
    </div>
    </div>
  );
}

export default CarPurchase;
import "./CarPurchase.css"
import ContactForm from "./ContactForm"
import DropzoneElement from "../Dropzone/Dropzone"

const CarPurchase = () => {
  return (
    <div className="mka__wrapper-purchase">
      <div className="mka__container">
        <div className="mka__content-purchase">
          <p>
            Wir kaufen laufend Gebrauchtwagen unterschiedlicher Marken und
            Fahrzeugtypen. Wenn Sie Ihr altes Fahrzeug verkaufen möchten, würden
            wir es Ihnen gerne abkaufen. Wir garantieren eine rasche und seriöse
            Abwicklung sowie einen fairen und marktüblichen Preis. Die Bezahlung
            erfolgt direkt vor Ort und in bar. Die behördliche Abmeldung
            übernehmen wir gerne für Sie.
          </p>
          <h2>VERMITTLUNG / KOMMISSIONSVERKAUF</h2>
          <p>
            Nutzen Sie unsere Fachkompetenz, unsere Branchenkenntnisse und unser
            Netzwerk sowie unseren Kundenkreis um Ihr Auto bestmöglich zu
            verkaufen! Wir übernehmen dabei gerne die komplette Abwicklung für
            Sie.
          </p>
          <p>Ihre Vorteile auf einen Blick:</p>
          <ul>
            <li>Das Auto wird vor dem Verkauf professionell aufbereitet</li>
            <li>
              Inserieren auf allen gängigen Plattformen, einschließlich Fotos
            </li>
            <li>Verkaufsgespräche und Vertragsgestaltung</li>
            <li>
              Garantie und Finanzierung können mit angeboten werden, keine
              zusätzlichen Kosten für den Verkäufer
            </li>
          </ul>
          <div>
          <ContactForm/>
          <div>
            <p>Fahrzeugbilder</p>
          <DropzoneElement/>
          </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default CarPurchase

import './Copyright.css';
import React from 'react';

const Copyright = () => {
  return (
    <div className='mka__wrapper-copyright'>
      <div className='mka__container'>
        <div className='mka__content-copyright'>
          <p>
            <strong>
              Erklärung zur Informationspflicht
              <br />
              (Datenschutzerklärung)
            </strong>
            <br />
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
            Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
            gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
            Datenschutzinformationen informieren wir Sie über die wichtigsten
            Aspekte der Datenverarbeitung im Rahmen unserer Website.
            <br />
            <strong>Kontakt mit uns</strong>
            <br />
            Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit
            uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der
            Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns
            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
            weiter.
            <br />
            <strong>Cookies</strong>
            <br />
            Unsere Website verwendet so genannte sessionbezogene Cookies. Dabei
            handelt es sich um kleine Textdateien, die mit Hilfe des Browsers
            temporär auf Ihrem Endgerät abgelegt werden. Sie richten keinen
            Schaden an.
            <br />
            Wir nutzen diese sessionbezogenen Cookies dazu, unser Angebot
            nutzerfreundlich für Sie zu gestalten. Die Cookies werden nach dem
            Verlassen unserer Webseite automatisch gelöscht.
            <br />
            Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so
            einrichten, dass er Sie über das Setzen von Cookies informiert und
            Sie dies nur im Einzelfall erlauben.
            <br />
            Bei der Deaktivierung von Cookies kann die Funktionalität unserer
            Website eingeschränkt sein.
            <br />
            <strong>Ihre Rechte</strong>
            <br />
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
            Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
            Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
            gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen
            Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich
            bei der Aufsichtsbehörde beschweren. In Österreich ist dies die
            Datenschutzbehörde. (Wickenburggasse 8 – 10, 1080 Wien, E-Mail:{' '}
            <a
              href='https://playfield-media.codebasehq.com/redirect?dsb@dsb.gv.at'
              target='_blank'
              rel='noreferrer'
            >
              dsb@dsb.gv.at
            </a>
            ).
          </p>
          <h3 className='mka__content-copyright-headline'>
            Sie erreichen uns unter folgenden Kontaktdaten:
          </h3>
          <div className='mka__content-information'>
            <h4>FIRMENBEZEICHNUNG</h4>
            <p>Milan Kuzmanovic KG</p>
            <h4>FIRMENBUCHNUMMER</h4>
            <p>FN207458k</p>
            <h4>STEUERNUMMER</h4>
            <p>ATU51942402</p>
            <h4>GESCHÄFTSFÜHRER / CEO</h4>
            <p>Milan Kuzmanovic</p>
            <h4>ADRESSE</h4>
            <p>Im Trenkenschuh 15-17 2100 Korneuburg Österreich</p>
            <h4>KONTAKT</h4>
            <p>T: +43 680 3149332</p>
            <p>
              E:
              <a href='mailto:office@mkautomobile.at'>
                {' '}
                office@mkautomobile.at
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

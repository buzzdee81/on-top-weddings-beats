
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  useEffect(() => {
    // Set page title
    document.title = "Impressum | On Top - Hochzeitsband & Eventband";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            On Top Band/ Dochrinna Geier<br />
            Alexander Huber<br />
            Altenstadt 9<br />
            85276 Pfaffenhofen an der Ilm
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
          <p>
           E-Mail: info@ontop-band.de
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Alexander Huber
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" className="text-brand-purple hover:text-brand-pink transition-colors">https://ec.europa.eu/consumers/odr/</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der 
            jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
            Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
            der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, 
            nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Google Analytics</h2>
          <p>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. ("Google"). 
            Google Analytics verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. 
            Die durch den Cookie erzeugten Informationen über Ihre Benutzung diese Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. 
            Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, 
            um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. 
            Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.
          </p>
          
          <p>
            Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung bringen. 
            Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; 
            wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll 
            umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten 
            durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
          </p>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Impressum;

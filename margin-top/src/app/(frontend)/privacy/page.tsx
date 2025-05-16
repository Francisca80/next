export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
    <section className="w-11/12 max-w-5xl mx-auto py-12 md:py-16 mt-8 md:mt-16">
      <div className="inline-block mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
          Privacybeleid
        </h1>
        <hr className="border-gray-600 mb-4 border-t-2" />
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <h2 className="text-2xl font-semibold mb-4">Inleiding</h2>
        <p className="mb-4">
          Margin Top respecteert uw privacy en zorgt ervoor dat de persoonlijke informatie die u ons verschaft vertrouwelijk blijft. 
          Dit privacybeleid beschrijft hoe wij omgaan met uw persoonlijke gegevens en welke rechten u heeft.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Wie zijn wij?</h2>
        <p className="mb-4">
          Margin Top is een digitaal bureau gespecialiseerd in webontwikkeling, branding en UX/UI design. 
          Wij zijn verantwoordelijk voor de verwerking van uw persoonlijke gegevens zoals beschreven in dit privacybeleid.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Welke gegevens verzamelen wij?</h2>
        <p className="mb-4">
          Wij verzamelen en verwerken de volgende gegevens:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
          <li>Bedrijfsgegevens (bedrijfsnaam, functie)</li>
          <li>Gegevens die u ons verstrekt via contactformulieren</li>
          <li>Gegevens over uw gebruik van onze website (via cookies)</li>
          <li>Communicatiegegevens (e-mails, berichten)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Hoe gebruiken wij uw gegevens?</h2>
        <p className="mb-4">
          Wij gebruiken uw gegevens voor de volgende doeleinden:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Het verwerken van uw aanvragen en het leveren van onze diensten</li>
          <li>Het communiceren met u over onze diensten</li>
          <li>Het verbeteren van onze website en diensten</li>
          <li>Het versturen van nieuwsbrieven (alleen met uw toestemming)</li>
          <li>Het voldoen aan onze wettelijke verplichtingen</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Wettelijke grondslag</h2>
        <p className="mb-4">
          Wij verwerken uw gegevens op basis van de volgende wettelijke gronden:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Uitvoering van een overeenkomst</li>
          <li>Wettelijke verplichting</li>
          <li>Gerechtvaardigd belang</li>
          <li>Toestemming (indien van toepassing)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Bewaartermijn</h2>
        <p className="mb-4">
          Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld. 
          De bewaartermijn hangt af van het doel van de gegevensverwerking en kan variëren van enkele maanden tot enkele jaren.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Delen van gegevens</h2>
        <p className="mb-4">
          Wij delen uw gegevens alleen met derden indien dit noodzakelijk is voor de uitvoering van onze diensten of indien wij hiertoe wettelijk verplicht zijn. 
          Wij verkopen nooit uw gegevens aan derden.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Uw rechten</h2>
        <p className="mb-4">
          U heeft de volgende rechten met betrekking tot uw persoonlijke gegevens:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Recht op inzage</li>
          <li>Recht op correctie of verwijdering</li>
          <li>Recht op beperking van de verwerking</li>
          <li>Recht op dataportabiliteit</li>
          <li>Recht om bezwaar te maken</li>
          <li>Recht om toestemming in te trekken</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="mb-4">
          Wij gebruiken cookies en vergelijkbare technologieën om uw ervaring op onze website te verbeteren. 
          Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt.
        </p>

        <h3 className="text-xl font-semibold mb-2">Cookie Categorieën</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Essentiële/Functionele Cookies</h4>
            <p className="text-gray-600">
              Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld. 
              Ze worden meestal alleen ingesteld als reactie op acties die u uitvoert, zoals het instellen van uw privacyvoorkeuren, 
              inloggen of het invullen van formulieren.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Analytische Cookies</h4>
            <p className="text-gray-600">
              Deze cookies stellen ons in staat om bezoeken en verkeersbronnen te tellen, zodat we de prestaties van onze site kunnen meten en verbeteren. 
              Ze helpen ons te begrijpen welke pagina&apos;s het meest en het minst populair zijn en hoe bezoekers zich op de site bewegen.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Marketing Cookies</h4>
            <p className="text-gray-600">
              Deze cookies kunnen via onze site worden ingesteld door onze advertentiepartners. 
              Ze kunnen worden gebruikt door deze bedrijven om een profiel van uw interesses op te bouwen en u relevante advertenties op andere sites te tonen.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Personaliseringscookies</h4>
            <p className="text-gray-600">
              Deze cookies stellen de website in staat om verbeterde functionaliteit en personalisatie te bieden. 
              Ze kunnen door ons of door externe aanbieders worden ingesteld wier services wij aan onze pagina&apos;s hebben toegevoegd.
            </p>
          </div>
        </div>

        <p className="mt-4">
          U kunt uw cookievoorkeuren op elk moment aanpassen door op de link Cookie-instellingen in de footer te klikken.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">Beveiliging</h2>
        <p className="mb-4">
          Wij nemen de bescherming van uw gegevens serieus en nemen passende maatregelen om misbruik, verlies, 
          onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Wijzigingen in dit privacybeleid</h2>
        <p className="mb-4">
          Wij behouden het recht voor om dit privacybeleid aan te passen. Wijzigingen zullen op deze pagina worden gepubliceerd. 
          Bij belangrijke wijzigingen zullen wij u hierover informeren via e-mail of een melding op onze website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">
          Heeft u vragen over dit privacybeleid of over hoe wij omgaan met uw gegevens? Neem dan contact met ons op via:
        </p>
        <p className="mb-4">
          Margin-Top<br />
          E-mail: francisca@margin-top.com<br />
          Telefoon: 0653894771<br />
          Adres: Bergfluiter 7, 3435AT Nieuwegein
        </p>
      </div>
    </section>
    </div>
  );
} 
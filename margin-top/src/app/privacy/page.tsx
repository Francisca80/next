export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacybeleid</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookiebeleid</h2>
          <p className="mb-4">
            Wij gebruiken cookies om uw ervaring op onze website te verbeteren. 
            Deze cookies vallen in de volgende categorieën:
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Noodzakelijke cookies</h3>
          <p className="mb-4">
            Deze cookies zijn essentieel voor het functioneren van de website. 
            Ze onthouden bijvoorbeeld uw cookie-voorkeuren.
          </p>

          <h3 className="text-xl font-semibold mb-2">Analytische cookies</h3>
          <p className="mb-4">
            We gebruiken Google Analytics om te begrijpen hoe bezoekers onze website gebruiken. 
            Deze informatie helpt ons de website te verbeteren.
          </p>
        </section>

        {/* Add more sections about data collection, user rights, etc. */}
      </div>
    </div>
  );
} 
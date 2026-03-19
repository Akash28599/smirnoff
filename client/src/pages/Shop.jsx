import assets from '../assets';

export default function Shop() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
      <div className="text-center mb-12">
        <p className="section-label">GET YOUR CHILL</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3">
          Shop <span className="text-smirnoff-red">Smirnoff Ice</span>
        </h1>
        <p className="text-base text-gray-500 max-w-xl mx-auto">
          Get your bottles delivered. Choose your preferred store.
        </p>
      </div>
      <div className="text-center mb-12">
        <img
          src={assets.canBg}
          alt="Smirnoff Ice Collection"
          className="max-w-xl w-4/5 mx-auto"
          style={{ mixBlendMode: 'darken', filter: 'drop-shadow(0 0.9375rem 2.1875rem rgba(0,0,0,0.1))' }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div className="shop-card">
          <div className="shop-card-logo">🛒</div>
          <h3>Jumia</h3>
          <p>Nigeria's #1 online marketplace. Fast delivery nationwide.</p>
          <a href="https://www.jumia.com.ng" target="_blank" rel="noopener noreferrer" className="btn btn-sm">
            SHOP ON JUMIA
          </a>
        </div>
        <div className="shop-card">
          <div className="shop-card-logo">🏬</div>
          <h3>Konga</h3>
          <p>Shop premium beverages with express delivery options.</p>
          <a href="https://www.konga.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm">
            SHOP ON KONGA
          </a>
        </div>
      </div>
    </section>
  );
}

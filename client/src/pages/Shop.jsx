import assets from '../assets';

export default function Shop() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in pt-28 sm:pt-32 pb-20 min-h-screen">
      <div className="text-center mb-12">
        <p className="section-label uppercase tracking-widest text-sm font-bold text-gray-400">SMIRNOFF ICE SHOP</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 uppercase font-black">
          Shop <span className="text-smirnoff-red">Smirnoff Ice</span>
        </h1>
        <p className="text-base text-gray-500 max-w-xl mx-auto">
          Get your bottles delivered. Choose your preferred store.
        </p>
      </div>

      <div className="text-center mb-16">
        <img
          src={assets.canBg}
          alt="Smirnoff Ice"
          className="max-w-sm mx-auto animate-float"
          style={{ mixBlendMode: 'multiply', filter: 'drop-shadow(0 0.9375rem 1.875rem rgba(0,0,0,0.1))' }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div className="shop-card">
          <div className="text-4xl mb-4">🛒</div>
          <h3 className="font-bold text-xl mb-2">Jumia</h3>
          <p className="text-sm text-gray-400 mb-6">Nigeria's #1 online marketplace. Fast delivery nationwide.</p>
          <a href="https://www.jumia.com.ng" target="_blank" rel="noopener noreferrer" className="btn btn-sm">
            SHOP ON JUMIA
          </a>
        </div>
        <div className="shop-card">
          <div className="text-4xl mb-4">🏬</div>
          <h3 className="font-bold text-xl mb-2">Konga</h3>
          <p className="text-sm text-gray-400 mb-6">Shop premium beverages with express delivery options.</p>
          <a href="https://www.konga.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm">
            SHOP ON KONGA
          </a>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { WomensDayLoader } from './components/WomensDayLoader';
import { WomensDayBloom } from './components/WomensDayBloom';
//KOMENT
export default function App() {
  const [loading, setLoading] = useState(true);
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <>
      {loading && <WomensDayLoader onComplete={() => setLoading(false)} />}
      {!loading && !showSurprise && (
        <div className="wd-flow-stage">
          <WomensDayBloom />
          <button className="wd-surprise-btn" onClick={() => setShowSurprise(true)} type="button">
            Sovg'ani Ochish
          </button>
        </div>
      )}
      {!loading && showSurprise && (
        <section className="wd-surprise-view" aria-label="Womens day surprise content">
          <button className="wd-back-btn" onClick={() => setShowSurprise(false)} type="button">
            Ortga
          </button>
          <iframe
            className="wd-surprise-frame"
            src="/womens-day-surprise/love.html"
            title="Womens Day Surprise"
          />
        </section>
      )}
    </>
  );
}

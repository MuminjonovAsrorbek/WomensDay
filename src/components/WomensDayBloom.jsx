import { motion } from 'framer-motion';

export function WomensDayBloom() {
  return (
    <section className="wd-bloom-stage" aria-label="8 Mart bezakli animatsiya">
      <div className="silk-layer silk-1" />
      <div className="silk-layer silk-2" />

      <motion.div
        className="wd-bloom-card"
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          className="wd-bloom-title"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.25 }}
        >
          8 MART
        </motion.h1>

        <motion.p
          className="wd-bloom-subtitle"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Hurmatli va aziz ayollar!
        </motion.p>

        <motion.div
          className="wd-bloom-divider"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="wd-bloom-quote"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <p>
            Sizlarni 8-mart — Xalqaro xotin-qizlar kuni bilan chin qalbimdan tabriklayman. Sizlar
            hayotimizga mehr, go‘zallik va nur olib kiradigan eng qadrli insonlarsiz.
          </p>
          <p>
            Onalarimizning duosi, opa-singillarimizning mehribonligi va ayollarimizning sabr-toqati
            har bir oilaning mustahkam tayanchidir.
          </p>
          <p>
            Sizlarga mustahkam sog‘lik, cheksiz baxt, xonadonlaringizga fayzu baraka tilayman. Har
            doim qadrlanib, e’zozda bo‘lib, hayotingiz quvonch va muvaffaqiyatlarga to‘lib-toshaversin.
          </p>
          <p>Bayramingiz muborak bo‘lsin!</p>
          <p>
            Hurmat bilan,
            <br />
            <span className="wd-bloom-sign">Mr Asrorbek</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

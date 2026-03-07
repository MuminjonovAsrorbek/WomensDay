import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const roseSides = {
  left: [
    { top: '16%', offset: -120, delay: 0.2 },
    { top: '33%', offset: -150, delay: 0.35 },
    { top: '54%', offset: -110, delay: 0.5 },
    { top: '73%', offset: -135, delay: 0.65 }
  ],
  right: [
    { top: '20%', offset: 120, delay: 0.25 },
    { top: '40%', offset: 145, delay: 0.4 },
    { top: '60%', offset: 110, delay: 0.55 },
    { top: '78%', offset: 130, delay: 0.7 }
  ]
};

const petalColors = ['#f06292', '#ec407a', '#c0003c', '#d4a373', '#ffd166'];

export function WomensDayLoader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  const petals = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        size: 6 + (i % 5) * 2,
        duration: 5 + (i % 6) * 0.8,
        delay: (i % 10) * 0.22,
        drift: (i % 2 === 0 ? 1 : -1) * (8 + (i % 4) * 3),
        color: petalColors[i % petalColors.length]
      })),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => onComplete?.()}>
      {isVisible && (
        <motion.section
          className="wd-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          aria-label="8 Mart yuklanish sahnasi"
        >
          <div className="silk-layer silk-1" />
          <div className="silk-layer silk-2" />

          <div className="petal-field" aria-hidden>
            {petals.map((petal) => (
              <span
                key={petal.id}
                className="petal"
                style={{
                  left: petal.left,
                  width: `${petal.size}px`,
                  height: `${petal.size * 1.4}px`,
                  animationDuration: `${petal.duration}s`,
                  animationDelay: `${petal.delay}s`,
                  '--drift': `${petal.drift}px`,
                  '--petal-color': petal.color
                }}
              />
            ))}
          </div>

          <div className="rose-side rose-left" aria-hidden>
            {roseSides.left.map((rose, i) => (
              <motion.span
                key={`l-${i}`}
                className="rose"
                style={{ top: rose.top }}
                initial={{ x: rose.offset, opacity: 0, scale: 0.35, rotate: -30 }}
                animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 170, damping: 14, delay: rose.delay }}
              >
                🌹
              </motion.span>
            ))}
          </div>

          <div className="rose-side rose-right" aria-hidden>
            {roseSides.right.map((rose, i) => (
              <motion.span
                key={`r-${i}`}
                className="rose"
                style={{ top: rose.top }}
                initial={{ x: rose.offset, opacity: 0, scale: 0.35, rotate: 30 }}
                animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 170, damping: 14, delay: rose.delay }}
              >
                🌹
              </motion.span>
            ))}
          </div>

          <div className="center-content">
            <motion.h1
              className="hero-eight"
              initial={{ scale: 0.25, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 180, damping: 13, delay: 0.25 }}
            >
              8
            </motion.h1>

            <motion.p
              className="mart-text"
              initial={{ opacity: 0, letterSpacing: '0.08em' }}
              animate={{ opacity: 1, letterSpacing: '0.55em' }}
              transition={{ duration: 0.7, delay: 0.72, ease: 'easeOut' }}
            >
              MART
            </motion.p>

            <motion.div
              className="gradient-divider"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Xalqaro xotin-qizlar kuni
            </motion.p>

            <motion.p
              className="quote"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.52 }}
            >
              "Ayol bor joyda mehr, go'zallik va hayot bor."
            </motion.p>
          </div>

          <div className="loading-dots" aria-hidden>
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="dot"
                animate={{ y: [0, -10, 0], opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.14 }}
              />
            ))}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

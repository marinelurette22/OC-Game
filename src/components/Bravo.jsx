import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import Layout from './Layout'

const RED = '#C8102E'

const CADEAUX = [
  { option: 'Éventail 🌬️',           style: { backgroundColor: '#C8102E', textColor: '#fff' } },
  { option: 'Chamoisine 🧤',          style: { backgroundColor: '#111',    textColor: '#fff' } },
  { option: "Bouchons d'oreille 🔇",  style: { backgroundColor: '#C8102E', textColor: '#fff' } },
  { option: 'Calendrier 📅',          style: { backgroundColor: '#111',    textColor: '#fff' } },
  { option: 'Jeu de cartes 🃏',       style: { backgroundColor: '#C8102E', textColor: '#fff' } },
  { option: 'Tote bag 👜',            style: { backgroundColor: '#111',    textColor: '#fff' } },
  { option: 'Spray 22ml 🧴',          style: { backgroundColor: '#C8102E', textColor: '#fff' } },
  { option: 'Lunettes solaires 🕶️',   style: { backgroundColor: '#111',    textColor: '#fff' } },
]

// Éventail 17%, Chamoisine 20%, Bouchons 17%, Calendrier 14%, Jeu de cartes 14%, Tote bag 13%, Spray 3%, Lunettes solaires 2%
const PROBABILITES = [17, 20, 17, 14, 14, 13, 3, 2]

function tirerAuSort() {
  const total = PROBABILITES.reduce((a, b) => a + b, 0)
  let r = Math.random() * total
  for (let i = 0; i < PROBABILITES.length; i++) {
    r -= PROBABILITES[i]
    if (r <= 0) return i
  }
  return PROBABILITES.length - 1
}

export default function Bravo() {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeIndex, setPrizeIndex] = useState(0)
  const [cadeau, setCadeau] = useState(null)
  const [aSpinné, setASpinné] = useState(false)

  const tourner = () => {
    if (mustSpin || aSpinné) return
    const index = tirerAuSort()
    setPrizeIndex(index)
    setMustSpin(true)
  }

  const onFinish = () => {
    setMustSpin(false)
    setASpinné(true)
    setCadeau(CADEAUX[prizeIndex].option)
  }

  return (
    <Layout>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', padding: '20px 0',
      }}>
        <div style={{ fontSize: 56, marginBottom: 12, lineHeight: 1 }}>🎉</div>

        <h1 style={{ fontSize: 28, fontWeight: 900, color: '#111', marginBottom: 6, letterSpacing: 2 }}>
          BRAVO !
        </h1>
        <div style={{ width: 50, height: 4, background: RED, borderRadius: 2, marginBottom: 16 }} />

        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 28, maxWidth: 300 }}>
          Tu as relevé le défi OC'nigme ! Tente ta chance pour remporter ton cadeau 🎁
        </p>

        {/* Roue */}
        <div style={{ marginBottom: 24 }}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeIndex}
            data={CADEAUX}
            onStopSpinning={onFinish}
            backgroundColors={['#C8102E', '#111']}
            textColors={['#ffffff']}
            outerBorderColor="#333"
            outerBorderWidth={4}
            innerBorderColor="#222"
            innerBorderWidth={2}
            radiusLineColor="#333"
            radiusLineWidth={2}
            fontSize={13}
            spinDuration={0.8}
            pointerProps={{ style: { filter: 'drop-shadow(0 0 4px #C8102E)' } }}
          />
        </div>

        {/* Bouton tourner */}
        {!aSpinné && (
          <button onClick={tourner} disabled={mustSpin} style={{
            padding: '16px 40px',
            background: mustSpin ? '#ddd' : RED,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: 1,
            marginBottom: 24,
            transition: 'all 0.2s',
          }}>
            {mustSpin ? 'La roue tourne…' : '🎰 Tenter ma chance !'}
          </button>
        )}

        {/* Résultat */}
        {cadeau && (
          <div style={{
            background: '#f5f5f5',
            border: `2px solid ${RED}`,
            borderRadius: 20,
            padding: '24px',
            width: '100%',
            marginBottom: 20,
          }}>
            <p style={{ fontSize: 13, color: RED, fontWeight: 700, letterSpacing: 2, marginBottom: 10, textTransform: 'uppercase' }}>
              🎁 Tu as gagné !
            </p>
            <p style={{ fontSize: 24, fontWeight: 900, color: '#111', marginBottom: 16 }}>
              {cadeau}
            </p>
            <div style={{
              background: '#fff', borderRadius: 12, padding: '14px',
            }}>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>
                Montre cet écran à ton opticien pour récupérer ton cadeau 😊
              </p>
              <p style={{ fontSize: 12, color: '#444', marginTop: 8 }}>
                * Dans la limite des stocks disponibles
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

import Layout from './Layout'

const RED = '#C8102E'

export default function Bravo() {
  return (
    <Layout>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', minHeight: '85vh', textAlign: 'center',
        padding: '20px 0',
      }}>
        {/* Confettis emoji */}
        <div style={{ fontSize: 72, marginBottom: 16, lineHeight: 1 }}>🎉</div>

        <h1 style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 8, letterSpacing: 2 }}>
          BRAVO !
        </h1>

        <div style={{
          width: 60, height: 4, background: RED, borderRadius: 2, marginBottom: 24,
        }} />

        <p style={{ fontSize: 17, color: '#ccc', lineHeight: 1.7, marginBottom: 32, maxWidth: 320 }}>
          Tu as relevé le défi OC Game ! Tu as prouvé que tu es un vrai expert de l'optique 🕶️
        </p>

        {/* Prix */}
        <div style={{
          background: '#111',
          border: `2px solid ${RED}`,
          borderRadius: 20,
          padding: '28px 24px',
          width: '100%',
          marginBottom: 28,
        }}>
          <p style={{ fontSize: 13, color: RED, fontWeight: 700, letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' }}>
            🎁 Ta récompense
          </p>
          <p style={{ fontSize: 15, color: '#fff', lineHeight: 1.7, marginBottom: 16 }}>
            Récupère ton cadeau auprès de ton opticien :
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { emoji: '🌬️', label: 'Un éventail' },
              { emoji: '📅', label: 'Un calendrier' },
              { emoji: '🃏', label: 'Un jeu de cartes' },
            ].map((p, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: '#0a0a0a', borderRadius: 10, padding: '12px 16px',
              }}>
                <span style={{ fontSize: 24 }}>{p.emoji}</span>
                <span style={{ fontSize: 15, color: '#ddd' }}>{p.label}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: '#555', marginTop: 16 }}>
            * Dans la limite des stocks disponibles
          </p>
        </div>

        {/* CTA */}
        <div style={{
          background: '#111', border: '1px solid #222', borderRadius: 16, padding: '18px',
          width: '100%',
        }}>
          <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>
            Montre cet écran à ton opticien pour récupérer ta récompense 😊
          </p>
        </div>
      </div>
    </Layout>
  )
}

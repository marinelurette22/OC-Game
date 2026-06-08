import Layout from './Layout'

const RED = '#C8102E'

export default function ComingSoon({ onRetour }) {
  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
        <div style={{ fontSize: 72, marginBottom: 24 }}>🔒</div>
        <h2 style={{ fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 12, letterSpacing: 2 }}>
          COMING SOON
        </h2>
        <p style={{ fontSize: 16, color: '#888', lineHeight: 1.6, marginBottom: 12 }}>
          Le niveau expert est en cours de préparation.
        </p>
        <p style={{ fontSize: 14, color: '#555', marginBottom: 40 }}>
          Revenez nous voir bientôt… 👀
        </p>
        <button onClick={onRetour} style={{
          padding: '14px 32px',
          background: 'transparent',
          border: `2px solid ${RED}`,
          borderRadius: 10,
          color: RED,
          fontSize: 15,
          fontWeight: 700,
        }}>
          ← Retour
        </button>
      </div>
    </Layout>
  )
}

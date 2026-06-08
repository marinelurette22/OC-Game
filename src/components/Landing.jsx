const RED = '#C8102E'

export default function Landing({ onStart }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      maxWidth: 480,
      margin: '0 auto',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
        <div style={{
          width: 52, height: 52,
          background: RED,
          borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 20, color: '#fff', letterSpacing: 1,
        }}>OC</div>
        <span style={{ fontWeight: 900, fontSize: 28, color: '#fff', letterSpacing: 3 }}>GAME</span>
      </div>

      {/* Icône lunettes */}
      <div style={{ fontSize: 64, marginBottom: 32 }}>🕹️</div>

      {/* Accroche */}
      <div style={{
        background: '#111',
        border: `2px solid ${RED}`,
        borderRadius: 16,
        padding: '28px 24px',
        textAlign: 'center',
        marginBottom: 40,
      }}>
        <p style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
          Tu t'ennuies ?
        </p>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: '#fff', lineHeight: 1.3, marginBottom: 12 }}>
          Amateur de défi ?
        </h1>
        <p style={{ fontSize: 16, color: '#ccc', lineHeight: 1.6, marginBottom: 20 }}>
          Oseras-tu relever le nôtre ?
        </p>
        <div style={{
          width: '100%',
          height: 2,
          background: `linear-gradient(to right, transparent, ${RED}, transparent)`,
          marginBottom: 20,
        }} />
        <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.6 }}>
          5 énigmes autour de l'optique t'attendent. Sauras-tu toutes les résoudre ?
        </p>
      </div>

      <button
        onClick={onStart}
        style={{
          width: '100%',
          padding: '18px',
          background: RED,
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: 1,
          textTransform: 'uppercase',
        }}>
        Relever le défi →
      </button>
    </div>
  )
}

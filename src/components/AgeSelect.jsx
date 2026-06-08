const RED = '#C8102E'

export default function AgeSelect({ onFacile, onDifficile }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      maxWidth: 480,
      margin: '0 auto',
      width: '100%',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 48 }}>
        <img src="/logo-oc.png" alt="Optical Center" style={{ height: 52, width: 'auto' }} />
        <span style={{ fontWeight: 900, fontSize: 24, color: '#111', letterSpacing: 3 }}>'NIGME</span>
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111', marginBottom: 8, textAlign: 'center' }}>
        Choisis ton niveau
      </h2>
      <p style={{ fontSize: 14, color: '#888', marginBottom: 36, textAlign: 'center' }}>
        Quel âge as-tu ?
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
        {/* Moins de 16 ans */}
        <button onClick={onFacile} style={{
          width: '100%',
          padding: '24px',
          background: '#f5f5f5',
          border: `2px solid ${RED}`,
          borderRadius: 16,
          color: '#111',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 28, marginBottom: 6 }}>🟢</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Moins de 16 ans</div>
            <div style={{ fontSize: 13, color: '#888' }}>Niveau accessible</div>
          </div>
          <span style={{ fontSize: 24, color: RED }}>→</span>
        </button>

        {/* Plus de 16 ans */}
        <button onClick={onDifficile} style={{
          width: '100%',
          padding: '24px',
          background: '#f5f5f5',
          border: '2px solid #ddd',
          borderRadius: 16,
          color: '#111',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 28, marginBottom: 6 }}>🔴</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>16 ans et plus</div>
            <div style={{ fontSize: 13, color: '#888' }}>Niveau expert</div>
          </div>
          <span style={{ fontSize: 24, color: '#555' }}>→</span>
        </button>
      </div>
    </div>
  )
}

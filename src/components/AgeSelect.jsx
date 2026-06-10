const RED = '#C8102E'

export default function AgeSelect({ onFacile, onDifficile }) {
  return (
    <div style={{
      height: '100vh',
      overflow: 'hidden',
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

      <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111', marginBottom: 36, textAlign: 'center' }}>
        Choisis ton niveau
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
        {/* Facile */}
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
            <div style={{
              display: 'inline-block',
              background: RED, color: '#fff',
              fontSize: 11, fontWeight: 800, letterSpacing: 2,
              padding: '3px 10px', borderRadius: 20,
              marginBottom: 10, textTransform: 'uppercase',
            }}>Facile</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Tu découvres l'optique</div>
            <div style={{ fontSize: 13, color: '#888' }}>Questions accessibles à tous</div>
          </div>
          <span style={{ fontSize: 24, color: RED }}>→</span>
        </button>

        {/* Difficile */}
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
            <div style={{
              display: 'inline-block',
              background: '#111', color: '#fff',
              fontSize: 11, fontWeight: 800, letterSpacing: 2,
              padding: '3px 10px', borderRadius: 20,
              marginBottom: 10, textTransform: 'uppercase',
            }}>Difficile</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Tu t'y connais un peu ?</div>
            <div style={{ fontSize: 13, color: '#888' }}>Prouve que tu maîtrises l'optique !</div>
          </div>
          <span style={{ fontSize: 24, color: '#555' }}>→</span>
        </button>
      </div>
    </div>
  )
}

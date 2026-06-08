const RED = '#C8102E'

export default function Layout({ children, etape = null, total = 5 }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 0 40px 0',
      maxWidth: 480,
      margin: '0 auto',
      width: '100%',
    }}>
      {/* Header */}
      <div style={{
        width: '100%',
        background: '#fff',
        borderBottom: `3px solid ${RED}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo OC */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 36, height: 36,
            background: RED,
            borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: 14, color: '#fff', letterSpacing: 1,
          }}>OC</div>
          <span style={{ fontWeight: 800, fontSize: 16, color: '#111', letterSpacing: 2 }}>'NIGME</span>
        </div>

        {/* Progress */}
        {etape && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#888' }}>{etape}/{total}</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: total }).map((_, i) => (
                <div key={i} style={{
                  width: 20, height: 4, borderRadius: 2,
                  background: i < etape ? RED : '#ddd',
                  transition: 'background 0.3s',
                }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, width: '100%', padding: '24px 20px 0' }}>
        {children}
      </div>
    </div>
  )
}

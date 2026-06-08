import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'
const BONNE_REPONSE = 'S02'

export default function Etape6({ onSuivant }) {
  const [reponse, setReponse] = useState('')
  const [erreur, setErreur] = useState(false)
  const [shake, setShake] = useState(false)

  const valider = () => {
    if (reponse.trim().toUpperCase() === BONNE_REPONSE) {
      onSuivant()
    } else {
      setErreur(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <Layout etape={6} total={6}>
      {/* Badge étape */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>6</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 6 · L'épreuve finale</span>
      </div>

      {/* Mise en scène */}
      <div style={{
        background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16,
        padding: '20px', marginBottom: 24,
      }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          DERNIÈRE ÉPREUVE
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Félicitations, tu as tout trouvé ! Mais avant de récupérer ta récompense, une dernière mission t'attend…
        </p>
      </div>

      {/* Mission */}
      <div style={{
        background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16,
        padding: '20px', marginBottom: 24,
      }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 12, letterSpacing: 2, textTransform: 'uppercase' }}>
          Mission 6
        </p>
        <p style={{ fontSize: 15, color: '#111', fontWeight: 700, lineHeight: 1.7, marginBottom: 16 }}>
          Prends le verre de démonstration <span style={{ color: RED }}>Transitions Saphir</span> et passe-le sous la lampe UV.
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Un code secret apparaît… Entre-le ci-dessous pour débloquer ta récompense !
        </p>
      </div>

      {/* Input */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={reponse}
          onChange={e => { setReponse(e.target.value); setErreur(false) }}
          onKeyDown={e => e.key === 'Enter' && valider()}
          placeholder="Code secret…"
          style={{
            width: '100%',
            padding: '16px',
            background: '#fff',
            border: `2px solid ${erreur ? RED : '#ddd'}`,
            borderRadius: 12,
            color: '#111',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            textAlign: 'center',
            outline: 'none',
            animation: shake ? 'shake 0.4s ease' : 'none',
          }}
        />
        {erreur && (
          <p style={{ color: RED, fontSize: 13, marginTop: 8, fontWeight: 600, textAlign: 'center' }}>
            Ce n'est pas le bon code… Regarde bien sous la lampe UV !
          </p>
        )}
      </div>

      <button onClick={valider} style={{
        width: '100%',
        padding: '16px',
        background: RED,
        color: '#fff',
        border: 'none',
        borderRadius: 12,
        fontSize: 16,
        fontWeight: 800,
        letterSpacing: 1,
        textTransform: 'uppercase',
      }}>
        Valider →
      </button>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(8px); }
        }
      `}</style>
    </Layout>
  )
}

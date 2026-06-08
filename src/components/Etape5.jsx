import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'
const BONNES_REPONSES = ['SAPHIR', 'SAPPHIRE', 'SAFIR']

export default function Etape5({ onSuivant }) {
  const [reponse, setReponse] = useState('')
  const [erreur, setErreur] = useState(false)
  const [shake, setShake] = useState(false)

  const valider = () => {
    if (BONNES_REPONSES.includes(reponse.trim().toUpperCase())) {
      onSuivant()
    } else {
      setErreur(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <Layout etape={5}>
      {/* Badge étape */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>5</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 5 · Dernière épreuve</span>
      </div>

      {/* Mise en scène */}
      <div style={{
        background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16,
        padding: '20px', marginBottom: 24,
      }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          👤 FABIAN — Les verres parfaits
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Fabian est facilement ébloui à la lumière, surtout en ce moment. Il a choisi les verres <strong style={{ color: '#fff' }}>Transitions</strong> de dernière génération.
        </p>
      </div>

      {/* Indices */}
      <div style={{
        background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16,
        padding: '20px', marginBottom: 20,
      }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 14, letterSpacing: 1, textTransform: 'uppercase' }}>
          🔍 Indices
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 20 }}>🔵</span>
            <p style={{ fontSize: 15, color: '#333', lineHeight: 1.6 }}>
              Fabian a choisi la couleur <strong style={{ color: '#60a5fa' }}>bleue</strong>
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 20 }}>💡</span>
            <p style={{ fontSize: 15, color: '#333', lineHeight: 1.6 }}>
              Les verres Transitions s'assombrissent à la lumière et redeviennent clairs à l'intérieur
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 20 }}>🔬</span>
            <p style={{ fontSize: 15, color: '#333', lineHeight: 1.6 }}>
              Prenez le verre de démonstration <strong style={{ color: '#60a5fa' }}>saphir</strong> et testez-le avec la lampe UV pour voir la magie opérer !
            </p>
          </div>
        </div>
      </div>

      {/* Question */}
      <div style={{
        background: `${RED}11`, border: `1px solid ${RED}44`, borderRadius: 16,
        padding: '18px', marginBottom: 20,
      }}>
        <p style={{ fontSize: 15, color: '#111', fontWeight: 700, lineHeight: 1.6 }}>
          🎯 Comment s'appelle la <span style={{ color: '#60a5fa' }}>teinte bleue</span> de ces verres Transitions ?
        </p>
      </div>

      {/* Input */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={reponse}
          onChange={e => { setReponse(e.target.value); setErreur(false) }}
          onKeyDown={e => e.key === 'Enter' && valider()}
          placeholder="Nom de la teinte…"
          style={{
            width: '100%',
            padding: '16px',
            background: '#fff',
            border: `2px solid ${erreur ? RED : '#ddd'}`,
            borderRadius: 12,
            color: '#111',
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            outline: 'none',
            animation: shake ? 'shake 0.4s ease' : 'none',
          }}
        />
        {erreur && (
          <p style={{ color: RED, fontSize: 13, marginTop: 8, fontWeight: 600 }}>
            ❌ Pas encore… Utilisez la lampe UV pour vous aider !
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

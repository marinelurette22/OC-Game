import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'
const BONNE_REPONSE = 'LEVEL'

export default function Etape1({ onSuivant }) {
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
    <Layout etape={1}>
      {/* Badge étape */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>1</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 1 · La marque mystère</span>
      </div>

      {/* Mise en scène */}
      <div style={{
        background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16,
        padding: '20px', marginBottom: 24,
      }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          👤 FABIAN — Responsable optique
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Fabian veut changer ses 2 paires de lunettes et il a besoin de votre aide pour les choisir !
        </p>
      </div>

      {/* Question */}
      <div style={{
        background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16,
        padding: '20px', marginBottom: 28,
      }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 12, letterSpacing: 1, textTransform: 'uppercase' }}>
          🔍 Mission 1
        </p>
        <p style={{ fontSize: 16, color: '#111', lineHeight: 1.7, fontWeight: 600 }}>
          Pour sa première paire, Fabian a choisi une marque présente dans notre magasin.
        </p>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginTop: 12 }}>
          Cette marque a une particularité : c'est un <span style={{ color: RED, fontWeight: 700 }}>palindrome</span> — elle se lit pareil dans les deux sens.
        </p>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginTop: 12 }}>
          À votre avis, quel est son nom ?
        </p>
      </div>

      {/* Input */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={reponse}
          onChange={e => { setReponse(e.target.value); setErreur(false) }}
          onKeyDown={e => e.key === 'Enter' && valider()}
          placeholder="Votre réponse…"
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
            ❌ Ce n'est pas ça… Cherchez encore !
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

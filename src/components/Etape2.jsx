import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'
const BONNE_REPONSE = 'filtre'

const CHOIX = [
  { id: 'antireflet', label: 'Antireflet', emoji: '🪟' },
  { id: 'durci', label: 'Verre durci', emoji: '💎' },
  { id: 'filtre', label: 'Filtre lumière bleue', emoji: '💻' },
  { id: 'polarise', label: 'Polarisé', emoji: '🕶️' },
]

export default function Etape2({ onSuivant }) {
  const [selection, setSelection] = useState(null)
  const [erreur, setErreur] = useState(false)

  const valider = () => {
    if (!selection) return
    if (selection === BONNE_REPONSE) {
      onSuivant()
    } else {
      setErreur(true)
      setTimeout(() => setErreur(false), 2000)
    }
  }

  return (
    <Layout etape={2}>
      {/* Badge étape */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>2</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 2 · Le bon verre</span>
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
          Fabian passe ses journées entre les écrans et les néons du magasin. Le soir, il rentre chez lui avec les yeux fatigués et une sensation de gêne visuelle.
        </p>
      </div>

      {/* Question */}
      <div style={{
        background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16,
        padding: '20px', marginBottom: 24,
      }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 12, letterSpacing: 1, textTransform: 'uppercase' }}>
          🔍 Mission 2
        </p>
        <p style={{ fontSize: 16, color: '#111', lineHeight: 1.7, fontWeight: 600 }}>
          Pour soulager ses yeux au quotidien, quel traitement de verres lui conseillez-vous ?
        </p>
      </div>

      {/* Choix */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
        {CHOIX.map(c => (
          <button
            key={c.id}
            onClick={() => { setSelection(c.id); setErreur(false) }}
            style={{
              width: '100%',
              padding: '16px 20px',
              background: selection === c.id ? `${RED}15` : '#f5f5f5',
              border: `2px solid ${selection === c.id ? RED : '#ddd'}`,
              borderRadius: 12,
              color: selection === c.id ? RED : '#333',
              fontSize: 16,
              fontWeight: selection === c.id ? 700 : 500,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              transition: 'all 0.15s',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {erreur && (
        <p style={{ color: RED, fontSize: 13, marginBottom: 12, fontWeight: 600, textAlign: 'center' }}>
          Ce n'est pas le bon traitement… Réfléchis encore !
        </p>
      )}

      <button onClick={valider} disabled={!selection} style={{
        width: '100%',
        padding: '16px',
        background: selection ? RED : '#ddd',
        color: selection ? '#fff' : '#999',
        border: 'none',
        borderRadius: 12,
        fontSize: 16,
        fontWeight: 800,
        letterSpacing: 1,
        textTransform: 'uppercase',
        transition: 'all 0.2s',
      }}>
        Valider →
      </button>
    </Layout>
  )
}

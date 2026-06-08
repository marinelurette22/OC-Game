import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'
const BONNE_REPONSE = 'heymeta'

const SPECS = [
  { titre: 'Caméra intégrée', desc: '12 MP · vidéo 1080p' },
  { titre: 'Haut-parleurs', desc: 'Son open-ear spatial' },
  { titre: 'Appels mains-libres', desc: 'Micro intégré' },
  { titre: 'IA intégrée', desc: 'Commande vocale' },
  { titre: 'Autonomie', desc: '4h · étui de recharge' },
  { titre: 'Résistance', desc: 'Éclaboussures IPX4' },
]

const CHOIX = [
  { id: 'heymeta', label: 'Hey Meta' },
  { id: 'okgoogle', label: 'Ok Google' },
  { id: 'dissiri', label: 'Dis Siri' },
  { id: 'alexa', label: 'Alexa' },
]

export default function Etape4({ onSuivant }) {
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
    <Layout etape={4}>
      {/* Badge étape */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>4</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 4 · Ray-Ban Meta</span>
      </div>

      {/* Titre */}
      <div style={{
        background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16,
        padding: '20px', marginBottom: 20,
      }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          👤 FABIAN — Fiche technique Ray-Ban Meta
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Parfait, Fabian a trouvé sa monture sport ! Avant de passer à la suite, découvrez ses caractéristiques…
        </p>
      </div>

      {/* Specs en mini-cartes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
        {SPECS.map((s, i) => (
          <div key={i} style={{
            background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 12,
            padding: '12px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 4 }}>{s.titre}</div>
            <div style={{ fontSize: 11, color: '#888', lineHeight: 1.4 }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Question */}
      <div style={{
        background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16,
        padding: '18px', marginBottom: 16,
      }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>Mission 4</p>
        <p style={{ fontSize: 15, color: '#111', fontWeight: 700, lineHeight: 1.6 }}>
          L'IA de ces lunettes s'active par commande vocale. Laquelle ?
        </p>
      </div>

      {/* Choix */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
        {CHOIX.map(c => (
          <button
            key={c.id}
            onClick={() => { setSelection(c.id); setErreur(false) }}
            style={{
              padding: '16px 12px',
              background: selection === c.id ? '#111' : '#f5f5f5',
              border: `2px solid ${selection === c.id ? '#111' : '#ddd'}`,
              borderRadius: 12,
              color: selection === c.id ? '#fff' : '#333',
              fontSize: 15,
              fontWeight: 700,
              textAlign: 'center',
              transition: 'all 0.15s',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {erreur && (
        <p style={{ color: RED, fontSize: 13, marginBottom: 12, fontWeight: 600, textAlign: 'center' }}>
          Ce n'est pas ça… L'IA attend une phrase précise !
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

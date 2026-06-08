import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'
const BONNES_REPONSES = ['HEY META', 'HEY META!', 'HEY META !']

const SPECS = [
  { emoji: '📹', titre: 'Caméra intégrée', desc: '12 MP · vidéo 1080p · ultra-large' },
  { emoji: '🎵', titre: 'Haut-parleurs open-ear', desc: 'Son spatial sans boucher les oreilles' },
  { emoji: '📞', titre: 'Appels mains-libres', desc: 'Micro intégré · qualité cristalline' },
  { emoji: '🤖', titre: 'IA intégrée', desc: 'Assistant Meta IA activé par commande vocale' },
  { emoji: '🔋', titre: 'Autonomie', desc: '4h en continu · étui de rechargement inclus' },
  { emoji: '🌊', titre: 'Résistance', desc: 'Résistant aux éclaboussures (IPX4)' },
]

export default function Etape4({ onSuivant }) {
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
        background: '#111', border: `1px solid ${RED}33`, borderRadius: 16,
        padding: '20px', marginBottom: 20,
      }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 6, letterSpacing: 1 }}>
          🕶️ RAY-BAN META — Fiche technique
        </p>
        <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.6 }}>
          Découvrez les caractéristiques de cette monture connectée révolutionnaire.
        </p>
      </div>

      {/* Specs */}
      <div style={{
        background: '#111', border: '1px solid #1e1e1e', borderRadius: 16,
        overflow: 'hidden', marginBottom: 24,
      }}>
        {SPECS.map((s, i) => (
          <div key={i} style={{
            display: 'flex', gap: 14, padding: '14px 18px',
            borderBottom: i < SPECS.length - 1 ? '1px solid #1e1e1e' : 'none',
            alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{s.emoji}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{s.titre}</div>
              <div style={{ fontSize: 13, color: '#888' }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Question */}
      <div style={{
        background: `${RED}11`, border: `1px solid ${RED}44`, borderRadius: 16,
        padding: '18px', marginBottom: 20,
      }}>
        <p style={{ fontSize: 15, color: '#fff', fontWeight: 700, lineHeight: 1.6 }}>
          🎯 Que doit-on dire pour activer l'<span style={{ color: RED }}>IA</span> des Ray-Ban Meta ?
        </p>
      </div>

      {/* Input */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={reponse}
          onChange={e => { setReponse(e.target.value); setErreur(false) }}
          onKeyDown={e => e.key === 'Enter' && valider()}
          placeholder="Votre commande vocale…"
          style={{
            width: '100%',
            padding: '16px',
            background: '#111',
            border: `2px solid ${erreur ? RED : '#333'}`,
            borderRadius: 12,
            color: '#fff',
            fontSize: 17,
            fontWeight: 700,
            outline: 'none',
            animation: shake ? 'shake 0.4s ease' : 'none',
          }}
        />
        {erreur && (
          <p style={{ color: RED, fontSize: 13, marginTop: 8, fontWeight: 600 }}>
            ❌ Ce n'est pas ça… L'IA attend une phrase précise !
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

import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'
const BONNES_REPONSES = ['META', 'RAYBAN META', 'RAY-BAN META', 'RAY BAN META']

export default function Etape3({ onSuivant }) {
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
    <Layout etape={3}>
      {/* Badge étape */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>3</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 3 · La monture connectée</span>
      </div>

      {/* Mise en scène */}
      <div style={{
        background: '#111', border: '1px solid #222', borderRadius: 16,
        padding: '20px', marginBottom: 24,
      }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          👤 FABIAN — Sa 2ème paire
        </p>
        <p style={{ fontSize: 15, color: '#ddd', lineHeight: 1.7 }}>
          Fabian est aussi sportif ! Il fait de la course à pied et veut pouvoir simultanément :
        </p>
      </div>

      {/* Liste des fonctionnalités */}
      <div style={{
        background: '#111', border: `1px solid ${RED}33`, borderRadius: 16,
        padding: '20px', marginBottom: 24,
      }}>
        {[
          { emoji: '🎥', text: 'Filmer ses exploits sportifs' },
          { emoji: '📸', text: 'Prendre des photos' },
          { emoji: '🎵', text: 'Écouter de la musique' },
          { emoji: '📞', text: 'Répondre au téléphone en courant' },
        ].map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 0',
            borderBottom: i < 3 ? '1px solid #1e1e1e' : 'none',
          }}>
            <span style={{ fontSize: 22 }}>{item.emoji}</span>
            <span style={{ fontSize: 15, color: '#ddd' }}>{item.text}</span>
          </div>
        ))}

        <div style={{ marginTop: 16, padding: '12px', background: '#0a0a0a', borderRadius: 10 }}>
          <p style={{ fontSize: 15, color: '#fff', fontWeight: 600, lineHeight: 1.6 }}>
            Trouvez le nom de cette marque de <span style={{ color: RED }}>lunettes connectées</span> disponible dans notre magasin.
          </p>
        </div>
      </div>

      {/* Input */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={reponse}
          onChange={e => { setReponse(e.target.value); setErreur(false) }}
          onKeyDown={e => e.key === 'Enter' && valider()}
          placeholder="Nom de la marque…"
          style={{
            width: '100%',
            padding: '16px',
            background: '#111',
            border: `2px solid ${erreur ? RED : '#333'}`,
            borderRadius: 12,
            color: '#fff',
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
            ❌ Pas tout à fait… La réponse est dans le magasin !
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

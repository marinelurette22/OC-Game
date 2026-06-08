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
        background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16,
        padding: '20px', marginBottom: 24,
      }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          👤 FABIAN — Sa 2ème paire
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Fabian est aussi un grand sportif. Passionné de course à pied, il cherche une 2ème paire en complément de ses lunettes de travail — une monture qui le suit dans toutes ses aventures.
        </p>
      </div>

      {/* Fonctionnalités */}
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
          Cette monture lui permet de…
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
          {[
            { titre: 'Filmer', desc: 'Ses exploits sportifs' },
            { titre: 'Photographier', desc: 'Sans sortir son téléphone' },
            { titre: 'Écouter', desc: 'Musique & podcasts' },
            { titre: 'Appeler', desc: 'Mains libres en courant' },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#f5f5f5',
              border: '1px solid #e0e0e0',
              borderRadius: 12,
              padding: '14px 12px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 4 }}>{item.titre}</div>
              <div style={{ fontSize: 12, color: '#888', lineHeight: 1.4 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16,
          padding: '16px 20px',
        }}>
          <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
            Elle est même dotée de l'<span style={{ color: RED, fontWeight: 600 }}>intelligence artificielle</span>. Disponible dans notre magasin, quelle est cette <span style={{ fontWeight: 700 }}>marque</span> ?
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

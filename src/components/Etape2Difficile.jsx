import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'

const INDICES = [
  { id: 1, indice: 'Maison italienne au double G',                           lettres: 5,  reponse: 'GUCCI' },
  { id: 2, indice: 'Marque britannique et son tartan iconique',               lettres: 8,  reponse: 'BURBERRY' },
  { id: 3, indice: 'Maison milanaise au triangle noir inversé',               lettres: 5,  reponse: 'PRADA' },
  { id: 4, indice: 'Fondée à Paris par un créateur emblématique des 60s',    lettres: 12, reponse: 'SAINTLAURENT' },
  { id: 5, indice: 'Marque américaine au triangle et point d\'interrogation', lettres: 5,  reponse: 'GUESS' },
  { id: 6, indice: 'Créateurs des célèbres Wayfarer et Aviator',             lettres: 6,  reponse: 'RAYBAN' },
  { id: 7, indice: 'Montures épurées pour les looks urbains et professionnels — son prénom est Hugo', lettres: 4,  reponse: 'BOSS' },
  { id: 8, indice: 'Marque française au crocodile, sponsor de Roland-Garros', lettres: 7,  reponse: 'LACOSTE' },
]

function normaliser(str) {
  return str.trim().toUpperCase().replace(/[\s\-']/g, '')
}

export default function Etape2Difficile({ onSuivant }) {
  const [reponses, setReponses] = useState({})
  const [valides, setValides] = useState({})
  const [erreurs, setErreurs] = useState({})

  const handleChange = (id, val) => {
    setReponses(prev => ({ ...prev, [id]: val }))
    if (erreurs[id]) setErreurs(prev => ({ ...prev, [id]: false }))
  }

  const handleValider = (id) => {
    const indice = INDICES.find(i => i.id === id)
    const val = normaliser(reponses[id] || '')
    if (val === indice.reponse) {
      const nouveauxValides = { ...valides, [id]: true }
      setValides(nouveauxValides)
      if (Object.keys(nouveauxValides).length === INDICES.length) {
        setTimeout(onSuivant, 800)
      }
    } else {
      setErreurs(prev => ({ ...prev, [id]: true }))
      setTimeout(() => setErreurs(prev => ({ ...prev, [id]: false })), 1200)
    }
  }

  const nbValides = Object.keys(valides).length

  return (
    <Layout etape={1}>
      {/* Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>2</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 1 · Les marques de luxe</span>
      </div>

      {/* Mise en scène */}
      <div style={{ background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16, padding: '20px', marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          MARINE — Responsable montures
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Marine cherche une nouvelle monture de prestige pour sa première paire. Elle connaît toutes les grandes maisons de lunetterie. Et toi ?
        </p>
      </div>

      {/* Mission */}
      <div style={{ background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16, padding: '20px', marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>Mission 2</p>
        <p style={{ fontSize: 15, color: '#111', fontWeight: 700, lineHeight: 1.6 }}>
          Retrouve les <span style={{ color: RED }}>8 marques de luxe</span> de notre magasin grâce aux indices.
        </p>
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          Pour les marques composées, écris sans espace. Ex : RAY-BAN → RAYBAN
        </p>
      </div>

      {/* Compteur */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 13, color: '#888' }}>Marques trouvées</span>
        <span style={{ fontSize: 15, fontWeight: 800, color: RED }}>{nbValides} / {INDICES.length}</span>
      </div>

      {/* Liste des indices */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {INDICES.map(({ id, indice, lettres, reponse }) => {
          const estValide = valides[id]
          const estErreur = erreurs[id]
          return (
            <div key={id} style={{
              background: estValide ? `${RED}11` : '#f5f5f5',
              border: `1px solid ${estValide ? RED : '#e0e0e0'}`,
              borderRadius: 12,
              padding: '14px',
              transition: 'all 0.2s',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: estValide ? 0 : 10 }}>
                <span style={{
                  minWidth: 24, height: 24,
                  background: estValide ? RED : '#ddd',
                  color: estValide ? '#fff' : '#888',
                  borderRadius: 6,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800,
                }}>{id}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, color: '#333', lineHeight: 1.5, margin: 0 }}>{indice}</p>
                  <p style={{ fontSize: 11, color: '#aaa', margin: '2px 0 0 0' }}>{lettres} lettres</p>
                </div>
                {estValide && (
                  <span style={{ fontSize: 13, fontWeight: 800, color: RED, letterSpacing: 1 }}>
                    {reponse}
                  </span>
                )}
              </div>
              {!estValide && (
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="text"
                    value={reponses[id] || ''}
                    onChange={e => handleChange(id, e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleValider(id)}
                    placeholder={`${'_'.repeat(lettres)}`}
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      background: '#fff',
                      border: `2px solid ${estErreur ? RED : '#ddd'}`,
                      borderRadius: 8,
                      fontSize: 14, fontWeight: 700,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      outline: 'none',
                      animation: estErreur ? 'shake 0.4s ease' : 'none',
                    }}
                  />
                  <button onClick={() => handleValider(id)} style={{
                    padding: '10px 16px',
                    background: RED, color: '#fff',
                    border: 'none', borderRadius: 8,
                    fontSize: 14, fontWeight: 800,
                  }}>→</button>
                </div>
              )}
              {estErreur && (
                <p style={{ color: RED, fontSize: 12, marginTop: 6, fontWeight: 600 }}>
                  Pas tout à fait…
                </p>
              )}
            </div>
          )
        })}
      </div>

      {nbValides === INDICES.length && (
        <p style={{ color: RED, fontSize: 15, fontWeight: 700, textAlign: 'center', marginTop: 20 }}>
          Bravo, toutes les marques trouvées !
        </p>
      )}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </Layout>
  )
}

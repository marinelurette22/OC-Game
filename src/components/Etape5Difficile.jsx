import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'

const CATEGORIES = ['Journalière', 'Mensuelle', 'Bimensuelle']

const AFFIRMATIONS = [
  { id: 1, texte: 'Se jettent après chaque utilisation',                      bonne: 'Journalière' },
  { id: 2, texte: 'Idéales pour le sport et les voyages',                     bonne: 'Journalière' },
  { id: 3, texte: 'À nettoyer et conserver chaque soir, durée de vie 30 jours', bonne: 'Mensuelle' },
  { id: 4, texte: 'Plus économiques sur le long terme',                        bonne: 'Mensuelle' },
  { id: 5, texte: 'Se remplacent toutes les 2 semaines',                       bonne: 'Bimensuelle' },
  { id: 6, texte: 'Bon compromis entre confort et budget',                     bonne: 'Bimensuelle' },
]

export default function Etape5Difficile({ onSuivant }) {
  const [selectionne, setSelectionne] = useState(null) // id de l'affirmation sélectionnée
  const [reponses, setReponses] = useState({}) // { id: categorie }
  const [erreurs, setErreurs] = useState({}) // { id: true }
  const [valides, setValides] = useState({}) // { id: true }

  const handleAffirmation = (id) => {
    if (valides[id]) return
    setSelectionne(selectionne === id ? null : id)
  }

  const handleCategorie = (cat) => {
    if (!selectionne) return
    const affirmation = AFFIRMATIONS.find(a => a.id === selectionne)
    if (affirmation.bonne === cat) {
      const nouveauxValides = { ...valides, [selectionne]: true }
      setValides(nouveauxValides)
      setReponses(prev => ({ ...prev, [selectionne]: cat }))
      setSelectionne(null)
      if (Object.keys(nouveauxValides).length === AFFIRMATIONS.length) {
        setTimeout(onSuivant, 800)
      }
    } else {
      setErreurs(prev => ({ ...prev, [selectionne]: true }))
      setTimeout(() => {
        setErreurs(prev => ({ ...prev, [selectionne]: false }))
        setSelectionne(null)
      }, 1000)
    }
  }

  const nbValides = Object.keys(valides).length

  return (
    <Layout etape={5}>
      {/* Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>5</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 5 · Les lentilles</span>
      </div>

      {/* Mise en scène */}
      <div style={{ background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16, padding: '20px', marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          MARGAUX — Responsable contactologie
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Marine a ses montures et ses verres, mais elle fait du sport — les lunettes, c'est contraignant ! Margaux, responsable contactologie, lui conseille des lentilles. Encore faut-il choisir le bon type…
        </p>
      </div>

      {/* Mission */}
      <div style={{ background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16, padding: '20px', marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>Mission 5</p>
        <p style={{ fontSize: 15, color: '#111', fontWeight: 700, lineHeight: 1.6 }}>
          Attribue chaque caractéristique au bon type de lentille.
        </p>
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          Appuie sur une caractéristique, puis sur le type de lentille correspondant.
        </p>
      </div>

      {/* Compteur */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontSize: 13, color: '#888' }}>Caractéristiques attribuées</span>
        <span style={{ fontSize: 15, fontWeight: 800, color: RED }}>{nbValides} / {AFFIRMATIONS.length}</span>
      </div>

      {/* Affirmations */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        {AFFIRMATIONS.map(a => {
          const estValide = valides[a.id]
          const estSelectionne = selectionne === a.id
          const estErreur = erreurs[a.id]

          return (
            <div
              key={a.id}
              onClick={() => handleAffirmation(a.id)}
              style={{
                padding: '14px 16px',
                background: estValide ? `${RED}11` : estErreur ? `${RED}22` : estSelectionne ? '#111' : '#f5f5f5',
                border: `2px solid ${estValide ? RED : estErreur ? RED : estSelectionne ? '#111' : '#e0e0e0'}`,
                borderRadius: 12,
                cursor: estValide ? 'default' : 'pointer',
                transition: 'all 0.15s',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
              }}
            >
              <span style={{
                fontSize: 14, fontWeight: 600, lineHeight: 1.4,
                color: estValide ? '#333' : estSelectionne ? '#fff' : '#111',
              }}>
                {a.texte}
              </span>
              {estValide && (
                <span style={{
                  fontSize: 11, fontWeight: 800, color: RED,
                  background: `${RED}22`, padding: '3px 8px', borderRadius: 20,
                  whiteSpace: 'nowrap', letterSpacing: 1,
                }}>
                  {reponses[a.id]}
                </span>
              )}
            </div>
          )
        })}
      </div>

      {/* Catégories */}
      {selectionne && (
        <div>
          <p style={{ fontSize: 13, color: '#888', marginBottom: 10, textAlign: 'center' }}>
            Quel type de lentille ?
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategorie(cat)}
                style={{
                  flex: 1,
                  padding: '14px 8px',
                  background: RED, color: '#fff',
                  border: 'none', borderRadius: 12,
                  fontSize: 13, fontWeight: 800,
                  letterSpacing: 1, textTransform: 'uppercase',
                  transition: 'all 0.15s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {!selectionne && nbValides < AFFIRMATIONS.length && (
        <p style={{ fontSize: 13, color: '#aaa', textAlign: 'center' }}>
          Appuie sur une caractéristique pour commencer.
        </p>
      )}
    </Layout>
  )
}

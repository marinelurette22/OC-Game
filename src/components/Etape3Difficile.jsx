import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'

const QUESTIONS = [
  {
    id: 1,
    marque: 'BBGR-NIKON',
    question: 'Les verres BBGR-Nikon fabriqués dans leur usine de Provins sont considérés comme des verres premium. Quelle certification garantit leur fabrication 100% française ?',
    choix: ['ISO 9001', 'Origine France Garantie', 'Made in France Premium', 'Label Qualité Optique'],
    reponse: 'Origine France Garantie',
  },
  {
    id: 2,
    marque: 'BBGR-NIKON',
    question: 'Nikon est mondialement connu pour son expertise en optique de précision. Dans quel autre domaine cette expertise est-elle reconnue ?',
    choix: ["L'horlogerie", 'Les appareils photo et instruments scientifiques', "L'aéronautique", "L'électronique"],
    reponse: 'Les appareils photo et instruments scientifiques',
  },
  {
    id: 3,
    marque: 'ZEISS',
    question: "ZEISS est une entreprise allemande fondée en 1846, experte en optique de précision. Elle conçoit des microscopes, des objectifs photo professionnels… et des verres de lunettes parmi les plus performants du marché. Dans quel domaine cette expertise lui a-t-elle permis de se démarquer ?",
    choix: ['La résistance aux chocs', 'La netteté visuelle jusqu\'aux bords du verre', 'La légèreté des verres', 'La rapidité de teinte'],
    reponse: "La netteté visuelle jusqu'aux bords du verre",
  },
  {
    id: 4,
    marque: 'ZEISS',
    question: 'Les verres ZEISS sont authentifiés par un marquage laser discret sur le verre. Quel symbole garantit que vous avez entre les mains un vrai verre ZEISS haut de gamme ?',
    choix: ['Un aigle', 'Un Z', 'Une étoile', 'Un diamant'],
    reponse: 'Un Z',
  },
]

export default function Etape3Difficile({ onSuivant }) {
  const [selections, setSelections] = useState({})
  const [valides, setValides] = useState({})
  const [erreurs, setErreurs] = useState({})

  const handleSelect = (qid, choix) => {
    if (valides[qid]) return
    setSelections(prev => ({ ...prev, [qid]: choix }))
    if (erreurs[qid]) setErreurs(prev => ({ ...prev, [qid]: false }))
  }

  const handleValider = (qid) => {
    const q = QUESTIONS.find(q => q.id === qid)
    if (!selections[qid]) return
    if (selections[qid] === q.reponse) {
      const nouveauxValides = { ...valides, [qid]: true }
      setValides(nouveauxValides)
      if (Object.keys(nouveauxValides).length === QUESTIONS.length) {
        setTimeout(onSuivant, 800)
      }
    } else {
      setErreurs(prev => ({ ...prev, [qid]: true }))
      setTimeout(() => setErreurs(prev => ({ ...prev, [qid]: false })), 1200)
    }
  }

  const nbValides = Object.keys(valides).length
  let derniereMarque = null

  return (
    <Layout etape={3}>
      {/* Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>3</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 3 · Les marques de verres</span>
      </div>

      {/* Mise en scène */}
      <div style={{ background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16, padding: '20px', marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          MARINE — Responsable montures
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Marine travaille chaque jour avec les meilleures marques de verres du marché. Montre que tu les connais aussi bien qu'elle !
        </p>
      </div>

      {/* Mission */}
      <div style={{ background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16, padding: '20px', marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>Mission 3</p>
        <p style={{ fontSize: 15, color: '#111', fontWeight: 700, lineHeight: 1.6 }}>
          Réponds correctement aux <span style={{ color: RED }}>4 questions</span> sur les marques de verres du magasin.
        </p>
      </div>

      {/* Compteur */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 13, color: '#888' }}>Questions réussies</span>
        <span style={{ fontSize: 15, fontWeight: 800, color: RED }}>{nbValides} / {QUESTIONS.length}</span>
      </div>

      {/* Questions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {QUESTIONS.map(q => {
          const afficherSeparateur = derniereMarque !== q.marque
          derniereMarque = q.marque
          const estValide = valides[q.id]
          const estErreur = erreurs[q.id]
          const selection = selections[q.id]

          return (
            <div key={q.id}>
              {afficherSeparateur && (
                <p style={{ fontSize: 12, color: RED, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
                  — {q.marque}
                </p>
              )}
              <div style={{
                background: estValide ? `${RED}11` : '#f5f5f5',
                border: `1px solid ${estValide ? RED : '#e0e0e0'}`,
                borderRadius: 16, padding: '18px',
                transition: 'all 0.2s',
              }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                  <span style={{
                    minWidth: 24, height: 24,
                    background: estValide ? RED : '#ddd',
                    color: estValide ? '#fff' : '#888',
                    borderRadius: 6,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 800, flexShrink: 0,
                  }}>{q.id}</span>
                  <p style={{ fontSize: 14, color: '#111', lineHeight: 1.6, fontWeight: 600, margin: 0 }}>{q.question}</p>
                </div>

                {!estValide && (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
                      {q.choix.map(c => (
                        <button
                          key={c}
                          onClick={() => handleSelect(q.id, c)}
                          style={{
                            padding: '12px 8px',
                            background: selection === c ? '#111' : '#fff',
                            border: `2px solid ${selection === c ? '#111' : '#ddd'}`,
                            borderRadius: 10,
                            color: selection === c ? '#fff' : '#333',
                            fontSize: 13, fontWeight: 600,
                            textAlign: 'center',
                            transition: 'all 0.15s',
                            lineHeight: 1.3,
                          }}
                        >{c}</button>
                      ))}
                    </div>
                    <button onClick={() => handleValider(q.id)} disabled={!selection} style={{
                      width: '100%', padding: '12px',
                      background: selection ? RED : '#ddd',
                      color: selection ? '#fff' : '#999',
                      border: 'none', borderRadius: 10,
                      fontSize: 14, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase',
                      transition: 'all 0.2s',
                    }}>Valider →</button>
                    {estErreur && (
                      <p style={{ color: RED, fontSize: 12, marginTop: 8, fontWeight: 600, textAlign: 'center' }}>
                        Ce n'est pas ça… Réfléchis encore !
                      </p>
                    )}
                  </>
                )}

                {estValide && (
                  <p style={{ fontSize: 13, color: RED, fontWeight: 700, margin: 0 }}>
                    ✓ {q.reponse}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

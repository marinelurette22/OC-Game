import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'

const QUESTIONS = [
  {
    id: 1,
    question: "Le traitement antireflet réduit les reflets sur les verres et améliore le confort visuel devant les écrans.",
    reponse: true,
    explication: "Le traitement antireflet élimine les reflets parasites et réduit la fatigue visuelle, particulièrement devant les écrans.",
  },
  {
    id: 2,
    question: "Un verre polarisé est recommandé pour une utilisation en intérieur devant un écran.",
    reponse: false,
    explication: "Le verre polarisé est conçu pour l'extérieur : il élimine les reflets du soleil sur l'eau, la route et la neige.",
  },
  {
    id: 3,
    question: "Le filtre lumière bleue protège des effets néfastes des écrans et de l'éclairage LED et peut améliorer le sommeil.",
    reponse: true,
    explication: "Le filtre lumière bleue réduit l'exposition à la lumière bleu-violet émise par les écrans et les LED, ce qui peut améliorer le confort visuel et le sommeil.",
  },
  {
    id: 4,
    question: "Certains verres photochromiques nouvelle génération, comme les Transitions XTRActive, se teintent même derrière un pare-brise.",
    reponse: true,
    explication: "Contrairement aux photochromiques classiques, les Transitions XTRActive sont conçus pour se teinter même derrière un pare-brise qui filtre les UV.",
  },
]

export default function Etape4Difficile({ onSuivant }) {
  const [selections, setSelections] = useState({})
  const [valides, setValides] = useState({})
  const [erreurs, setErreurs] = useState({})

  const handleValider = (qid, choix) => {
    if (valides[qid]) return
    const q = QUESTIONS.find(q => q.id === qid)
    if (choix === q.reponse) {
      const nouveauxValides = { ...valides, [qid]: true }
      setValides(nouveauxValides)
      setSelections(prev => ({ ...prev, [qid]: choix }))
      if (Object.keys(nouveauxValides).length === QUESTIONS.length) {
        setTimeout(onSuivant, 800)
      }
    } else {
      setSelections(prev => ({ ...prev, [qid]: choix }))
      setErreurs(prev => ({ ...prev, [qid]: true }))
      setTimeout(() => {
        setErreurs(prev => ({ ...prev, [qid]: false }))
        setSelections(prev => ({ ...prev, [qid]: null }))
      }, 1200)
    }
  }

  const nbValides = Object.keys(valides).length

  return (
    <Layout etape={4}>
      {/* Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>4</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 4 · Les traitements</span>
      </div>

      {/* Mise en scène */}
      <div style={{ background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16, padding: '20px', marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          MARINE — Responsable montures
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Dernière épreuve ! Marine veut s'assurer que tu maîtrises les traitements de verres. Vrai ou faux ?
        </p>
      </div>

      {/* Mission */}
      <div style={{ background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16, padding: '20px', marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>Mission 4</p>
        <p style={{ fontSize: 15, color: '#111', fontWeight: 700, lineHeight: 1.6 }}>
          Réponds <span style={{ color: RED }}>Vrai ou Faux</span> à chaque affirmation sur les traitements de verres.
        </p>
      </div>

      {/* Compteur */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 13, color: '#888' }}>Questions réussies</span>
        <span style={{ fontSize: 15, fontWeight: 800, color: RED }}>{nbValides} / {QUESTIONS.length}</span>
      </div>

      {/* Questions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {QUESTIONS.map(q => {
          const estValide = valides[q.id]
          const estErreur = erreurs[q.id]

          return (
            <div key={q.id} style={{
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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {[true, false].map(choix => (
                    <button
                      key={String(choix)}
                      onClick={() => handleValider(q.id, choix)}
                      style={{
                        padding: '14px',
                        background: '#fff',
                        border: `2px solid #ddd`,
                        borderRadius: 10,
                        color: '#111',
                        fontSize: 15, fontWeight: 800,
                        textAlign: 'center',
                        transition: 'all 0.15s',
                      }}
                    >
                      {choix ? 'VRAI' : 'FAUX'}
                    </button>
                  ))}
                </div>
              )}

              {estErreur && (
                <p style={{ color: RED, fontSize: 12, marginTop: 10, fontWeight: 600, textAlign: 'center' }}>
                  Pas tout à fait… Réfléchis encore !
                </p>
              )}

              {estValide && (
                <div style={{ marginTop: 4 }}>
                  <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 6 }}>
                    ✓ {q.reponse ? 'VRAI' : 'FAUX'}
                  </p>
                  <p style={{ fontSize: 13, color: '#555', lineHeight: 1.5, margin: 0 }}>
                    {q.explication}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

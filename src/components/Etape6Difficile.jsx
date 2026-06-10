import { useState } from 'react'
import Layout from './Layout'

const RED = '#C8102E'

const CHOIX = [
  'À partir de 50 ans',
  'À partir de 30 ans',
  'À partir de 60 ans',
  'À partir de 18 ans',
]

export default function Etape6Difficile({ onSuivant }) {
  const [selection, setSelection] = useState(null)
  const [tente, setTente] = useState(false)
  const [erreur, setErreur] = useState(false)

  const valider = () => {
    if (!selection) return
    // Aucune réponse n'est correcte — la bonne réponse est "à tout âge"
    setTente(true)
    setErreur(true)
  }

  return (
    <Layout etape={6} total={6}>
      {/* Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>6</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 6 · L'audition</span>
      </div>

      {/* Mise en scène */}
      <div style={{ background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16, padding: '20px', marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          LUCAS — Audioprothésiste
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Lucas, notre audioprothésiste, tient à te rappeler que l'audition ça se surveille aussi ! La perte auditive peut toucher tout le monde, à tout âge.
        </p>
      </div>

      {/* Question */}
      <div style={{ background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16, padding: '20px', marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>Mission 6</p>
        <p style={{ fontSize: 15, color: '#111', fontWeight: 700, lineHeight: 1.6 }}>
          À partir de quel âge recommande-t-on de faire son premier dépistage auditif ?
        </p>
      </div>

      {/* Choix */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
        {CHOIX.map(c => (
          <button
            key={c}
            onClick={() => { setSelection(c); setTente(false); setErreur(false) }}
            disabled={tente}
            style={{
              padding: '16px 12px',
              background: selection === c ? '#111' : '#f5f5f5',
              border: `2px solid ${selection === c ? '#111' : '#ddd'}`,
              borderRadius: 12,
              color: selection === c ? '#fff' : '#333',
              fontSize: 14, fontWeight: 700,
              textAlign: 'center',
              transition: 'all 0.15s',
            }}
          >{c}</button>
        ))}
      </div>

      {!tente && (
        <button onClick={valider} disabled={!selection} style={{
          width: '100%', padding: '16px',
          background: selection ? RED : '#ddd',
          color: selection ? '#fff' : '#999',
          border: 'none', borderRadius: 12,
          fontSize: 16, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase',
          transition: 'all 0.2s',
        }}>
          Valider →
        </button>
      )}

      {/* Révélation */}
      {tente && (
        <div style={{
          background: '#f5f5f5', border: `2px solid ${RED}`,
          borderRadius: 16, padding: '20px', marginBottom: 16,
        }}>
          <p style={{ fontSize: 15, color: RED, fontWeight: 800, marginBottom: 10 }}>
            Aucune de ces réponses n'est correcte !
          </p>
          <p style={{ fontSize: 15, color: '#111', lineHeight: 1.7, marginBottom: 16 }}>
            Il n'y a pas d'âge minimum — on peut se faire dépister à <span style={{ color: RED, fontWeight: 700 }}>tout âge</span>.
          </p>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 20 }}>
            Bonne nouvelle : <span style={{ fontWeight: 700 }}>Optical Center propose des dépistages auditifs gratuits</span> ! N'hésite pas à en parler à notre équipe.
          </p>
          <button onClick={onSuivant} style={{
            width: '100%', padding: '16px',
            background: RED, color: '#fff',
            border: 'none', borderRadius: 12,
            fontSize: 16, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase',
          }}>
            Récupérer ma récompense →
          </button>
        </div>
      )}
    </Layout>
  )
}

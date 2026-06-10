import { useEffect, useState } from 'react'
import { getFirestore, doc, onSnapshot } from 'firebase/firestore'

const RED = '#C8102E'

export default function Landing({ onStart }) {
  const [nbJoueurs, setNbJoueurs] = useState(null)

  useEffect(() => {
    const db = getFirestore()
    const unsub = onSnapshot(doc(db, 'stats', 'global'), snap => {
      if (snap.exists()) setNbJoueurs(snap.data().bravo_atteint || 0)
    })
    return unsub
  }, [])

  return (
    <div style={{
      height: '100vh',
      overflow: 'hidden',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      maxWidth: 480,
      margin: '0 auto',
      width: '100%',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
        <img src="/logo-oc.png" alt="Optical Center" style={{ height: 80, width: 'auto', display: 'block' }} />
        <span style={{ fontWeight: 900, fontSize: 36, color: '#111', letterSpacing: 3, lineHeight: 1 }}>'NIGME</span>
      </div>

      {/* Accroche */}
      <div style={{
        background: '#f5f5f5',
        border: `2px solid ${RED}`,
        borderRadius: 16,
        padding: '28px 24px',
        textAlign: 'center',
        marginBottom: 40,
      }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>
          La team OC Neuvillette te met au défi !
        </p>
        <h1 style={{ fontSize: 22, fontWeight: 900, color: '#111', lineHeight: 1.3, marginBottom: 12 }}>
          6 énigmes t'attendent
        </h1>
        <div style={{
          width: '100%',
          height: 2,
          background: `linear-gradient(to right, transparent, ${RED}, transparent)`,
          marginBottom: 20,
        }} />
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 16 }}>
          Résous-les toutes et tente de remporter un cadeau !
        </p>
        {nbJoueurs > 0 && (
          <p style={{ fontSize: 13, color: '#888', lineHeight: 1.5, marginBottom: 12 }}>
            Prêt à relever le défi comme{' '}
            <span style={{ color: RED, fontWeight: 800 }}>{nbJoueurs}</span>
            {' '}personne{nbJoueurs > 1 ? 's' : ''} l'ont fait avant toi ?
          </p>
        )}
        <p style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>
          Prêt pour le défi ?
        </p>
      </div>

      <button
        onClick={onStart}
        style={{
          width: '100%',
          padding: '18px',
          background: RED,
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: 1,
          textTransform: 'uppercase',
        }}>
        Relever le défi →
      </button>
    </div>
  )
}

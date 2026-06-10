import { useState, useMemo } from 'react'
import Layout from './Layout'

const RED = '#C8102E'

const GRID = [
  ['O','S','C','A','R','V','E','R','S','I','O','N'],
  ['P','T','M','B','H','K','X','Q','Z','W','Y','D'],
  ['G','J','R','N','A','U','F','C','P','L','H','M'],
  ['K','W','D','T','X','B','I','G','E','U','Z','Q'],
  ['H','F','I','L','I','U','M','Y','R','K','N','P'],
  ['B','A','T','Q','G','W','Z','J','C','K','X','S'],
  ['M','V','K','H','D','N','P','T','F','A','B','U'],
  ['R','X','G','Z','J','C','Q','W','I','S','K','E'],
  ['D','Y','P','B','M','H','T','N','V','Z','G','A'],
  ['J','Q','W','K','L','E','V','E','L','X','C','F'],
  ['T','N','B','G','A','R','Z','D','H','P','M','W'],
  ['U','S','F','X','J','Q','K','T','C','B','N','Y'],
]

function getCellules(debut, fin) {
  const cellules = []
  const dr = fin[0] === debut[0] ? 0 : Math.sign(fin[0] - debut[0])
  const dc = fin[1] === debut[1] ? 0 : Math.sign(fin[1] - debut[1])
  const steps = Math.max(Math.abs(fin[0] - debut[0]), Math.abs(fin[1] - debut[1]))
  let r = debut[0], c = debut[1]
  for (let i = 0; i <= steps; i++) {
    cellules.push(`${r}-${c}`)
    r += dr
    c += dc
  }
  return cellules
}

const MOTS = [
  { mot: 'OSCARVERSION', debut: [0,0],  fin: [0,11] },
  { mot: 'FILIUM',       debut: [4,1],  fin: [4,6]  },
  { mot: 'LUKKAS',       debut: [2,9],  fin: [7,9]  },
  { mot: 'LEVEL',        debut: [9,4],  fin: [9,8]  },
].map(m => ({ ...m, cellules: getCellules(m.debut, m.fin) }))

export default function Etape1Difficile({ onSuivant }) {
  const [debut, setDebut] = useState(null)
  const [trouves, setTrouves] = useState([])
  const [erreur, setErreur] = useState(false)

  const cellulesTrouvees = useMemo(() =>
    new Set(trouves.flatMap(mot => MOTS.find(m => m.mot === mot).cellules))
  , [trouves])

  const handleCell = (r, c) => {
    if (erreur) return
    const key = `${r}-${c}`

    if (!debut) {
      setDebut([r, c])
      return
    }

    // Deuxième tap : calculer le mot
    const fin = [r, c]
    const cellules = getCellules(debut, fin)
    const motForward = cellules.map(k => {
      const [row, col] = k.split('-').map(Number)
      return GRID[row][col]
    }).join('')
    const motReverse = motForward.split('').reverse().join('')

    const motTrouve = MOTS.find(m =>
      (m.mot === motForward || m.mot === motReverse) && !trouves.includes(m.mot)
    )

    if (motTrouve) {
      const nouveauxTrouves = [...trouves, motTrouve.mot]
      setTrouves(nouveauxTrouves)
      setDebut(null)
      if (nouveauxTrouves.length === MOTS.length) {
        setTimeout(onSuivant, 1000)
      }
    } else {
      setErreur(true)
      setDebut(null)
      setTimeout(() => setErreur(false), 800)
    }
  }

  const getCellStyle = (r, c) => {
    const key = `${r}-${c}`
    const estTrouve = cellulesTrouvees.has(key)
    const estDebut = debut && `${debut[0]}-${debut[1]}` === key

    return {
      width: 28, height: 28,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 12, fontWeight: 700,
      background: estTrouve ? RED : estDebut ? `${RED}33` : 'transparent',
      color: estTrouve ? '#fff' : '#111',
      borderRadius: 4,
      cursor: 'pointer',
      userSelect: 'none',
      border: estDebut ? `2px solid ${RED}` : '2px solid transparent',
      transition: 'all 0.1s',
    }
  }

  return (
    <Layout etape={1}>
      {/* Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <div style={{
          width: 36, height: 36, background: RED, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: '#fff',
        }}>1</div>
        <span style={{ fontSize: 13, color: '#888', letterSpacing: 2, textTransform: 'uppercase' }}>Énigme 1 · Les marques OC</span>
      </div>

      {/* Mise en scène */}
      <div style={{ background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16, padding: '20px', marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: RED, fontWeight: 700, marginBottom: 8, letterSpacing: 1 }}>
          MARINE — Responsable montures
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.7 }}>
          Marine connaît parfaitement les marques de son magasin. Et toi ?
        </p>
      </div>

      {/* Mission */}
      <div style={{ background: '#f5f5f5', border: `1px solid ${RED}44`, borderRadius: 16, padding: '20px', marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>Mission 1</p>
        <p style={{ fontSize: 15, color: '#111', fontWeight: 700, lineHeight: 1.6 }}>
          Retrouve les <span style={{ color: RED }}>4 marques propres à Optical Center</span> cachées dans la grille.
        </p>
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          Appuie sur la première lettre du mot, puis sur la dernière.
        </p>
      </div>

      {/* Compteur */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 13, color: '#888' }}>Marques trouvées</span>
        <span style={{ fontSize: 15, fontWeight: 800, color: RED }}>{trouves.length} / {MOTS.length}</span>
      </div>

      {/* Mots trouvés */}
      {trouves.length > 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
          {trouves.map(mot => (
            <span key={mot} style={{
              padding: '4px 12px',
              background: RED, color: '#fff',
              borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: 1,
            }}>{mot}</span>
          ))}
        </div>
      )}

      {/* Grille */}
      <div style={{
        background: '#f5f5f5', border: '1px solid #e0e0e0', borderRadius: 16,
        padding: '16px', marginBottom: 12, overflowX: 'auto',
        display: 'flex', justifyContent: 'center',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 28px)', gap: 2 }}>
          {GRID.map((row, r) =>
            row.map((lettre, c) => (
              <div key={`${r}-${c}`} onClick={() => handleCell(r, c)} style={getCellStyle(r, c)}>
                {lettre}
              </div>
            ))
          )}
        </div>
      </div>

      {erreur && (
        <p style={{ color: RED, fontSize: 13, fontWeight: 600, textAlign: 'center' }}>
          Pas de mot ici… Essaie encore !
        </p>
      )}

      {debut && !erreur && (
        <p style={{ color: '#888', fontSize: 13, textAlign: 'center' }}>
          Première lettre sélectionnée — appuie sur la dernière lettre du mot.
        </p>
      )}
    </Layout>
  )
}

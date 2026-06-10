import { useState } from 'react'
import Landing from './components/Landing'
import AgeSelect from './components/AgeSelect'
import ComingSoon from './components/ComingSoon'
import Etape1 from './components/Etape1'
import Etape2 from './components/Etape2'
import Etape3 from './components/Etape3'
import Etape4 from './components/Etape4'
import Etape5 from './components/Etape5'
import Etape6 from './components/Etape6'
import Bravo from './components/Bravo'
import Etape1Difficile from './components/Etape1Difficile'
import Etape2Difficile from './components/Etape2Difficile'
import Etape3Difficile from './components/Etape3Difficile'
import Etape4Difficile from './components/Etape4Difficile'
import Etape5Difficile from './components/Etape5Difficile'
import Etape6Difficile from './components/Etape6Difficile'
import { tracker } from './firebase'

const RED = '#C8102E'

function FlashSuccess({ onDone }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: '#ffffff',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 9999,
        animation: 'flashIn 0.2s ease',
      }}
      onAnimationEnd={() => setTimeout(onDone, 700)}
    >
      <div style={{ fontSize: 72, color: RED, marginBottom: 20, fontWeight: 900 }}>✓</div>
      <p style={{ fontSize: 28, fontWeight: 900, color: RED, letterSpacing: 3, textTransform: 'uppercase' }}>
        Bonnes réponses !
      </p>
      <style>{`
        @keyframes flashIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default function App() {
  const [ecran, setEcran] = useState('landing')
  const [flash, setFlash] = useState(false)
  const [prochain, setProchain] = useState(null)

  const suivant = (ecranSuivant) => {
    setProchain(ecranSuivant)
    setFlash(true)
    tracker(ecranSuivant + '_debut')
  }

  const apresFlash = () => {
    setFlash(false)
    setEcran(prochain)
  }

  const demarrerFacile = () => {
    tracker('facile_demarré')
    setEcran('etape1')
  }

  const demarrerDifficile = () => {
    tracker('difficile_demarré')
    setEcran('etape1d')
  }

  const allerBravo = () => {
    suivant('bravo')
    tracker('bravo_atteint')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', display: 'flex', flexDirection: 'column' }}>
      {flash && <FlashSuccess onDone={apresFlash} />}
      {ecran === 'landing'      && <Landing       onStart={() => setEcran('age')} />}
      {ecran === 'age'          && <AgeSelect     onFacile={demarrerFacile} onDifficile={demarrerDifficile} />}
      {ecran === 'coming-soon'  && <ComingSoon    onRetour={() => setEcran('age')} />}
      {ecran === 'etape1d'      && <Etape2Difficile onSuivant={() => suivant('etape2d')} onRetour={() => setEcran('age')} />}
      {ecran === 'etape2d'      && <Etape1Difficile onSuivant={() => suivant('etape3d')} />}
      {ecran === 'etape3d'      && <Etape3Difficile onSuivant={() => suivant('etape4d')} />}
      {ecran === 'etape4d'      && <Etape4Difficile onSuivant={() => suivant('etape5d')} />}
      {ecran === 'etape5d'      && <Etape5Difficile onSuivant={() => suivant('etape6d')} />}
      {ecran === 'etape6d'      && <Etape6Difficile onSuivant={allerBravo} />}
      {ecran === 'etape1'       && <Etape1        onSuivant={() => suivant('etape2')} onRetour={() => setEcran('age')} />}
      {ecran === 'etape2'       && <Etape2        onSuivant={() => suivant('etape3')} />}
      {ecran === 'etape3'       && <Etape3        onSuivant={() => suivant('etape4')} />}
      {ecran === 'etape4'       && <Etape4        onSuivant={() => suivant('etape5')} />}
      {ecran === 'etape5'       && <Etape5        onSuivant={() => suivant('etape6')} />}
      {ecran === 'etape6'       && <Etape6        onSuivant={allerBravo} />}
      {ecran === 'bravo'        && <Bravo />}
    </div>
  )
}

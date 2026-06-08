import { useState } from 'react'
import Landing from './components/Landing'
import AgeSelect from './components/AgeSelect'
import ComingSoon from './components/ComingSoon'
import Etape1 from './components/Etape1'
import Etape2 from './components/Etape2'
import Etape3 from './components/Etape3'
import Etape4 from './components/Etape4'
import Etape5 from './components/Etape5'
import Bravo from './components/Bravo'

export default function App() {
  const [ecran, setEcran] = useState('landing') // landing | age | coming-soon | etape1..5 | bravo

  const suivant = (prochain) => setEcran(prochain)

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', flexDirection: 'column' }}>
      {ecran === 'landing'      && <Landing      onStart={() => suivant('age')} />}
      {ecran === 'age'          && <AgeSelect     onFacile={() => suivant('etape1')} onDifficile={() => suivant('coming-soon')} />}
      {ecran === 'coming-soon'  && <ComingSoon    onRetour={() => suivant('age')} />}
      {ecran === 'etape1'       && <Etape1        onSuivant={() => suivant('etape2')} />}
      {ecran === 'etape2'       && <Etape2        onSuivant={() => suivant('etape3')} />}
      {ecran === 'etape3'       && <Etape3        onSuivant={() => suivant('etape4')} />}
      {ecran === 'etape4'       && <Etape4        onSuivant={() => suivant('etape5')} />}
      {ecran === 'etape5'       && <Etape5        onSuivant={() => suivant('bravo')} />}
      {ecran === 'bravo'        && <Bravo />}
    </div>
  )
}

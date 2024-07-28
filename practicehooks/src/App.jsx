import useState from 'react'
import EffectsDemoNoDependency from './useEffect'
import NumberFilter from './useMemo'
import FocusInput from './useRef'

function App() {


  return (
  
    <>
   <EffectsDemoNoDependency />
   <NumberFilter />
   <FocusInput />
    </>
  
  )
}

export default App

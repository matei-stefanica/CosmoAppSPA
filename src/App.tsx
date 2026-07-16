import BasicContent from './components/basic-content'
import Counter from './components/basic-counter'
import {FIRST_NASA_PARAGRAPH, SECOND_NASA_PARAGRAPH, NASA_IMAGE} from './assets/nasa-content'
import BasicSwitch from './components/basic-switch'

function App() {
  return (
    <>  
    <Counter></Counter>
    <BasicContent titleContent='NASA'
                  firstParagraphContent={FIRST_NASA_PARAGRAPH}
                  secondParagraphContent={SECOND_NASA_PARAGRAPH}
                  imagePath={NASA_IMAGE}/>
    <BasicSwitch/>

    </>
  )
}

export default App

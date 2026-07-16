import BasicContentTitle2ParagrqaphsImage from './components/basic-content-title-2-paragraphs-image'
import Counter from './components/basic-counter'
import {FIRST_NASA_PARAGRAPH, SECOND_NASA_PARAGRAPH, NASA_IMAGE} from './assets/nasa-content'

function App() {
  return (
    <>  
    <Counter></Counter>
    <BasicContentTitle2ParagrqaphsImage titleContent='NASA'
                  firstParagraphContent={FIRST_NASA_PARAGRAPH}
                  secondParagraphContent={SECOND_NASA_PARAGRAPH}
                  imagePath={NASA_IMAGE}
                  />
    </>
  )
}

export default App

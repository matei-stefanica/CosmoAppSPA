import './App.css'
import BasicContent from './components/basic-content'
import Counter from './components/basic-button'
import {FIRST_NASA_PARAGRAPH, SECOND_NASA_PARAGRAPH, NASA_IMAGE} from './assets/nasa-content'

function App() {
  return (
    <>  
    <Counter></Counter>
    <BasicContent titleContent='NASA'
                  firstParagraphContent={FIRST_NASA_PARAGRAPH}
                  secondParagraphContent={SECOND_NASA_PARAGRAPH}
                  imagePath={NASA_IMAGE}/>

    </>
  )
}

export default App

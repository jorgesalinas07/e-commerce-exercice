import './App.css'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import { ResultInfoBar } from './components/ResultInfoBar'
import { ResultTable } from './components/ResultTable'
import { SearchProvider } from './contexts/SearchContext'
import { AddToCart } from './components/ResultInfoBar/AddToCart';

function App() {

  return (
    <SearchProvider>
      <Navbar />
      <div className={'GeneralContainer'}>
        <div className='ResultsContainer'>
          <ResultInfoBar />
          <div className='content-ResultandFilter'>
            <Filter />
            <ResultTable />
          </div>
        </div>
        <AddToCart />
      </div>
    </SearchProvider>
  );
  }

export default App

import Header from "./Components/Header"; 
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";

function App() {

  return (
    <>
      <div className="App">
          <Header/>
          <Banner />
          <main className="container">
            <p className="mt-3 mb-3">Bem vindo ao meu site </p>
            <Cards/>
          </main>
      </div>
    </>
  )
}

export default App

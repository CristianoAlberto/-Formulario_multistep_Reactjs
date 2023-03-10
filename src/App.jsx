
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import './App.css'

function App() {

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe a sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo
          avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>Etapas</p>
        <form>
          <div className="actions">
            <button type="button">
              <span>Voltar</span>
              <GrFormPrevious />
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default App

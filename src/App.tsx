import { useNavigate } from "react-router"
import "./App.css"
import reactLogo from "./assets/react.svg"

function App() {
  const navigate = useNavigate()

  return (
    <main className='container'>
      <h1>Welcome to Tauri + React</h1>

      <div className='row'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo vite' alt='Vite logo' />
        </a>
        <a href='https://tauri.app' target='_blank'>
          <img src='/tauri.svg' className='logo tauri' alt='Tauri logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <button onClick={() => navigate("/home")}>Go to Home</button>
    </main>
  )
}

export default App

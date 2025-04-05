import { useNavigate } from "react-router"

function App() {
  const navigate = useNavigate()

  return (
    <main className='container'>
      <h1>Welcome to Tauri + React</h1>
      <button onClick={() => navigate("/home")} className='text-red'>
        Go to Home
      </button>
    </main>
  )
}

export default App

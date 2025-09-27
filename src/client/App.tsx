import Board from './Board'

// import "./App.css";



function App() {
  return (
    <>
      <h1 className='flex justify-center'>Tic Tac Toe</h1>
      <div className='flex-lg h-7'>
        <div>
          <Board />
        </div>
      </div>
    </>
  )
}

export default App;

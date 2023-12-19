import { useState } from 'react'

function Contador() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <div className="contador">
          <button onClick={() => setCount((count) => count + 1)}>
            Contagem está em {count}
          </button>
        </div>
      </>
    )
  }

  export default Contador
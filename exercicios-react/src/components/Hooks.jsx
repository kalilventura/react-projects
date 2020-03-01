import React, { useState, useEffect } from 'react'

export default props => {
    // Para ter estado em componentes funcionais
    const [contador, setContador] = useState(100)
    const [status, setParOuImpar] = useState('Par')

    // CHamada sempre que o componente for montado e quando o componente for atualizado
    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })
    return (
        <div>
            <h1>{contador}</h1>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
        </div>
    )
}
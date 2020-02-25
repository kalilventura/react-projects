import React from 'react'

const aprovados = ['Paulo', 'Roberto', 'Gustavo', 'André', 'Giovanna']

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}

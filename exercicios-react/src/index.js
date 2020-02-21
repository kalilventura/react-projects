import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponente'
// import MensagemPadrao, { CompA, CompB as B } from './components/SegundoComponenete'
// import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilva'
import Familia from './components/Familia'
import Membro from './components/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Familia>
            <Membro nome ="Andre" sobrenome ="Pereira" />
            <Membro nome ="Gustavo" sobrenome ="Pereira" />
        </Familia>
        <Familia >
            <Membro nome ="Xavier" sobrenome ="da Silva" />
            <Membro nome ="Antônio" sobrenome ="da Silva" />
        </Familia>
        {/* <MultiElementos />
        <PrimeiroComponente valor="Olá mundo"></PrimeiroComponente>
        <CompA valor="Olá, eu sou o Componente A" />
        <B valor="Olá, eu sou o Componente B" />
        <MensagemPadrao valor="Eu sou uma função anonima exportada por 'Default' :) " />
        <FamiliaSilva /> */}
        
    </div>, elemento)


import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'
import { CompA, CompB as B } from './components/SegundoComponenete'
import MultiElementos from './components/MultiElementos'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <MultiElementos />
        <PrimeiroComponente valor="Olá mundo"></PrimeiroComponente>
        <CompA valor="Olá, eu sou o Componente A" />
        <B valor="Olá, eu sou o Componente B" />
    </div>, elemento)


import React from 'react'

const CompA = props => <h1>Primeiro diz: {props.valor}</h1>

const CompB = props => <h1>Segundo diz: {props.valor}</h1>

export default (props) => <p>Mensagem : {props.valor}</p>

export { CompA, CompB }
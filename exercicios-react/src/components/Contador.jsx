import React, { Component } from 'react'

export default class Contador extends Component {

    // Para funcionar o this na função
    // Solucao 01
    // constructor(props) {
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    // Solucao 02
    // <button onClick={() => this.maisUm()}></button>

    // Solucao 03
    // maisUm = () => {
    //     this.props.numero++
    // }

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    alterarNumeroSomar = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca })
    }

    alterarNumeroSubtrair = (diferenca) => {
        this.setState({ numero: this.state.numero - diferenca })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Increment</button>
                <button onClick={this.menosUm}>Decrement</button>
                <br />
                <button onClick={() => this.alterarNumeroSomar(10)}>Increment 10</button>
                <button onClick={() => this.alterarNumeroSubtrair(10)}>Decrement 10</button>
            </div>
        )
    }
}
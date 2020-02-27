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

    maisUm() {
        this.props.numero++
    }

    render() {
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Increment</button>
                <button>Decrement</button>
            </div>
        )
    }
}
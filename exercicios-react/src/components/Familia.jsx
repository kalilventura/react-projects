import React from 'react'
import { childWithProps } from '../utils/utils'

// Map do React é utilizado para passar as propriedades do pai para os filhos no React
export default props =>
    <div>
        <h1>Familia</h1>
        {childWithProps(props)}

        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props })
        })} */}
        {/* {React.cloneElement(props.children, { ...props })} */}
        {/* {React.cloneElement(props.children, props)} */}
        {/* {React.cloneElement(props.children, { sobrenome: props.sobrenome })} */}
        {/* {props.children} */}
    </div>
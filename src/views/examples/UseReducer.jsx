import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {

    cart: [],
    products: [],
    user: null,
    other: '...',
    number: 0

}
function reducer(state, action) {

    switch (action.type) {
        case 'add2':
            return { ...state, number: state.number + 2 }

        case 'multi7':
            return { ...state, number: state.number * 7 }

        case 'div25':
            return { ...state, number: state.number / 25 }

        case 'numberInt':
            return { ...state, number: parseInt(state.number) }

        case 'numAddN':
            return { ...state, number: state.number + action.payload }

        case 'login':

            return { ...state, user: { name: action.payload } }

        default:
            return state

    }

}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <SectionTitle title="Exercicio #01" />

            <div className="center">
                {state.user ?
                    (<span className="text">{state.user.name}</span>
                    ) :
                    (
                        <span className="text">Sem Ususario</span>
                    )}



                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'add2' })}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'multi7' })}>x7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'div25' })}>-:- 25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberInt' })}>Int</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numAddN' , payload: -9})}> -9</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numAddN' , payload: +1000})}> +1000</button>



                </div>

            </div>

        </div>
    )
}

export default UseReducer

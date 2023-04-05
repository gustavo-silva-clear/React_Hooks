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
                    <button className="btn" onClick={() => dispatch({ type: 'login' , payload: 'Maria'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'add2' })}>+2</button>

                </div>

            </div>

        </div>
    )
}

export default UseReducer

import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {

    if (n < 0) return - 1

    if (n === 0) return 1

    return calcFatorial(n - 1) * n

}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)



    useEffect(function () {

        setFatorial(calcFatorial(number))

    }, [number])

    useEffect(function () {

        if (fatorial > 1000000) {

            document.title = "VIXIIIIIIIIIIIIIIIIIIIIIIIIIII!!!!!!!"

        }

    })

    const [num, setNum] = useState("Impar")
    
    useEffect(function(){

        setNum(number % 2 === 0 ? "Par" : "Ímpar")

    },[number])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercicio #01" />

            <div className="center">

                <div>

                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>

                </div>

                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>


            <SectionTitle title="Exercicio #02" />

            <div className="center">

                <div>

                    <span className="text">Par ou impar: {number} é </span>
                    <span className="text red">{num}</span>

                </div>

            </div>


        </div>
    )
}

export default UseEffect

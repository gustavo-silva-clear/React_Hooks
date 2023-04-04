import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButton from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0);


    useCallback(function (delta){

        setCount(count + delta) 

    })

    function inc(delta) {

        setCount(count + delta)

    }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!" />

            <div className="center">

                <span className="text">{count}</span>
                
                <UseCallbackButton inc = {inc} />

            </div>

        </div>
    )
}

export default UseCallback

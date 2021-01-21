import React from 'react'
import { DietHealthRow } from './styles'


const DietHealthBlock = ({label, name, checked, handleCheck}) => {

    return (
        <DietHealthRow>
            <label>{ label }</label>
            <input
                type="checkbox"
                onChange={ handleCheck }
                name={ name }
                checked={ checked }
                key={ name }
            />
        </DietHealthRow>
    )
}


export default DietHealthBlock
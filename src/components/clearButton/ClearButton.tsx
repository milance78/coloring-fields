import { useContext } from 'react'
import './ClearButton.scss'
import { FieldsContext } from '../../contexts/fieldsContext'
import { ISingleField } from '../fields/Fields'

const ClearButton = () => {

    const { setFields } = useContext(FieldsContext);

    const clearAllFields = () => {
        setFields(
            (prev: ISingleField[]) =>
                prev.map(
                    field => 
                        ({
                            active: false,
                            color: 'yellow',
                        })                
                )
        );
    }

    return (
        <button onClick={clearAllFields}>
            Clear
        </button>
    )
}

export default ClearButton
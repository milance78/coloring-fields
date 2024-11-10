import React, { useContext, useEffect } from 'react'
import './Fields.scss'
import SingleField from '../singleField/SingleField'
import { FieldsContext } from '../../contexts/fieldsContext'

export interface ISingleField {
    active: boolean;
    color: string;
}

const Fields = () => {

    const { fields, setFields } = useContext(FieldsContext);

    const initialFieldsObjArrayCreation = () => {
        let arr: ISingleField[] = [];
        for (let index = 0; index < 1600; index++) {
            arr = [
                ...arr,
                {
                    active: false,
                    color: 'yellow',
                }
            ]
        }
        return arr
    }

    useEffect(() => {
        setFields(initialFieldsObjArrayCreation())
    }, [setFields]);

    return (
        <div className='fields'>
            {fields.map(
                (el: ISingleField, i: number) =>
                    <SingleField
                        key={i}
                        singleFieldIndex={i}
                        active={el.active} />
            )}
            {console.log(fields)}
        </div>
    )
}

export default Fields
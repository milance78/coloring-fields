import React, { useContext, useEffect, useState } from 'react'
import './SingleField.scss'
import { FieldsContext } from '../../contexts/fieldsContext'
import { CurrentColorContext } from '../../contexts/currentColor'
import { ISingleField } from '../fields/Fields'

interface Iprops {
  singleFieldIndex: number;
  active: boolean;
}

const SingleField: React.FC<Iprops> = ({
  singleFieldIndex,
  active,
}) => {
  const [stayActive, setStayActive] = useState(false);
  const { fields, setFields } = useContext(FieldsContext);
  const { currentColor } = useContext(CurrentColorContext);


  const updatingSingleFieldActivity = () =>{
    setFields(
      (prev: ISingleField[]) =>
        [...prev.map(
          (field, arrIndex) =>
            singleFieldIndex === arrIndex
              ? { ...field, 
                active: stayActive ? true : !field.active, // if the color altered, then the field should not become inactive on click
                color: currentColor }
              : field)]
    );
    setStayActive(false);
}

    useEffect(()=> {
      setStayActive(true);
    },[currentColor])
  
  return (
    <div className={active
      ? `single-field ${fields[singleFieldIndex].color}`
      : 'single-field'}
      onClick={updatingSingleFieldActivity}/>
  )
}

export default SingleField
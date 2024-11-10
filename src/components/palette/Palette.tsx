import React, { useContext } from 'react'
import './Palette.scss'
import { CurrentColorContext } from '../../contexts/currentColor'
import ClearButton from '../clearButton/ClearButton';

const Palette = () => {
  const colors = ['yellow', 'red', 'green', 'blue', 'orange', 'brown', 'grey', 'black'];

  const { setCurrentColor } = useContext(CurrentColorContext);

  return (
    <div className='palette'>
      {colors.map((color, i) =>
        <div key={i}
          className={`single-color ${color}`}
          onClick={() => setCurrentColor(color)} />)}
      <ClearButton />
    </div>
  )
}

export default Palette
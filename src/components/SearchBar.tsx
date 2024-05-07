import { ChangeEvent, useState } from 'react'
import style from './SearchBar.module.css'
import { CirclePlus } from 'lucide-react';


export const SearchBar = () => {

  const [placeHolderText, setPlaceHolderText] = useState('Adicione uma nova tarefa')
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        className={style.content}
        type="search"
        placeholder={placeHolderText}
        onFocus={() => setPlaceHolderText('Descrição da tarefa')}
        onBlur={() => {
          setPlaceHolderText('Adicione uma nova tarefa')
          setInputValue('')
        }}
        value={inputValue}
        onChange={handleChange}
      />
      <button className={style.button}>Criar<CirclePlus height={15} /></button>
    </>
  )
}


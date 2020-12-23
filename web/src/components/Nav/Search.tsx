import React from 'react'
import './Search.scss'

interface Props {
    value: string
    setValue: Function
    onKeyUp: Function

}

const Search: React.SFC<Props> = ({ value, setValue, onKeyUp }) => {
    return (
        <div className="Nav-Search">
            <input type="text" value={value} onChange={e => setValue(e.currentTarget.value)} onKeyUp={e => onKeyUp(e)} placeholder="Search.." autoComplete="false" spellCheck="false" />
        </div>
    )
}

export default Search

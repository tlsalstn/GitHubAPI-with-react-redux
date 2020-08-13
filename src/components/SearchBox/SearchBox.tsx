import React from 'react';
import "./SearchBox.scss";

type Props = {
    className?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SearchBox({className, value, onChange, onKeyUp}: Props) {
    return (
        <div className={"SearchBox " + className}>
            <input value={value} onChange={e => onChange(e)} onKeyUp={e => onKeyUp(e)} placeholder={"Search username"} spellCheck="false" />
        </div>
    )
}

export default SearchBox;
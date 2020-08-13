import React from 'react';
import { Search } from "../../styles/common/Search";

type Props = {
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBox = ({value, placeholder, onChange, onKeyUp}: Props) => (
    <Search value={value} onChange={e => onChange(e)} onKeyUp={e => onKeyUp(e)} placeholder={placeholder} spellCheck="false" />
)

export default SearchBox;
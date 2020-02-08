import React, {useState} from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'


const Search = ({ onSearch}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div style = {styles.inputDiv}>
            <input
                type='text'
                value={inputValue}
                onChange = {e => {setInputValue(e.target.value)}}
            />
            <button onClick={() =>onSearch(inputValue)}>Submit</button>
        </div>
    )
}

const styles = {
    inputDiv: {
        display: 'flex',
        justifyContent: 'space-around',
    }
}
export default Search
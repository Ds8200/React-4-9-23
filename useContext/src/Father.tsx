import { useContext, useState } from 'react';
import { TextContext } from './App';
import Child from './Child';



const Father = () => {
    const textContext = useContext(TextContext);
    const [valInput, setValInput] = useState('');

    const handleSetText = () => {
        if (textContext?.setText) {
            textContext.setText(valInput);
        }
    }

    return (
        <>
            <Child />
            <input type="text" onChange={(e) => setValInput(e.target.value)} value={valInput} />
            <button style={{ margin: "30px" }} onClick={handleSetText}>Update state</button>
        </>
    )
}

export default Father;

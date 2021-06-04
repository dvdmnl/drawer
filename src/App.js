import React, {useState, useEffect} from 'react'
import './App.css';
import InputToJSON from "./components/InputToJSON/InputToJSON";
import FormGenerator from './components/FormGenerator/FormGenerator'

function App() {
    const [formData, setFormData] = useState(null)
    useEffect(() => {
        console.log(formData)
    },[formData])
    return (
        <div className="App">
            <InputToJSON setFormData={setFormData}/>
            <FormGenerator formSpec={formData}/>
        </div>
    );
}

export default App;

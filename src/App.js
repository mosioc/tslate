import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animal, setAnimal] = useState([]);

    const onClickHandle = () => {
        setAnimal([...animal, getRandomAnimal()])
    }

    const renderedAnimal = animal.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div>
            <button onClick={onClickHandle}>Add Animal</button>
            <div>{renderedAnimal}</div>
        </div>)
}

export default App;
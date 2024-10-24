import {useEffect, useState} from "react";

const Hero = ({name, children}) => {
    const [number, setNumber] = useState(0)

    const test = () => {
        console.log("mamad hast")
    }

    const handleClick = () => {
        setNumber(prevState => prevState + 1)
    }


    useEffect(() => {
        test()
    }, [number])

    return (
        <div>
            Number : {number}
            <button onClick={handleClick}>Click me !!!</button>
            <ChildHero name={name} setNumber={setNumber}/>
        </div>
    )
}


const ChildHero = ({name,setNumber}) => {
    return (
        <p>{name}</p>
    )
}

export default Hero
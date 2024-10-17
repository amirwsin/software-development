import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
    const name = "amir"

    return (
        <>
            <Navbar/>
            <Hero name={name}>
                Mamad
            </Hero>
        </>
    )
}




export default App
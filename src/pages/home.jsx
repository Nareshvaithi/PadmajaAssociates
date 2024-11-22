import Hero from "../components/homecompo/Hero";
import herobanner from "../assets/home/herobanner.jpg"
const Home = ()=>{
    return(
        <div>
            <Hero banner={herobanner}/>
        </div>
    )
}

export default Home;
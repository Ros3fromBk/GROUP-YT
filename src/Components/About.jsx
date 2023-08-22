import "./About.css"
import github from "../assets/github-mark.svg"
function About({ engineers }) {

    return (

        <div className="AboutMe">
            <div className="space">
                <h3>{engineers.name}</h3>
                <img src={engineers.pic} alt={engineers.name} />
                <h5>{engineers.hometown}</h5>
                <h5>{engineers.fact}</h5>
                <a href={engineers.github}>
                    <img className="github" src={github} />
                </a>
            </div>
        </div>

    )
}

export default About
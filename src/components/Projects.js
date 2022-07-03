// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>NFT Project with a local school</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Jake Kantor has teamed with a local 
                    Virginia Beach school for advanced learning 
                    to promote education in NFT technology. 
                    Utilize the Rinkeby Test Network to mint yourself 
                    a "The Dynamic Dolphins" NFT today!
                    </p>

                    <a href="https://super-bush-1591.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/kantorkid/The-Dynamic-Dolphins-NFTs" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>The Olympics™ </h3>
                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/8zONpbrN5UQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                    <p>Jake Kantor is developing the Olympic's 
                    soon to be first ever SmartSport! The ancient international sport of 
                    kabaddi is seeking Olympic inclusion as early as the 2026 Youth Olympics.
                    </p>

                    <a href="https://www.us-kabaddi.com/" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>Decentralized Cryptocurrency Exchange</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Jake Kantor has developed a new crytpcurrency 
                    and decentralized crypto exchange. 
                    Use the Kovan Test Network to interact with 
                    Jake's DApp exchange for free.

                    </p>

                    <a href="https://dapp-token-exchange-jakekantor.herokuapp.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/kantorkid/Decentralized-Cryptocurrency-Exchange.git" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
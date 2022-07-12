// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import portfolio from '../assets/portfolio.png';
import DAPP from '../assets/DAPP.png';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>DAPP Token</h3>
                    <img src={DAPP} alt="DAPP TOKEN" />
                    <p>Jake Kantor has developed a new ERC20 cryptocurrency. 
                    Trade it for free on Jake's decentralized cryptocurrency exchange. 
                    Use the Kovan Test Network to interact for free.
                    </p>

                    <a href="https://dapp-token-exchange-jakekantor.herokuapp.com/" target="_blank" className="button">Exchange</a>
                    <a href="https://kovan.etherscan.io/address/0xbb1e1bd372e776375db698e8837ae4756c74280f#code" target="_blank" className="button">Etherscan</a>
                </div>


                <div className="projects__card">
                    <h3>NFT Project with a local school</h3>
                    <img src={compound} alt="NFT Project with a local school" />
                    <p>Jake Kantor has teamed with local 
                    Virginia Beach schools
                    to promote education in NFT technology. 
                    Utilize the Rinkeby Test Network to mint yourself 
                    a "The Dynamic Dolphins" NFT today!
                    </p>

                    <a href="https://super-bush-1591.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/kantorkid/The-Dynamic-Dolphins-NFTs" target="_blank" className="button">Github</a>
                </div>


                <div className="projects__card">
                    <h3>Decentralized Cryptocurrency Exchange</h3>
                    <img src={aave} alt="Decentralized Cryptocurrency Exchange" />
                    <p>Jake Kantor has developed a new cryptocurrency 
                    and decentralized crypto exchange. 
                    Use the Kovan Test Network to interact with 
                    Jake's DApp exchange for free.
                    </p>

                    <a href="https://dapp-token-exchange-jakekantor.herokuapp.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/kantorkid/Jake-Kantor_Decentralized-Cryptocurrency_Exchange" target="_blank" className="button">Github </a>
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
                    <h3>Portfolio</h3>
                    <img src={portfolio} alt="Portfolio" />
                    <p>Jake Kantor's professional 
                    Portfolio. Here is where you can 
                    interact with Jake's blockchain projects. 
                    Find Jake's projects, experience, about, education, 
                    and social media here.
                    </p>

                    <a href="https://jake-kantor-dev-portfolio.herokuapp.com/" target="_blank" className="button">Portfolio</a>
                    <a href="hhttps://github.com/kantorkid/Portfolio-Jake-Kantor" target="_blank" className="button">Github</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
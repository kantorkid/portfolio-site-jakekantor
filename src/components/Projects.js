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
                    <b><br></br><h3>Blockchain Gaming (Unity)</h3> <br></br></b>
                    <iframe width="310" height="315" src="https://www.youtube.com/embed/KOY-VcB3h6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p><b>The Dynamic Dolphins! </b> <br></br> Jake Kantor has developed a new Web3-connected Blockchain Video Game. 
                    This educational game, "The Dynamic Dolphins", is a fun way to the youth
                    about blockchain/NFT technology.<br></br>
                    </p>

                    <a href="https://kantorkid.itch.io/the-dynamic-dolphins" target="_blank" className="button">Play Now!</a>
                </div>


                <div className="projects__card">
                    <b><br></br><h3>DAPP Token</h3> <br></br><br></br></b>
                    <img src={DAPP} alt="DAPP TOKEN" />
                    <p>Jake Kantor has developed a new ERC20 cryptocurrency. 
                    Trade it for free on Jake's decentralized cryptocurrency exchange. 
                    Use the Kovan Test Network to interact for free.<br></br>
                    </p>

                    <a href="https://dapp-token-exchange-jakekantor.herokuapp.com/" target="_blank" className="button">Site</a>
                    <a href="https://kovan.etherscan.io/address/0xbb1e1bd372e776375db698e8837ae4756c74280f#code" target="_blank" className="button">Etherscan</a>
                </div>


                <div className="projects__card">
                    <b><h3>NFT Project with a local school</h3></b>
                    <img src={compound} alt="NFT Project with a local school" />
                    <p>Jake Kantor has teamed with local 
                    Virginia Beach schools
                    to promote education in NFT technology. 
                    Utilize the Rinkeby Test Network to mint yourself 
                    a "Dynamic Dolphins" NFT!
                    </p>

                    <a href="https://super-bush-1591.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/kantorkid/The-Dynamic-Dolphins-NFTs" target="_blank" className="button">Github</a>
                </div>


                <div className="projects__card">
                    <b><h3>Decentralized Cryptocurrency Exchange</h3></b>
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
                    <b><h3>IPFS</h3> <br></br></b>
                    <img src={portfolio} alt="Portfolio" />
                    <p>Jake Kantor's professional 
                    Portfolio is connected to the InterPlanetary File System. 
                    Here is where you can 
                    interact with Jake's blockchain projects. 
                    Find Jake's projects, experience, about, education, 
                    and social media here.
                    </p>

                    <a href="https://gateway.pinata.cloud/ipfs/QmU3oNb2SfcuQZatGrWWSymZfB44zaLb3uu81FHwQ6qHmc" target="_blank" className="button">NFTs</a>
                    <a href="https://gateway.pinata.cloud/ipfs/QmYEQndmyAMtqfHsq6rmJM95x2pPWKif7zfYJHXECryveY" target="_blank" className="button">Code</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
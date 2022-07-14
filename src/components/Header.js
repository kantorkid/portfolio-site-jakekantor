// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Jake Kantor" />

            <div className='header__content'>
                <h1>Hello! I'm Jake Kantor</h1>
                <p>Blockchain Developer & NFT Marketer</p>
                <a href="mailto:jake.t.kantor@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
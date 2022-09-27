// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Jake Kantor" />

            <div className='header__content'>
                <h1>Jake Kantor</h1>
                <p>Blockchain Developer</p>

            <br></br>

            </div>
        </section>
    );
}

export default Header;
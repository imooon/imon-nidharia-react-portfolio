import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/icons8-instagram-light.svg';
import instagramDark from '../../assets/icons8-instagram-dark.svg';
import CV from '../../assets/Resume March 24.pdf';
import { useTheme } from '../../common/ThemeContext';


    function Hero() {
        const { theme, toggleTheme } = useTheme();

        const themeIcon = theme === 'light' ? sun : moon;
        const githubIcon = theme === 'light' ? githubLight : githubDark;
        const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
        const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

        return <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero}
                     src={heroImg} alt="Profile picture of Imon Nidharia" 
                     />
                     <img className={styles.colorMode} src={themeIcon} alt="Colour mode icon" onClick={toggleTheme}/>
            </div> 
            <div className={styles.info}>
                <h1>Imon
                    <br />
                    Nidharia
                </h1>
                <h2>Full Stack Developer</h2>
                <span>
                    <a href="https://github.com/imooon" target='_blank'>
                        <img src={githubIcon} alt="GitHub icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/imon-nidharia/" target='_blank'>
                        <img src={linkedinIcon} alt="LinkedIn icon" />
                    </a>

                    <a href="https://www.instagram.com/can0nbaba/" target='_blank'>
                        <img src={instagramIcon} alt="Instagram icon" />
                    </a>
                </span>
                <p>Enthusiastic learner developing modern React apps.</p>
                <a href={CV} download>
                    <button className='hover'>Resume</button>
                </a>
                </div>      
             </section>
    }

    export default Hero;
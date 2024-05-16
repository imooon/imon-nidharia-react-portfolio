import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';

    function Hero() {
        return <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero}
                     src={heroImg} alt="Profile picture of Imon Nidharia" 
                     />
                     <img className={styles.colorMode} src={themeIcon} alt="Colour mode icon" />
            </div>       
             </section>
    }

    export default Hero;
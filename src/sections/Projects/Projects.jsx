// creation of 'Projects' boiler plate through rfce
import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
    <h1 className='sectionTitle'>My Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard src={viberr} link="https://github.com/imooon/Harmony-Hub-App" h3="Harmony Hub" p="A feel-good wellness application!"/>

      <ProjectCard src={freshBurger} link="https://github.com/imooon/motormatcher-app" h3="Motor Matcher" p="Buy & Sell cars!"/>
    </div>

    </section>
  )
}

export default Projects;
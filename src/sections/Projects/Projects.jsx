// creation of 'Projects' boiler plate through rfce
import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import harmonyhub from '../../assets/harmonyhub.png';
import codecollab from '../../assets/codecollab.png';
import motormatcher from '../../assets/motormatcher.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
    <h1 className='sectionTitle'>My Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard src={codecollab} link="https://github.com/imooon/Code-Collab" h3="Code Collab" p="By coders, for coders!"/>

      <ProjectCard src={harmonyhub} link="https://github.com/imooon/Harmony-Hub-App" h3="Harmony Hub" p="A feel-good wellness application!"/>

      <ProjectCard src={motormatcher} link="https://github.com/imooon/motormatcher-app" h3="Motor Matcher" p="Buy & Sell cars!"/>
    </div>

    </section>
  )
}

export default Projects;
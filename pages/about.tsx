import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Page</h1>
      <p className={styles.paragraph}>
        This is a brief description about me. I'm a web developer with a passion for
        building modern and responsive websites.
      </p>
    </div>
  );
};

export default About;

  
import React from 'react';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects Page</h1>
      <div className={styles['project-list']}>
        <div className={styles['project-item']}>
          <h2>Project 1</h2>
          <p>Description of project 1.</p>
        </div>
        <div className={styles['project-item']}>
          <h2>Project 2</h2>
          <p>Description of project 2.</p>
        </div>
        <div className={styles['project-item']}>
          <h2>Project 3</h2>
          <p>Description of project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import styles from './experienceItem.module.css';

const ExperienceItem = ({ companyName, startYear, endYear, position, technologies } : any) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.companyName}>{companyName}</h3>
                <span className={styles.years}>
                    {startYear} - {endYear ? endYear : 'Currently working here'}
                </span>
            </div>
            <div className={styles.position}>
                <h4>{position}</h4>
            </div>
            <div className={styles.technologies}>
                {technologies.map((tech: any, index: any) => (
                    <span key={index} className={styles.techTag}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceItem;


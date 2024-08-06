import styles from './experience.module.css';
import ExperienceItem from './experienceItem';

const Experience = () => {
    const experiences = [
        {
            companyName: 'Fix it',
            startYear: '2022',
            endYear: null,
            position: 'Full-Stack Developer',
            technologies: ['React', 'Node','Typescript', 'Docker', 'GCP']
        },
        {
            companyName: 'Fix it',
            startYear: '2021',
            endYear: '2022',
            position: 'Front-End Developer Intern',
            technologies: ['React', 'Typescript', 'Styled Components']
        }
    ];

    return (
        <div className={styles.container}>
            {experiences.map((experience, index) => (
                <ExperienceItem
                    key={index}
                    companyName={experience.companyName}
                    startYear={experience.startYear}
                    endYear={experience.endYear}
                    position={experience.position}
                    technologies={experience.technologies}
                />
            ))}
        </div>
    );
};

export default Experience;


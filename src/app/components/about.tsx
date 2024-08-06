import Image from 'next/image';
import styles from './about.module.css'
import profilePic from '../public/AboutMeImage.jpg'; // Certifique-se de ter uma imagem neste caminho

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Image
                    className={styles.profilePic}
                    src={profilePic}
                    alt="Profile Picture"
                    width={150}
                    height={150}
                />
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque
                    leo et risus vulputate, ut convallis eros bibendum. Donec lacinia nisi at
                    nisi sollicitudin, et vestibulum purus mattis. Nulla facilisi.
                </p>
            </div>
        </div>
    );
};


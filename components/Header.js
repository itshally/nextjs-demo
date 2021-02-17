import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={styles.description}>
                Etiam in volutpat turpis. In nec neque laoreet, suscipit augue in, 
                hendrerit purus. Morbi tempus venenatis nunc quis laoreet. In sed 
                magna pellentesque, imperdiet dui ac, ultricies nunc. Mauris tellus 
                augue, egestas vel mollis in, efficitur eget turpis. Nulla imperdiet 
                posuere augue. Phasellus quis ligula a erat lobortis vestibulum. 
                Etiam vehicula nec velit vitae consectetur. 
            </p>
        </div>
    )
}

export default Header
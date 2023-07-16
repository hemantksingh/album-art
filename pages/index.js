import styles from './HomePage.module.scss'

function HomePage() {
    return (
        <div className={styles.cta}>
            <span>
                Sample Image 1
            </span>
            <span>
                Sample Image 2
            </span>
            <div className={styles.ctaText}>
                <div className={styles.ctaMainText}>
                    Your <em>Album</em> and <em>Artist</em> Name
                </div>
                <div className={styles.ctaSubText}>
                     <div>on <em>Custom</em> Album Design</div>
                </div>
                <button class="cta">Shop Now</button>
            </div>
            <span>
                Sample Image 3
            </span>
            <span>
                Sample Image 4
            </span>
        </div>
    )
}

export default HomePage
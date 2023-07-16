import Image from 'next/image'
import {
    divinity,
    synchronicity,
    theUndertaking,
    asTheSunSpeaks
} from '../public/images/albums'
import heroBanner from '../public/images/hero-banner.png'
import soundwaves from '../public/images/soundwaves.jpg'
import soundwavesSmall from '../public/images/soundwaves-small.jpg'
import styles from './HomePage.module.scss'

function HomePage() {
    return (
        <>
            <div className={styles.heroImage}>
                <Image layout='fill' objectFit='cover' src={heroBanner}/>
            </div>
            <div className={styles.cta}>
                <span className={styles.image}> 
                    <Image width="200" height="200" src={divinity}/>
                </span>
                <span className={styles.image}>
                    <Image width="200" height="200" src={synchronicity}/>
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
                <span className={styles.image}>
                    <Image width="200" height="200" src={theUndertaking}/>
                </span>
                <span className={styles.image}>
                    <Image width="200" height="200" src={asTheSunSpeaks}/>
                </span>
            </div>
            <div className={styles.soundwavesImage}>
                <Image layout='responsive' src={soundwavesSmall}/>
            </div> 
        </>
    )
}

export default HomePage
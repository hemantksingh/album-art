function HomePage() {
const ctaStyles = {
    display: 'flex',
    justifyContent: 'space-around'
}

    return (
        <div style={ctaStyles}>
            <span>
                Sample Image 1
            </span>
            <span>
                Sample Image 2
            </span>
            <div>
                <div>
                    Your <em>Album</em> and <em>Artist</em> Name
                </div>
                <div>
                     <div>on <em>Custom</em> Album Design</div>
                </div>
                <button>Shop Now</button>
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
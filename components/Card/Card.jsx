export default function Card(props) {
    const { imageUrl, caption } = props
    const styles = {
        backgroundImage: `url(${imageUrl})`,
        backgroudPosition: 'center center',
        backgroundSize: 'cover',
    }

  return (
    <div className="card focusable">
        <div className="image" style={styles}>
            {caption}
        </div>
    </div>
  )
}
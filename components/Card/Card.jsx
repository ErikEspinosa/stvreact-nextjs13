import { useFocusable } from "@noriginmedia/norigin-spatial-navigation"

export default function Card(props) {
    const { ref, focused } = useFocusable() 
    const { imageUrl, caption } = props
    const styles = {
        backgroundImage: `url(${imageUrl})`,
        backgroudPosition: 'center center',
        backgroundSize: 'cover',
    }

  return (
    <div 
      ref={ref} 
      className={focused? 'card focused' : 'card'}
    >
      <div className="image" style={styles}>
          {caption}
      </div>
    </div>
  )
}
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation"


export default function Card(props) {
    const onPress = (extraProps, KeyPressDetails) => console.log(extraProps, KeyPressDetails.pressedKeys)

    const { ref, focused } = useFocusable({
      extraProps:{caption:props.caption}, 
      onEnterPress: onPress,
      saveLastFocusedChild: false
    }) 
    
    const { imageUrl, caption } = props
    const styles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center center',
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
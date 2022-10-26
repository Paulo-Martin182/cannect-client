import Lottie from 'react-lottie'
import { animationSelected } from '../../utils/selectIcons'

type AnimatedIconProps = {
  name: string
}

const AnimatedIcon = ({ name }: AnimatedIconProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationSelected(name),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div>
      <Lottie options={defaultOptions} height={100} width={150} />
    </div>
  )
}

export default AnimatedIcon

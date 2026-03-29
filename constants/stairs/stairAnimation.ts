import { StairAnimation } from '@/types'

const stairAnimation: StairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
}

export { stairAnimation }
export default stairAnimation

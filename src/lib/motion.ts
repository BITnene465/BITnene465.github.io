import type { Transition, Variants } from 'framer-motion'

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 32, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -24, filter: 'blur(4px)' },
}

export const pageTransitionSpring: Transition = {
  duration: 0.45,
  ease: [0.4, 0, 0.2, 1],
}

export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 0 0 rgba(0,0,0,0)',
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 25px 65px rgba(5,8,15,0.55)',
  },
}

export const cardTransition: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 22,
}

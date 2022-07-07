import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Motion: FC<Props> = ({ children }) => {
  return (
    <motion.div
      transition={{
        duration: 0.3,
        ease: 'circOut',
      }}
      initial={'unmount'}
      animate={'mount'}
      exit={'unmount'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const variants = {
  unmount: { opacity: 0, transform: 'translateX(-20%)' },
  mount: {
    opacity: 1,
    transform: 'translateX(0%)',
  },
};

export default Motion;

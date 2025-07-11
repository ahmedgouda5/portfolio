'use client';

import { useTheme } from 'next-themes';
import ParticlesBg from 'particles-bg';

const ParticlesBackground = () => {
const { theme } = useTheme();

  const particleType = theme === 'dark' ? 'tadpole' : 'cobweb';

  return (
    <>
      <ParticlesBg type={particleType}  bg={true} />
    </>
  );
};

export default ParticlesBackground;

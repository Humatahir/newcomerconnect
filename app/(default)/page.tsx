export const metadata = {
  title: 'Home - Newcomer Connect',
  description: 'Your trusted partner for a new beginning in Canada.',
};

import Hero from '@/components/hero-home';
import FeaturesHome from '@/components/features-home';
import FeaturesPlanet from '@/components/features-planet';
import WallOfLove from '@/components/wall-of-love';
import Faq from '@/components/faq';
import Cta from '@/components/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesHome />
      <WallOfLove />
      <FeaturesPlanet />
      <Faq />
      <Cta />
    </>
  );
}

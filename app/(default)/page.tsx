export const metadata = {
  title: 'Canadian Immigration & Settlement Services | Newcomer Connect',
  description: 'Your trusted partner for a new beginning in Canada. We offer expert immigration consulting, pre-arrival planning, and post-arrival settlement support to help you move to Canada with confidence.',
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

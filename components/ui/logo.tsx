import Link from 'next/link'
import Image from 'next/image';
import NewLogo from '@/public/images/clear newcomer connect logo.png';

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Newcomer Connect">
      <Image src={NewLogo} width={150} alt="Newcomer Connect" />
    </Link>
  );
}

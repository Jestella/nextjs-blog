import Link from 'next/link';

export default function Navbar() {
  return (
    <h2>
      <Link href='/'>
        <a className='colorOrange'>Blog.</a>
      </Link>
    </h2>
  );
}

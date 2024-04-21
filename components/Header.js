import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-14 h-14 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-1" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}

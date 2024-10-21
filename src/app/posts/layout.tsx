import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <aside>
        <nav>
          <Link
            href='/posts/1'
            className='block px-4  w-[200px] py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Post 1
          </Link>
          <Link
            href='/posts/2'
            className='block w-[200px] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Post 2
          </Link>
          <Link
            href='/posts/3'
            className='block w-[200px] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Post 3
          </Link>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}

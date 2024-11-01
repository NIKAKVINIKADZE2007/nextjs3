'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navlinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forget-password', href: '/forget-password' },
];

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div>
          <nav>
            {navlinks.map((link) => {
              return (
                <div key={link.name}>
                  <Link
                    className='px-3 py-2 rounded bg-blue-500'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </nav>
          <main> {children}</main>
        </div>
      </body>
    </html>
  );
}

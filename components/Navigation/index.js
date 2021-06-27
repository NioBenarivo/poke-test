import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { navigationWrapper } from './styles';

function Navigation() {
  const router = useRouter();
  return (
    <div className={navigationWrapper}>
      <Link href="/pokemon/list">
        <a className={router.pathname === '/pokemon/list' ? 'active' : ''}>Pokemon List</a>
      </Link>
      <Link href="/pokemon/captured">
        <a className={router.pathname === '/pokemon/captured' ? 'active' : ''}>Captured Pokemon</a>
      </Link>
    </div>
  )
}

export default React.memo(Navigation)

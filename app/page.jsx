'use client';

import { EmailEditor } from '@react-email/editor';

export default function Page() {
  return (
    <main style={{ maxWidth: 640, margin: '6rem auto' }}>
      <EmailEditor content="<p>TypeScript support</p>" />
    </main>
  );
}

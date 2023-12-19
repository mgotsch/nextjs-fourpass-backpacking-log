import '../styles/index.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | MG Photography',
    default: 'MG Photography',
  },
  description: 'The photos and travels of Mac Gotsch.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
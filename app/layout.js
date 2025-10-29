import '../styles/globals.css';

export const metadata = {
  title: 'TapFeast',
  description: 'Tablet-based menu and ordering system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen text-gray-800">
        {children}
      </body>
    </html>
  )
}

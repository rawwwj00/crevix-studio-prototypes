import './globals.css';

export const metadata = {
  title: 'Luxe Salon & Spa | Premium Beauty Experience',
  description: 'Experience the art of beauty at Luxe Salon & Spa. Premium haircuts, coloring, facials, and makeup services in a luxurious setting. Book your transformation today.',
  keywords: 'salon, spa, haircut, beauty, luxury, styling, coloring, facial, makeup, grooming',
  openGraph: {
    title: 'Luxe Salon & Spa | Premium Beauty Experience',
    description: 'Experience the art of beauty at Luxe Salon & Spa. Premium services in a luxurious setting.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

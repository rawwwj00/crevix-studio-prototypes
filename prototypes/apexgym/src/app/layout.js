import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import PageTransition from '@/components/PageTransition';

export const metadata = {
  title: 'APEX FITNESS — Premium Gym & Training Center',
  description: 'Transform your body and mind at APEX FITNESS. World-class equipment, expert trainers, and premium group classes. Start your fitness journey today.',
  keywords: 'gym, fitness, training, workout, classes, personal trainer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}

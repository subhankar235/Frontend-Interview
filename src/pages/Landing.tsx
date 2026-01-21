import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DashboardPreview from '../components/DashboardPreview';

// Add the props interface
interface LandingProps {
  onStart: () => void;
}

// Accept the onStart prop
function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero onStart={onStart} />  {/* Pass it to Hero */}
      <DashboardPreview />
    </div>
  );
}

export default Landing;
import HomePageChild from '../src/components/Layout/HomePageChild';
import HomePageContent from '../src/components/Layout/HomePageContent';
import Hi from '../src/components/about/Hi';

function About() {
  return (
    <HomePageContent>
      <HomePageChild>
        <Hi />
      </HomePageChild>
    </HomePageContent>
  );
}

export default About;

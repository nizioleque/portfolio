import CardContent from '../CardContent';
import Section from '../Section';
import SectionContent from '../SectionContent';

function Projects() {
  return (
    <Section id='projects'>
      <SectionContent
        title='Projects'
        description='Whenever I come up with a new programming project, I rush to actualize it. My attention span never exceeds thirty minutes, so I give up after a couple of lines of code. And then I forget about it for the rest of my life. This page is the ideal place to store those discarded scraps of code.'
        cards={
          <>
            <CardContent name='content'></CardContent>
            <CardContent name='coming'></CardContent>
            <CardContent name='soon'></CardContent>
          </>
        }
      />
    </Section>
  );
}

export default Projects;

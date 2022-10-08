import { CardContent, Card } from '@mui/material';
import ExpandableCard from '../ExpandableCard';
import Section from '../Section';
import SectionContent from '../SectionContent';

function Extensions() {
  return (
    <Section id='extensions'>
      <SectionContent
        title='Browser extensions'
        description='Since I comprehended the immense potential of browser extensions at 13 years old, I have created a lengthy list of ideas. Surprisingly, I managed to turn a couple of them into functional products.'
        cards={
          <>
            <ExpandableCard>
              Ea minim mollit eiusmod magna ad voluptate. Ut minim dolore
              deserunt ea. Enim et eu adipisicing ipsum sit in. Officia tempor
              sunt qui incididunt laboris enim minim minim culpa id amet
              incididunt mollit nisi.
            </ExpandableCard>
            <ExpandableCard>
              <CardContent>
                Ea minim mollit eiusmod magna ad voluptate. Ut minim dolore
                deserunt ea. Enim et eu adipisicing ipsum sit in. Officia tempor
                sunt qui incididunt laboris enim minim minim culpa id amet
                incididunt mollit nisi. Nostrud excepteur magna reprehenderit
                sunt incididunt excepteur voluptate excepteur exercitation culpa
                eu eu. Dolor incididunt elit commodo consectetur officia in.
                Cillum velit excepteur aliqua eu enim.
              </CardContent>
            </ExpandableCard>
            <ExpandableCard>
              <CardContent>
                Ea minim mollit eiusmod magna ad voluptate. Ut minim dolore
                deserunt ea. Enim et eu adipisicing ipsum sit in. Officia tempor
                sunt qui incididunt laboris enim minim minim culpa id amet
                incididunt mollit nisi.
              </CardContent>
            </ExpandableCard>
            <Card sx={{ width: 400, flexShrink: 0 }}>
              <CardContent>
                Ea minim mollit eiusmod magna ad voluptate. Ut minim dolore
                deserunt ea. Enim et eu adipisicing ipsum sit in. Officia tempor
                sunt qui incididunt laboris enim minim minim culpa id amet
                incididunt mollit nisi.
              </CardContent>
            </Card>
            <Card sx={{ width: 400, flexShrink: 0 }}>
              <CardContent>
                Ea minim mollit eiusmod magna ad voluptate. Ut minim dolore
                deserunt ea. Enim et eu adipisicing ipsum sit in. Officia tempor
                sunt qui incididunt laboris enim minim minim culpa id amet
                incididunt mollit nisi.
              </CardContent>
            </Card>
          </>
        }
      />
    </Section>
  );
}

export default Extensions;

import CardContent from '../CardContent';
import nagasakiIcon from '../../assets/projectIcons/nagasakiIcon.png';

function ProjectsCards() {
  return (
    <>
      <CardContent
        name='Splitsmart'
        description='Split expenses with friends, with ease. Work in progress.'
      />
      <CardContent
        name='Polygon Paint'
        description='Draw polygons on a canvas and make them dance! University project, but cool.'
      />
      <CardContent
        icon={nagasakiIcon}
        name='Nagasaki Minesweeper'
        description='Bombs go boom. Created in Flutter by the Spicy Nachos team.'
      />
      <CardContent
        name='Typing Challenge'
        description='How fast can you type? A simple web game created for my classes for Ukrainian refugees.'
      />
      {/* TODO Add italics to 'this' */}
      <CardContent name='Portfolio' description='this.' />
    </>
  );
}

export default ProjectsCards;

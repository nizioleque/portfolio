import mousePinchToZoomIcon from '../../assets/extensionIcons/mousePinchToZoomIcon.png';
import ytCustomSpeedIcon from '../../assets/extensionIcons/ytCustomSpeedIcon.png';
import ytDistractionKillerIcon from '../../assets/extensionIcons/ytDistractionKillerIcon.png';
import searchShortcutIcon from '../../assets/extensionIcons/searchShortcutIcon.png';
import CardContent from '../CardContent';

function ExtensionsCards() {
  return (
    <>
      <CardContent
        icon={mousePinchToZoomIcon}
        name='Mouse Pinch-To-Zoom'
        description='Zoom in on a specific part of the website, like you would with a
        touchpad gesture!'
      />
      <CardContent
        icon={ytCustomSpeedIcon}
        name='YouTube Custom Speed'
        description='Change the speed of Youtube videos to whatever you like, with customizable presets and keyboard shortcuts!'
      />
      <CardContent
        icon={ytDistractionKillerIcon}
        name='YT Distraction Killer'
        description="Remove distracting elements from YouTube's layout!"
      />
      <CardContent
        icon={searchShortcutIcon}
        name='Search Shortcut'
        description='Activate search boxes with a keyboard shortcut!'
      />
    </>
  );
}

export default ExtensionsCards;

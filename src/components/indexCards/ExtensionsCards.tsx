import React from 'react';
import ExtensionCard from '../ExtensionCard';

import mousePinchToZoomIcon from '../../assets/extensionIcons/mousePinchToZoomIcon.png';
import ytCustomSpeedIcon from '../../assets/extensionIcons/ytCustomSpeedIcon.png';
import ytDistractionKillerIcon from '../../assets/extensionIcons/ytDistractionKillerIcon.png';
import searchShortcutIcon from '../../assets/extensionIcons/searchShortcutIcon.png';

function ExtensionsCards() {
  return (
    <>
      <ExtensionCard
        icon={mousePinchToZoomIcon}
        name='Mouse Pinch-To-Zoom'
        description='Zoom in on a specific part of the website, like you would with a
        touchpad gesture!'
        storeUrl='https://chrome.google.com/webstore/detail/mouse-pinch-to-zoom/pffiadlahfhoniddbipeiiohjnlongfi'
        githubUrl='https://github.com/nizioleque/mouse-pinch-to-zoom'
      />
      <ExtensionCard
        icon={ytCustomSpeedIcon}
        name='YouTube Custom Speed'
        description='Change the speed of Youtube videos to whatever you like, with customizable presets and keyboard shortcuts!'
        storeUrl='https://chrome.google.com/webstore/detail/youtube-custom-speed/kmfcinojnfabkpndlgomnfjllgeppegb'
        githubUrl='https://github.com/nizioleque/youtube-custom-speed'
      />
      <ExtensionCard
        icon={ytDistractionKillerIcon}
        name='YT Distraction Killer'
        description="Remove distracting elements from YouTube's layout!"
        storeUrl='https://chrome.google.com/webstore/detail/youtube-distraction-kille/pahjidceabkifggkmokpmlmhoaiflaeh'
        githubUrl='https://github.com/nizioleque/youtube-distraction-killer'
      />
      <ExtensionCard
        icon={searchShortcutIcon}
        name='Search Shortcut'
        description='Activate search boxes with a keyboard shortcut!'
        storeUrl='https://chrome.google.com/webstore/detail/search-shortcut/nnnejpimaidlnnhnfnkjanmkjigdamgm'
        githubUrl='https://github.com/nizioleque/search-shortcut'
      />
    </>
  );
}

export default ExtensionsCards;

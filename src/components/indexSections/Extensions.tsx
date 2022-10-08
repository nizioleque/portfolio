import Section from '../Section';
import SectionContent from '../SectionContent';
import mousePinchToZoomIcon from '../../assets/extensionIcons/mousePinchToZoomIcon.png';
import ytCustomSpeedIcon from '../../assets/extensionIcons/ytCustomSpeedIcon.png';
import ytDistractionKillerIcon from '../../assets/extensionIcons/ytDistractionKillerIcon.png';
import searchShortcutIcon from '../../assets/extensionIcons/searchShortcutIcon.png';
import ExtensionCard from '../ExtensionCard';

function Extensions() {
  return (
    <Section id='extensions'>
      <SectionContent
        title='Browser extensions'
        description='Since I comprehended the immense potential of browser extensions at 13 years old, I have created a lengthy list of ideas. Surprisingly, I managed to turn a couple of them into functional products.'
        cards={
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
        }
      />
    </Section>
  );
}

export default Extensions;

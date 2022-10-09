import { GitHub } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import CardContent, { CardContentProps } from '../CardContent';
import Section from '../Section';
import SectionContent from '../SectionContent';

type AutoHotkeyCardProps = CardContentProps & {
  githubUrl: string;
};

const AutoHotkeyCard = ({
  githubUrl,
  ...cardContentProps
}: AutoHotkeyCardProps) => {
  return (
    <CardContent {...cardContentProps}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography>Code & downloads on GitHub</Typography>
        <IconButton href={githubUrl} target='_blank'>
          <GitHub fontSize='large' />
        </IconButton>
      </Box>
    </CardContent>
  );
};

function AutoHotkey() {
  return (
    <Section id='autohotkey'>
      <SectionContent
        title='AutoHotkey'
        description='I refuse to put up with the limitations of the OS. When I am annoyed by the lack of functionality, I add it by myself. To achieve this goal I have chosen AutoHotkey and AutoIt — two incomprehensible and obsolete languages.'
        cards={
          <>
            <AutoHotkeyCard
              name='MX Master Gesture AltTab'
              description="Stop wasting time reaching for your Alt and Tab keys! A new way to switch windows using the MX Master's gesture button."
              githubUrl='https://github.com/nizioleque/AutoHotkey/tree/master/MX%20Master%20Gesture%20AltTab'
            />
            <AutoHotkeyCard
              name='Mouse XButtons'
              description="And if you don't use an MX Master – here's something for you: easily switch windows using the Back and Forward buttons of your boring mouse!"
              githubUrl='https://github.com/nizioleque/AutoHotkey/blob/master/Mouse%20XButtons'
            />
            <AutoHotkeyCard
              name='Horizontal Scroll'
              description='As simple as that – scroll, but horizontally. Does not work in MS Paint on Windows 10, for some reason. Fortunately, this bug has been fixed in Windows 11.'
              githubUrl='https://github.com/nizioleque/AutoHotkey/blob/master/Horizontal%20Scroll'
            />
            <AutoHotkeyCard
              name='Always on Top'
              description='Pin a window to stay always on top of other windows. You can even make it semi-transparent and customize the keyboard shortcut!'
              descriptionExpanded='Recently Microsoft added this functionality to their PowerToys – you might want to use that instead…'
              githubUrl='https://github.com/nizioleque/AutoHotkey/blob/master/Always%20on%20Top'
              heightExpanded={400}
            />
            <AutoHotkeyCard
              name='Music Hotkeys'
              description='Created for my old laptop with no media keys. Maps Play/Pause, Previous/Next track keys to Home/End/PgUp/PgDn'
              descriptionExpanded="My new laptop also doesn't have proper media keys, so expect an updated version soon!"
              githubUrl='https://github.com/nizioleque/AutoHotkey/blob/master/Music%20Hotkeys'
            />
          </>
        }
      />
    </Section>
  );
}

export default AutoHotkey;

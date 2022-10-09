import { GitHub } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import chromeWebStoreButton from '../assets/chromeWebStoreButton.png';
import CardContent from './CardContent';

interface ExtensionCardProps {
  icon: StaticImageData;
  name: string;
  description: string;
  storeUrl: string;
  githubUrl: string;
}

function ExtensionCard({
  storeUrl,
  githubUrl,
  ...cardContentProps
}: ExtensionCardProps) {
  return (
    <CardContent {...cardContentProps}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          component='a'
          href={storeUrl}
          target='_blank'
          sx={{
            '& img': { display: 'block' },
            height: chromeWebStoreButton.height,
          }}
        >
          <Image src={chromeWebStoreButton} />
        </Box>
        <IconButton href={githubUrl} target='_blank'>
          <GitHub fontSize='large' />
        </IconButton>
      </Box>
    </CardContent>
  );
}

export default ExtensionCard;

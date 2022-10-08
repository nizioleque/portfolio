import { GitHub } from '@mui/icons-material';
import { Box, Typography, IconButton } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import ExpandableCard from './ExpandableCard';
import chromeWebStoreButton from '../assets/chromeWebStoreButton.png';

interface ExtensionCardProps {
  icon: StaticImageData;
  name: string;
  description: string;
  storeUrl: string;
  githubUrl: string;
}

function ExtensionCard({
  icon,
  name,
  description,
  storeUrl,
  githubUrl,
}: ExtensionCardProps) {
  return (
    <ExpandableCard
      height={250}
      heightExpanded={350}
      content={
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              mb: 2,
            }}
          >
            <Image src={icon} height={90} width={90} />
            <Typography
              sx={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                letterSpacing: -0.5,
              }}
            >
              {name}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '1.1rem' }}>{description}</Typography>
        </>
      }
      contentExpanded={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 4 }}>
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
      }
    ></ExpandableCard>
  );
}

export default ExtensionCard;

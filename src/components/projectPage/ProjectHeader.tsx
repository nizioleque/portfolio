import { Download, GitHub, Paid } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ProjectMeta } from '../../types';

interface ProjectHeaderProps {
  meta: ProjectMeta;
}

const ImageSize = 108;

function ProjectHeader({ meta }: ProjectHeaderProps) {
  const { pathname } = useRouter();
  const isCard = ['/', '/all-projects'].includes(pathname);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
      }}
    >
      <Image
        alt={`${meta.name} icon`}
        src={meta.icon}
        height={ImageSize}
        width={ImageSize}
        style={{ objectFit: 'contain' }}
      />
      <Typography
        variant='h3'
        sx={{
          marginTop: 2,
          marginBottom: 1,
          textAlign: 'center',
          fontSize: '2.2rem',
          color: `hsl(${meta.hue}deg 100% 82%)`,
        }}
      >
        {meta.name}
      </Typography>
      <Typography
        sx={{
          fontSize: '1.2rem',
          fontWeight: 700,
        }}
      >
        {meta.description}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          columnGap: isCard ? 2 : 4,
          rowGap: 2,
          marginY: 2,
          '& > *': { flex: 1, minWidth: 120, display: 'flex' },
          '& .MuiButton-root': {
            color: `hsl(${meta.hue}deg 100% 94%)`,
            backgroundColor: `hsl(${meta.hue}deg 50% 26%)`,
            '&:hover': {
              backgroundColor: `hsl(${meta.hue}deg 50% 32%)`,
            },
          },
        }}
      >
        {meta.downloadUrl && (
          <Button
            href={meta.downloadUrl}
            target='_blank'
            startIcon={<Download />}
          >
            Download
          </Button>
        )}
        {meta.codeUrl && (
          <Button href={meta.codeUrl} target='_blank' startIcon={<GitHub />}>
            Code
          </Button>
        )}
        <Button
          href='https://www.buymeacoffee.com/nizioleque'
          target='_blank'
          startIcon={<Paid />}
        >
          Support
        </Button>
      </Box>
    </Box>
  );
}

export default ProjectHeader;

import { ProjectMeta } from '../../types';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import { Download, GitHub, Paid } from '@mui/icons-material';

interface ProjectHeaderProps {
  meta: ProjectMeta;
}

const IMAGE_SIZE = 100;

function ProjectHeader({ meta }: ProjectHeaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        alignItems: 'center',
      }}
    >
      <Image
        alt={`${meta.name} icon`}
        src={meta.icon}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
      />
      <Typography
        variant='h3'
        sx={{
          fontSize: '2.2rem',
          color: 'hsl(43deg 100% 50%)',
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
          columnGap: 3,
          rowGap: 2,
          '& > *': { flex: 1, minWidth: 120, display: 'flex' },
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

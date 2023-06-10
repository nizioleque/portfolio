import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProjectMeta } from '../../types';
import Card from '../Card/Card';
import CardModal from '../Card/CardModal';

interface ProjectTileProps {
  project: ProjectMeta;
}

function ProjectTile({ project }: ProjectTileProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();

  const closeModal = () => {
    setIsModalOpen(false);
    router.back();
  };

  const targetUrl = `/${project.id}`;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isModalOpen && url !== targetUrl) {
        setIsModalOpen(false);
      } else if (
        // !isModalOpen &&
        url === targetUrl
      ) {
        // TODO handle forward navigation
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [isModalOpen, router.events, targetUrl]);

  return (
    <Box>
      <Link href={'/all-projects'} as={targetUrl} passHref legacyBehavior>
        <Card
          hue={project.hue}
          sx={{ maxWidth: 500, marginLeft: 6 }}
          layoutId={project.id}
          onClick={() => setIsModalOpen(true)}
        >
          <Stack
            sx={{
              flexDirection: 'row',
              gap: 3,
              alignItems: 'center',
            }}
          >
            <Image
              alt={`${project.name} icon`}
              src={project.icon}
              height={40}
              width={40}
              style={{ objectFit: 'contain' }}
            />
            <Typography variant='h3' textAlign='center'>
              {project.name}
            </Typography>
          </Stack>
        </Card>
      </Link>
      <CardModal
        closeModal={closeModal}
        id={project.id}
        isModalOpen={isModalOpen}
      />
    </Box>
  );
}

export default ProjectTile;

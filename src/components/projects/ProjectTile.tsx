import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TileImageSize } from '../../constants';
import { responsiveSize } from '../../theme/responsiveSize';
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
      } else if (!isModalOpen && url === targetUrl) {
        setIsModalOpen(true);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router, isModalOpen, targetUrl]);

  return (
    <Box>
      <Link href={'/projects'} as={targetUrl} passHref legacyBehavior>
        <Card
          hue={project.hue}
          sx={{
            ...responsiveSize(2, undefined, 'paddingY'),
            borderRadius: 8,
          }}
          layoutId={project.id}
          onClick={() => setIsModalOpen(true)}
        >
          <Stack
            sx={{
              flexDirection: 'row',
              ...responsiveSize(3, undefined, 'gap'),
              alignItems: 'center',
            }}
          >
            <Box
              component={Image}
              alt={`${project.name} icon`}
              src={project.icon}
              sx={{
                ...responsiveSize(TileImageSize, undefined, 'height'),
                ...responsiveSize(TileImageSize, undefined, 'width'),
                objectFit: 'contain',
              }}
            />
            <Typography
              variant='h6'
              sx={{
                marginRight: 1,
                ...responsiveSize('1.3rem'),
              }}
            >
              {project.name}
            </Typography>
          </Stack>
        </Card>
      </Link>
      <CardModal
        closeModal={closeModal}
        id={project.id}
        isModalOpen={isModalOpen}
        hue={project.hue}
      />
    </Box>
  );
}

export default ProjectTile;

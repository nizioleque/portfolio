import { GitHub } from '@mui/icons-material';
import { Box } from '@mui/material';
import useResponsiveLayout from '../../hooks/useResponsiveLayout';
import HomePageChild from '../Layout/HomePageChild';
import LinkButton from '../about/LinkButton';

function GitHubTile() {
  const { isDesktop } = useResponsiveLayout();

  return (
    <HomePageChild>
      <Box
        sx={{
          paddingY: 2,
          paddingX: 3,
          borderRadius: 8,

          height: isDesktop ? 77 : 70.6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0.5,

          border: '4px solid',
          borderColor: 'rgb(255 255 255 / 6%)',
          color: 'text.secondary',
        }}
      >
        More on{' '}
        <LinkButton icon={<GitHub />} href='https://github.com/nizioleque'>
          GitHub
        </LinkButton>
      </Box>
    </HomePageChild>
  );
}

export default GitHubTile;

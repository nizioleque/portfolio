import { Avatar, Stack } from '@mui/material';
import Image from 'next/image';
import avatar from '../src/assets/avatar.jpg';
import HomePageContent from '../src/components/Layout/HomePageContent';
import ChatBubble from '../src/components/about/ChatBubble';

export const AvatarSize = 128;

function About() {
  return (
    <HomePageContent>
      <Stack direction='row' alignItems='center' gap={4}>
        <Avatar sx={{ height: AvatarSize, width: AvatarSize }}>
          <Image alt='Avatar' src={avatar} fill />
        </Avatar>
        <ChatBubble>Hi!</ChatBubble>
      </Stack>
    </HomePageContent>
  );
}

export default About;

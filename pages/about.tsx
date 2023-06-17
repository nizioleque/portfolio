import { Avatar, Stack } from '@mui/material';
import Image from 'next/image';
import avatar from '../src/assets/avatar.jpg';
import HomePageChild from '../src/components/Layout/HomePageChild';
import HomePageContent from '../src/components/Layout/HomePageContent';
import ChatBubble from '../src/components/about/ChatBubble';

const AvatarSize = 128;

function About() {
  return (
    <HomePageContent>
      {[0, 1, 2, 3, 4, 5].map((k) => (
        <HomePageChild key={k}>
          <Stack direction='row' alignItems='center' gap={4}>
            <Avatar sx={{ height: AvatarSize, width: AvatarSize }}>
              <Image alt='Avatar' src={avatar} fill />
            </Avatar>
            <ChatBubble>Hi!</ChatBubble>
          </Stack>
        </HomePageChild>
      ))}
    </HomePageContent>
  );
}

export default About;

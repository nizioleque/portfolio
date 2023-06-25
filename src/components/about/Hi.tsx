import { Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import avatar from '../../assets/avatar.jpg';
import ChatBubble from './ChatBubble';

const AvatarSize = 128;

function Hi() {
  return (
    <Stack direction='row' alignItems='center' gap={4}>
      <Avatar sx={{ height: AvatarSize, width: AvatarSize }}>
        <Image alt='Avatar' src={avatar} fill />
      </Avatar>
      <ChatBubble>Hi!</ChatBubble>
    </Stack>
  );
}

export default Hi;

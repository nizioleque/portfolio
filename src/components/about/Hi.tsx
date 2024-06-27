import { Avatar, Box } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import avatarFunny from "../../assets/avatar-funny.jpg";
import avatar from "../../assets/avatar.jpg";
import HomePageChild from "../Layout/HomePageChild";
import ChatBubble from "./ChatBubble";

const AvatarSize = 140;

function Hi() {
  return (
    <HomePageChild>
      <Stack direction="row" alignItems="center" gap={4}>
        <Avatar sx={{ height: AvatarSize, width: AvatarSize }}>
          <Image alt="Avatar" src={avatar} fill />
          <Box
            component={Image}
            src={avatarFunny}
            fill
            alt=""
            sx={{
              opacity: 0,
              "&:hover": { opacity: 1 },
            }}
          />
        </Avatar>
        <ChatBubble>Hi!</ChatBubble>
      </Stack>
    </HomePageChild>
  );
}

export default Hi;

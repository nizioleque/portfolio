import NextImage from 'next/image';
import { ComponentProps } from 'react';

type ImageProps = ComponentProps<typeof NextImage>;

function Image(props: ImageProps) {
  return <NextImage quality={90} {...props} />;
}

export default Image;

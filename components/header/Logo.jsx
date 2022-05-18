import NextLink from 'next/link';
import { Heading, HStack } from '@chakra-ui/react';
import { DraughtsCrown } from '../draughts/board/views/DraughtsCrown';

export function Logo() {
  return (
    <NextLink href="/" passHref>
      <HStack as="a">
        <DraughtsCrown
          bg="black"
          padding={1}
          borderRadius="50%"
          height="1.5em"
          width="1.5em"
        />
        <Heading fontSize="2xl">draughts.org</Heading>
      </HStack>
    </NextLink>
  );
}

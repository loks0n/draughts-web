import { HStack } from '@chakra-ui/react';
import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <HStack justify="space-between">
      <Logo />
      <Navigation />
    </HStack>
  );
}

import NextLink from 'next/link';
import { useRef } from 'react';
import {
  HStack,
  VStack,
  IconButton,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const pages = ['rules', 'strategies', 'history'];

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <HStack as="nav" display={['none', 'none', 'block']} spacing={[2, 2, 4]}>
        {pages.map((page) => (
          <NextLink key={`navlink-desktop-${page}`} href={`/${page}`} passHref>
            <Link fontSize="lg" fontWeight="bold">
              {page}
            </Link>
          </NextLink>
        ))}
      </HStack>
      <IconButton
        ref={btnRef}
        display={['block', 'block', 'none']}
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        size="sm"
      />
      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Explore</DrawerHeader>
          <DrawerBody>
            <VStack as="nav">
              {pages.map((page) => (
                <NextLink
                  key={`navlink-mobile-${page}`}
                  href={`/${page}`}
                  passHref
                >
                  <Link fontSize="lg" fontWeight="bold">
                    {page}
                  </Link>
                </NextLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

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
          <Link
            key={`navlink-desktop-${page}`}
            fontSize="lg"
            fontWeight="bold"
            href={`/${page}`}
          >
            {page}
          </Link>
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
                <Link
                  key={`navlink-mobile-${page}`}
                  fontSize="lg"
                  fontWeight="bold"
                  href={`/${page}`}
                >
                  {page}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

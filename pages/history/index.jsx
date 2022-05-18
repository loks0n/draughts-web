/* eslint-disable unicorn/filename-case */
import Head from 'next/head';
import { Container, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { Header } from '../../components/header/Header';
import aquerqueImage from './aquerque.jpeg';
import draughts1700sImage from './draughts-1700s.webp';

export default function History() {
  return (
    <Grid
      as="main"
      rowGap={[3, 4]}
      columnGap={[3, 4, 5, 6]}
      templateRows={[
        '0 auto minmax(4em, 1fr) 100vw auto minmax(4em, 1fr) 0',
        '0 auto min(78vw, 78vh) 1fr 0',
      ]}
      templateColumns={[
        '0 1fr 1fr 0',
        '0 minmax(6em, 1fr) minmax(auto, 40vh) minmax(auto, 40vh) 0',
        '0 minmax(6em, 1fr) minmax(auto, 40vh) minmax(auto, 40vh) minmax(6em, 1fr) 0',
      ]}
      minH="100vh"
    >
      <Head>
        <title>draughts.org - play draughts and checkers online free</title>
      </Head>
      <GridItem colSpan={[2, 3, 2]} colStart={[2, 2, 3]} rowStart={2}>
        <Header />
      </GridItem>
      <GridItem
        colSpan={[4, 2]}
        colStart={[0, 3]}
        rowSpan={2}
        rowStart={[4, 3]}
      >
        <VStack padding={[3, 0]} spacing={6}>
          <Text>
            An archeological dig in Iraq unearthed the earliest known form of
            the game of Draughts. Carbon dating was used to determine the age of
            the ancient game, and it appears to date back to around 3000 B.C.
            The board and the number of pieces it used were different from the
            Draughts board and pieces used today.
          </Text>
          <Text>
            Around 1400 B.C., the ancient Egyptians used a 5 x 5 board to play a
            game called Aquerque. The game was very popular during this time and
            it was played throughout western civilization for thousands of
            years.
          </Text>
          <Container maxW="md">
            <Image src={aquerqueImage} alt="ancient 5x5 egyption chessboard" />
          </Container>
          <Text>
            Around 1100 A.D., the game of Aquerque changed when a Frenchman
            played it on a chess board using 12 pieces for each player. The name
            of the game also changed. It became known as “Fierges.”
          </Text>
          <Text>
            The next evolution of Draughts happened when the rules changed
            again, making it mandatory to jump Draughts to progress across the
            board. This newer version was more challenging than the old. The old
            version was considered slower and less challenging, and it became a
            social game played by the women of the era and was called “La Jeu
            Pleasant De Dames,” (the pleasant ladies&apos; game). The new, more
            aggressive form of the game became known as “Jeu Force” (Play
            Force).
          </Text>
          <Text>
            Draughts eventually was exported from France to England, Spain, and
            America. In Spain around the mid-1500&apos;s, books began to be
            written about Draughts. In 1756, William Payne, a mathematician in
            England, wrote his own book about Draughts.
          </Text>
          <Container maxW="md">
            <Image
              src={draughts1700sImage}
              alt="draughts being played in the 1700s"
            />
          </Container>
          <Text>
            In 1847, the first Draughts world championship took place. As time
            passed, it became obvious that the game presented openings that gave
            the advantage to one side over the other. Two move restrictions were
            created in which the game was started in a random style. These two
            move restrictions were used mostly by expert players. In modern-day
            Draughts tournaments, three move restrictions are used.
          </Text>
          <Text>
            As technology advanced, it was not long before computer programmers
            began developing very basic Draught games that could be played on
            computers. Alan Turing created a rudimentary Draughts game on paper
            because the computers of the time were not developed enough to run
            his Draughts program. In 1952, Arthur L. Samuel created the first
            Draughts program that could actually be played on a computer. From
            that point forward, computer Draughts games have improved in speed
            and function.
          </Text>
          <Text>
            Present day Draughts programs require less strategic planning and
            more computer data search capability. The Draughts programs employ
            database searches that show all possible combinations when several
            pieces are left on the board.
          </Text>
        </VStack>
      </GridItem>
      <GridItem
        display={['block', 'none']}
        colSpan={2}
        colStart={2}
        rowStart={3}
      >
        <div id="ezoic-pub-ad-placeholder-129" />
      </GridItem>
      <GridItem
        display={['block', 'none']}
        colSpan={2}
        colStart={2}
        rowStart={6}
      >
        <div id="ezoic-pub-ad-placeholder-130" />
      </GridItem>
      <GridItem
        display={['none', 'block']}
        colStart={2}
        rowSpan={[2, 2, 3]}
        rowStart={[3, 3, 2]}
      >
        <div id="ezoic-pub-ad-placeholder-133" />
      </GridItem>
      <GridItem
        display={['none', 'none', 'block']}
        colStart={5}
        rowSpan={[2, 2, 3]}
        rowStart={[3, 3, 2]}
      >
        <div id="ezoic-pub-ad-placeholder-132" />
      </GridItem>
    </Grid>
  );
}
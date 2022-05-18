/* eslint-disable unicorn/filename-case */
import Head from 'next/head';
import {
  Center,
  Container,
  Grid,
  GridItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Header } from '../components/header/Header';

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
        <VStack align="start" padding={[3, 0]} spacing={6}>
          <Text>
            The game of draughts is played on a 64 square checkerboard with
            eight rows of alternating dark and light colored squares.
          </Text>
          <Text>
            There are two players and each begins the game with 12 draughts,
            each player having their own colour.
          </Text>
          <Text>
            The players place their draughts on the three rows of dark squares
            which are closest to them.
          </Text>
          <Text>
            The players then begin playing, making one move at a time.
          </Text>
          <Text>
            The object of the game is to make it so the opponent can&apos;t move
            when it comes to their turn.
          </Text>
          <Text>
            This is done by taking all of their pieces throughout the game, or
            blocking them so they have nowhere to move.
          </Text>
          <Text>
            The single draughts can only move in a forward diagonal direction
            into a square without another piece in it.
          </Text>
          <Text>
            If an opponent&apos;s piece is in the next square, the player can
            jump over it and capture it, removing the piece from the board. They
            can only do this if the next square is empty.
          </Text>
          <Text>Players can never jump over their own piece.</Text>
          <Text>
            When a player makes their way all the way across the board to the
            other players side, their piece will be turned into a King. When
            this happens, one of their previously taken pieces will be put on
            top of the piece which made it to that side.
          </Text>
          <Text>
            Once a piece is made into a king, it will be able to move forward
            and backward, giving it more chances to capture the opponents
            pieces.
          </Text>
          <Text>
            A king can jump as many times as it is able to with regards to the
            necessary squares being unoccupied. However, kings cannot jump over
            pieces which are the same color as them.
          </Text>
          <Text>
            The game will come to an end once a player can no longer make a
            move.
          </Text>
          <Text>
            If both the players can&apos;t move anywhere, the game will end in a
            tie, or draw.
          </Text>
          <Container maxW="md">
            <iframe
              width="370"
              height="315"
              src="https://www.youtube.com/embed/PgNN6CdkYXs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Container>
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

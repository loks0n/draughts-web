/* eslint-disable unicorn/filename-case */
import Head from 'next/head';
import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';
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
        <VStack padding={[3, 0]} spacing={6}>
          <Text>
            Draughts, also known as checkers, is a strategy board game which has
            been around for thousands of years. There are many variants, but the
            most common version is played on an 8x8 chequered board. The two
            player game consists of twelve pieces (men, checkers, draughts)per
            side. The pieces start on the first three rows on the black/dark
            squares only. Men can only advance diagonally &quot;jumping&quot;
            over that piece and landing on a vacant adjacent space. Once all men
            have been captured, the game is won. The game can also be won
            through blocking the opponents ability to move. There are many
            useful tactics to improve your chances of success.
          </Text>
          <Text>
            Crowning, or making a king, greatly improves the power and
            portability of your men. If you can get a piece to the other players
            base line, it can be &quot;crowned&quot;. Another piece is placed on
            top to distinguish it from a regular draught. The king can now be
            moved both forward and backwards, effectively doubling its range.
          </Text>
          <Text>
            As capturing men requires an unoccupied square to jump into, it is
            wise to move you pieces en masse. Try not to leave individual pieces
            isolated. Move fewer pieces in tight formation.
          </Text>
          <Text>
            Try to leave your base line men on station for as long as is
            possible. Any free squares are potential for an opposition crowning.
            They will be unable to make any kings if they cannot land there.
          </Text>
          <Text>
            Draughts, like other board games, works on the general principle of
            trading pieces whenever one is ahead. The material advantage of
            having just one extra man becomes proportionately more significant
            the fewer pieces remain. The chances of crowning will increase
            greatly. One caveat to this general principle, is neglecting
            positional advantage for blind material gain. A king can change the
            course of the game very quickly.
          </Text>
          <Text>
            Sacrificing a draught can appear reckless or careless. But this
            strategy can be used to draw out positional advantage. To clear a
            baseline piece in preparation for crowning for instance, would be a
            good use of the sacrificial tactic.
          </Text>
          <Text>
            The rules for draughts state that if an opponent offers up a piece
            for capture, it must be taken. These &quot;forced moves&quot; can be
            employed to great advantage. If the opposing draught is blocking
            your way to making a king, you can advance another piece to the
            other side of the offending blocker. This will force your opponent
            to capture allowing a clear path to the back line for crowning.
          </Text>
          <Text>
            Blocking is used to frustrate an opposition move. It requires a good
            deal of forward thinking by the opposing player. Trying to second
            guess a plan or series of moves requires a sound knowledge of
            strategy. While blocking is defensive in its purpose(to prevent the
            other player from advancing)it can produce a winning position. If
            all opponent pieces are blocked and he is unable to move, in
            accordance with the game&apos;s rules, he loses the game.
          </Text>
          <Text>Here&apos;s a great video on draughts strategies:</Text>
          <iframe
            width="370"
            height="315"
            src="https://www.youtube.com/embed/Lfo3yfrbUs0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

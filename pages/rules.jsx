/* eslint-disable unicorn/filename-case */
import { AspectRatio } from '@chakra-ui/react';
import Head from 'next/head';
import { DraughtsRulesContent } from '../components/content/DraughtsRulesContent';
import { MainLayout } from '../components/layout/MainLayout';

export default function History() {
  return (
    <MainLayout>
      <Head>
        <title>draughts.org - rules &amp; how to play</title>
      </Head>
      <DraughtsRulesContent />
      <AspectRatio maxW="md" radio={16 / 9}>
        <iframe
          src="https://www.youtube.com/embed/PgNN6CdkYXs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </MainLayout>
  );
}

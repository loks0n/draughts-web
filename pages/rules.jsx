/* eslint-disable unicorn/filename-case */
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
    </MainLayout>
  );
}

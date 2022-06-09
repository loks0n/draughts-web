/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: '/',
        permanent: true,
        source: '/index.html',
      },
      {
        destination: '/',
        permanent: true,
        source: '/games_list.html',
      },
      {
        destination: '/rules',
        permanent: true,
        source: '/the_rules_of_draughts.html',
      },
      {
        destination: '/strategies',
        permanent: true,
        source: '/strategies_for_draughts.html',
      },
      {
        destination: '/history',
        permanent: true,
        source: '/the_evolution_of_draughts.html',
      },
      {
        destination: '/history',
        permanent: true,
        source: '/variations_for_the_game_of_draughts.html',
      },
      {
        destination: '/history',
        permanent: true,
        source: '/the_history_of_draughts.html',
      },
    ];
  },
};

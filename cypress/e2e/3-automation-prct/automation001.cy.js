import NavigationPage from '../pages/NavigationPage';

describe('Navigation Accessibility Test', () => {
  const pages = [
    { path: '/', text: 'Hello' },
    { path: '/practice/', text: 'Practice' },
    { path: '/blog/', text: 'Blog' },
    { path: '/contact/', text: 'Contact' },
  ];

  pages.forEach(({ path, text }) => {
    it(`should access ${path}`, () => {
      NavigationPage.assertPageIsAccessible(path, text);
    });
  });
});

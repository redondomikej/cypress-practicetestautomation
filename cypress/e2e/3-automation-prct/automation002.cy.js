import NavigationPage from '../pages/NavigationPage';

describe('Page Test', () => {
    it(`should visit the page and verify content`, () => {
       NavigationPage.assertPageIsAccessible('/', 'Home');
       NavigationPage.assertPageIsAccessible('/practice/', 'Practice');
       NavigationPage.assertPageIsAccessible('/courses/', 'Courses');
       NavigationPage.assertPageIsAccessible('/blog/', 'Blog');
       NavigationPage.assertPageIsAccessible('/contact/', 'Contact');
    });
});

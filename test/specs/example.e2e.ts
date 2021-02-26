import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.enablePerformanceAudits();
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        const metrics = browser.getMetrics();
        expect(metrics.speedIndex < 1500);
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        browser.disablePerformanceAudits();
    });
});



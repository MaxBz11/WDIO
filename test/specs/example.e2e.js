//const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');
import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('MY LOGIN APPLICATION', () => {

    let credentials = [
        {
            username: "Susie6@yahoo.com",
            password: "cn0PUKwpt3vhHaK"
        }
    ];

    beforeEach( () => {
        LoginPage.open();
    });

    for (const iteration of credentials) {
        xit('should login with valid credentials', () => {
            LoginPage.login(iteration.username, iteration.password);
            expect(ProfilePage.userIcon).toBeExisting();

        });
    }

    xit ('submit button should be disabled if input fields are empty', () => {
        expect(LoginPage.btnSubmit).not.toBeClickable();
    });

    it ('Auth failed if wrong credentiald proveded', () => {
        LoginPage.setUsername('example@example.com');
        LoginPage.setPassword('1234567');
        LoginPage.clickSubmit();
        expect(LoginPage.notification).toHaveText('Auth failed');
    });

});



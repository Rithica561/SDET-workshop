import homepage from "../support/pageObjects/orangeHrm/homepage";
import link from "../support/pageObjects/orangeHrm/link";
import logout from "../support/pageObjects/orangeHrm/logout";
describe('pom', () => {
    const homepage_io =new homepage();
    const links=new link();
    const logOut=new logout

    beforeEach(function() {
     
      homepage_io.visitHome();
      homepage_io.Login();
    });
    it('This is my first Test Case', () => {
       //cy.selectname('Admin')

       links.link_click('Admin')
       logOut.logout1()
        })
});

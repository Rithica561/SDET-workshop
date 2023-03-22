///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>

describe('newtour testing', () => {
    beforeEach(function()
    {
         cy.visit("https://demo.guru99.com/test/newtours/index.php")      
    })
    it('login', () => {
        cy.fixture('example1').then((data)=>{
        //cy.visit("https://demo.guru99.com/test/newtours/index.php")
        data.forEach((user)=>{
        cy.get('a[href^="register"]').contains('REGISTER').click();
        cy.get('#email').type(user.name)
        cy.get("input[name=password]").type(user.password)
        cy.get("input[name=confirmPassword]").type(user.confirmpassword)
        cy.get("input[name=submit]").click()
        })
     })
     })
it('sign on', () => {
    cy.fixture('example1').then((data)=>{
    //cy.visit("https://demo.guru99.com/test/newtours/index.php")
    data.forEach((user)=>{
    cy.get('a[href^="login"]').click();
    cy.get('input[name=userName]').type(user.name)
    cy.get("input[name=password]").type(user.password)
    
    })
})
    cy.get("input[name=submit]").click()
 })

 it('find a fight', () => {
    //cy.visit("https://demo.guru99.com/test/newtours/index.php")
    cy.get('input[name=userName]').type("Rithica")
    cy.get("input[name=password]").type("rithi@123")
    cy.get("input[name=submit]").click()
 })

 it('flight finder', () => {
    //cy.visit("https://demo.guru99.com/test/newtours/index.php")
    cy.get('a[href^="reservation"]').click();
    cy.get('input[type="radio"]').eq(1).check();
    cy.get("select[name=passCount]").select('2').should('have.value','2')
    cy.get("select[name=fromPort]").select('Frankfurt').should('have.value','Frankfurt')
    cy.get("select[name=fromMonth]").select('September').should('have.value','9')
    cy.get("select[name='fromDay']").select('13').should('have.value','13')
    cy.get("select[name=fromPort]").select('New York').should('have.value','New York')
    cy.get("select[name=toMonth]").select('October').should('have.value','10')
    cy.get("select[name='fromDay']").select('14').should('have.value','14')
    cy.get('input[type="radio"]').check('First')
    cy.get("select[name=airline]").select('Blue Skies Airlines').should('have.value','Blue Skies Airlines')
    cy.get('input[type="image"]').click()
    cy.get('img[src="images/home.gif"]').click()


 })
 it('hotels', () => {
    //cy.visit("https://demo.guru99.com/test/newtours/index.php")
    cy.get('a[href^="support"]').contains("Hotel").click();
    cy.log("site is under construction so go to home")
    cy.get('img[src="images/home.gif"]').click()

 })

 it('Car Rentals', () => {
    //cy.visit("https://demo.guru99.com/test/newtours/index.php")
    cy.get('a[href^="support"]').contains("Car Rentals").click();
    cy.log("site is under construction so go to home")
    cy.get('img[src="images/home.gif"]').click()

 })
 it('Car Rentals', () => {
    //cy.visit("https://demo.guru99.com/test/newtours/index.php")
    cy.get('a[href^="support"]').contains("Car Rentals").click();
    cy.log("site is under construction so go to home")
    cy.get('img[src="images/home.gif"]').click()

 })
 it('cruises', () => {
       //cy.visit("https://demo.guru99.com/test/newtours/index.php")
       cy.get('a[href^="index"]').contains("Cruises").click();
       cy.get('input[name=userName]').type("Rithica")
       cy.get("input[name=password]").type("rithi@123")
       cy.get("input[name=submit]").click()
    })
   
 it('Destinations', () => {
    //cy.visit("https://demo.guru99.com/test/newtours/index.php")
    cy.get('a[href^="support"]').contains("Destinations").click();
    cy.log("site is under construction so go to home")
    cy.get('img[src="images/home.gif"]').click()

 })

 it.only('Vacations', () => {
    //cy.visit("https://demo.guru99.com/test/newtours/index.php")
    cy.get('a[href^="support"]').contains("Vacations").click();
    cy.url().should('not.include','Vacations')
    cy.log("site is under construction so go to home")
    cy.get('img[src="images/home.gif"]').click()

 })
});

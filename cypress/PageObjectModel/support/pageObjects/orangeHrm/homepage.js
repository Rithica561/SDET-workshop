class homepage
{
    visitHome()
    {
        cy.visit(Cypress.env("orangeHrm_homepage"));
        cy.wait(10000)
    }
    Login()
    {
        // cy.get('input[name="username"][placeholder="Username"]').type('Admin')
        // cy.get('input[name="password"][placeholder="Password"]').type('admin123')
        cy.wait(10000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.wait(10000)
    }
}
export default homepage; 
class logout
{
    logout1()
    {
        cy.wait(6000)
        cy.get('.oxd-userdropdown-tab .oxd-userdropdown-icon').click()
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    }
}
export default logout;
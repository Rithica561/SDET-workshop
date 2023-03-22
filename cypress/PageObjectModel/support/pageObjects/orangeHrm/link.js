class link
{
    link_click(links)
    {
        cy.contains(links).click()
    }
}
export default link;
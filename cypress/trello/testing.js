///<reference types = "Cypress"/>

describe('trello api testing', () => {
    var id;
    var apikey="a2915871b9af180838dc8ef6070595b5";
    var token="ATTA92ab74a6859d7b58b330a23c69610dcfbf4edd10cb50b692248aa40234df602f51E3B8E9";
    it('Create', () => {
        cy.request({
            method:"POST",
            url: 'https://api.trello.com/1/boards/?name='+id+'&key='+apikey+'&token='+token+''
        }).then(response => {
            expect(response.status).to.eql(200);
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)
            id = body.id
        })
    });

    it('get a board', () => {
        
        cy.request({
            method:"GET",
            url:'https://api.trello.com/1/boards/'+id+'?key='+apikey+'&token='+token+'',
            headers:
            {
                accept:"application/json"
            }
        }).then((response)=>
        {
            cy.log(response.body)
            expect(response.status).to.eq(200)
        })

    });
        it('update', () => {
        
            cy.request({
                method:"PUT",
                url:'https://api.trello.com/1/boards/'+id+'?key='+apikey+'&token='+token+'&name=neww',
                headers:
                {
                    accept:"application/json"
                }
            }).then((response)=>
            {
                cy.log(response.body)
                expect(response.status).to.eq(200)
            })
    
        });


        it('delete', () => {
        
            cy.request({
                method:"DELETE",
                url:'https://api.trello.com/1/boards/'+id+'?key='+apikey+'&token='+token+'',

                headers:
                {
                    accept:"application/json"
                }
            }).then((response)=>
            {
                cy.log(response.body)
                expect(response.status).to.eq(200)
            })
    
        })
    });

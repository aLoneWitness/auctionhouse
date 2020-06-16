describe('Unauthenticated User Rerouting', () => {
    it('Should redirect to login from main page', () => {
        cy.visit('localhost:8080')

        cy.url().should('include', '/login')
    })

    it('Should redirect to login from placing page', () => {
        cy.visit('localhost:8080/place')
        cy.url().should('include', '/login')
    })

    it('Should redirect to login from user page', () => {
        cy.visit('localhost:8080/users/MCSteve')

        cy.url().should('include', '/login')
    })

    it('Should redirect to login from item page', () => {
        cy.visit('localhost:8080/item/131')

        cy.url().should('include', '/login')
    })

    it('Should NOT redirect to login from register page (and stay on register page)', () => {
        cy.visit('localhost:8080/register')

        cy.url().should('include', '/register')
    })
})

describe('Authentication', () => {
    it('Registration', () => {
        cy.visit('localhost:8080/register')
        
        cy.get('.headDiv > [type="text"]').type('test')
        cy.get('[type="email"]').type('test@test.com')
        cy.get('.row > :nth-child(1) > .form-control').type('test')
        cy.get('.row > :nth-child(2) > .form-control').type('test')

        cy.get('.btn').click()
    })

    it('Login', () => {
        cy.visit('localhost:8080/login')

        cy.get(':nth-child(2) > [type="text"]').type('test')
        cy.get('[type="password"]').type('test')
        cy.get('.btn').click()

        cy.url().should('eq', 'http://localhost:8080/')
    })

    it('Logout', () => {
        cy.visit('localhost:8080/login')

        cy.get(':nth-child(2) > [type="text"]').type('test')
        cy.get('[type="password"]').type('test')
        cy.get('.btn').click()

        cy.get('#__BVID__10__BV_button_').click()
        cy.get(':nth-child(2) > .dropdown-item').click()
        cy.url().should('eq', 'http://localhost:8080/login')
    })
})

describe('Place', () => {
    before(() => {
        cy.visit('localhost:8080/login')

        cy.get(':nth-child(2) > [type="text"]').type('test')
        cy.get('[type="password"]').type('test')
        cy.get('.btn').click()

        cy.url().should('eq', 'http://localhost:8080/')
    })

    it('Place', () => {
        cy.visit('localhost:8080/place')
        cy.get('#__BVID__18').type('Zelda Breath of the Wild')
        cy.get('#__BVID__20').type('made by Nintendo of Japan')
        cy.get('#__BVID__22').invoke('val', 'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg').trigger('change')  
        cy.get('#__BVID__24').clear()
        cy.get('#__BVID__24').type('25')
        cy.get('.btn').click()
        
        cy.url().should('eq', 'http://localhost:8080/')
    })
})

describe('Rate', () => {
    before(() => {
        cy.visit('localhost:8080/login')

        cy.get(':nth-child(2) > [type="text"]').type('test2')
        cy.get('[type="password"]').type('test2')
        cy.get('.btn').click()
        cy.wait(1000)
        
        cy.visit('localhost:8080')
    })

    it('Rate user', () => {
        cy.visit('localhost:8080/users/test')
        cy.wait(1000)
        cy.get('[for="demo1"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Thanks for your feedback.`)
        })
        cy.wait(1000)
    })
})


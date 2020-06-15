let jwtToken;

beforeEach(() => {
    cy.server();
})

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
})

describe('Place', () => {
    before(() => {
        cy.visit('localhost:8080/login')

        cy.get(':nth-child(2) > [type="text"]').type('test')
        cy.get('[type="password"]').type('test')
        cy.get('.btn').click()

        cy.url().should('eq', 'http://localhost:8080/')
    })

    it('Place [Possibility of Timeout]', () => {
        cy.visit('localhost:8080/place')
        cy.get('#__BVID__19').type('Zelda Breath of the Wild')
        cy.get('#__BVID__21').type('made by Nintendo of Japan')
        cy.get('#__BVID__23').type('https://tweakers.net/i/H88rz-ct1JxOMioIGyA5y4oa76o=/i/2001369167.jpeg')
        cy.get('#__BVID__25').type('25')

        cy.wait('@networkIdle0')

        cy.get('.btn').click()
    })
})

describe('Rate', () => {
    before(() => {
        cy.visit('localhost:8080/login')

        cy.get(':nth-child(2) > [type="text"]').type('test2')
        cy.get('[type="password"]').type('test2')
        
        cy.route('/login').as('login')
        cy.wait('@login')
    })

    it('Rate user', () => {
        cy.visit('localhost:8080/user/test')
    })
})
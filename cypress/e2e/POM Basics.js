class HomePage {

    open(){
        cy.visit("https://demoblaze.com/ ")
    }

    login(username, password){
        cy.get('#login2').click()
        cy.get('#loginusername').type(username)
        cy.wait(3000)
        cy.get('#loginpassword').type(password)
        cy.wait(3000)
        cy.get('button[onclick="logIn()"]').click()

    }

    ProductAdd(){
        cy.get('#logout2').should('exist')
        cy.get('div>a[href $= \'?idp_=1\']').click()
        cy.get('div>a[class $=  \'btn-lg\']').click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Product added.');
        });
        cy.get('#cartur').click()



    }
}

export default HomePage
it('Profil Berhasil di Update', () =>{
    cy.visit('http://localhost:8000/login')
    cy.get('#email').type('user')
    cy.get('#password').type('123')
    cy.get('.btn-primary').click()
    cy.visit('http://localhost:8000/profile')
    cy.contains('Edit profil').click()
    cy.get('[type="file"]').attachFile('../fixtures/gambar1.png')
    cy.get('[name="phone"]').clear().type('081217660423')
    cy.get('[name="gender"]').select('Laki-Laki')
    cy.get('[name="address"]').clear().type('Mojokerto')
    cy.get('[name="bankuser_id"]').select('Shopeepay')
    cy.get('[name="bank_account"]').clear().type('12345678')
    cy.contains('Kirim').click()
})
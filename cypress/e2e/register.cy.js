describe('Registration Form', () => {
  it('should fill the registration form', () => {
    cy.visit('http://localhost:3000/'); // start on localhost
    cy.contains("register").click();
     cy.url().should('include', '/register');

    // wrap commands for the redirected origin
    cy.origin('https://app.medplum.com', () => {
      const { faker } = Cypress.require('@faker-js/faker');
      const userData = {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      };
      cy.get('input[name="firstName"]').type(userData.firstname);
      cy.get('input[name="lastName"]').type(userData.lastname);
      cy.get('input[name="email"]').type(userData.email);
      cy.get('input[name="password"]').type(userData.password);
      cy.contains('Create account').click();
      // Create Project Step
     // cy.contains("Create Project").should("exist");
        cy.get('input[name="projectName"]').type("Test Project");
     cy.get('button').contains('Create Project ').click();

    
    });
  });
});


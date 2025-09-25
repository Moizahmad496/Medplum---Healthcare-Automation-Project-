describe('Registration Form', () => {
  it('should fill the registration form', () => {
    cy.visit('https://app.medplum.com/register');
    cy.url().should('include', '/register');

    // generate fake data
    const { faker } = require('@faker-js/faker');
    const userData = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 12 }) // stronger password
    };

    // Fill the registration form
    cy.get('input[name="firstName"]').type(userData.firstname);
    cy.get('input[name="lastName"]').type(userData.lastname);
    cy.get('input[name="email"]').type(userData.email);
    cy.get('input[name="password"]').type(userData.password);
    cy.contains('Create account').click();

    // Project creation step (wait for redirect)

    cy.get('input[name="projectName"]').type('Test project');
    cy.contains('button', 'Create project').click();

    // assertion - project created
    cy.contains('Project').should('exist');
  });
});

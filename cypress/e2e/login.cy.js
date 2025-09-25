describe('Sign In Form', () => {
  it('should allow user to sign in successfully', () => {
    // Step 1: Visit the Medplum login page
    cy.visit('https://app.medplum.com/signin');

    // Step 2: Enter email
    cy.get('input[name="email"]').type('moiz@fidsor.net');

    // Step 4: Click Sign In button
    cy.get('button').contains('Next').click();
    cy.wait(2000); // Wait for 2 seconds to allow the password field to appear
    cy.get('input[name="password"]').type('Moiz@2025Secure!');
    cy.get('button').contains('Sign in').click();




  });
});




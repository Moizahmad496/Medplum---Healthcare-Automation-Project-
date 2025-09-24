describe('Create Patient', () => {
  beforeEach(() => {
    // Reuse your sign-in command
    cy.signin(Cypress.env('email'), Cypress.env('password'));
  });

  it('should allow practitioner to create a new patient', () => {
    // Step 1: Go to the Patients section
   // cy.contains('Patient').click();

    // Step 2: Click the "New Patient" button
    cy.get('button').contains('New').click();

    // Step 3: Fill in patient details
    cy.get('input[name="firstName"]').type('Test');
    cy.get('input[name="lastName"]').type('Patient');
    cy.get('input[name="birthDate"]').type('1990-05-15'); // yyyy-mm-dd format
    cy.get('input[name="gender"]').type('male'); // if dropdown, use .select()

    // Step 4: Save the patient
    cy.contains('Create').click();

    // Step 5: Verify patient is created
    cy.contains('Test Patient').should('exist');
  });
});

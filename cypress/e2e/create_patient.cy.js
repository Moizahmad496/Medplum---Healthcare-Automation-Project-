import 'cypress-file-upload';

describe('Create Patient', () => {
  let user;   // fixture data holder

  beforeEach(() => {
    // Load fixture at the start
    cy.fixture('user.json').then((data) => {
      user = data;
    });

    // Reuse your sign-in command
    cy.signin(Cypress.env('email'), Cypress.env('password'));
  });

  it('should allow practitioner to create a new patient', () => {
    // Step 1: Go to the Patients section
    cy.contains('New').click();

    // Step 2: Fill in patient details
    cy.contains('span', 'Add Name').click();
    cy.get('select[data-testid="use"]').select('official');
    cy.get('input[name="name.0-prefix"]').type('Mr');
    cy.get('input[name="name.0-given"]').type('Moiz');
    cy.get('input[name="name.0-family"]').type('Ahmad');
    cy.get('input[name="name.0-suffix"]').type('QA Automation Engineer');

    cy.contains('span', 'Add Telecom').click();
    cy.get('select[data-testid="system"]').select('email');
    cy.get('select[data-testid="use"]').eq(1).select('work');
    cy.get('input[placeholder="Value"]').type('test@gmail.com');

    // Another telecom entry
    cy.contains('span', 'Add Telecom').click();
    cy.get('select[data-testid="system"]').eq(1).select('phone');
    cy.get('select[data-testid="use"]').eq(2).select('mobile');
    cy.get('input[placeholder="Value"]').eq(1).type('123-456-7890');

    // Gender Selection
    cy.get('input[name="gender"]').type('Male');
    cy.contains('div[role="option"]', 'Male').click();

    // Birth Date
    cy.get('input[data-testid="birthDate"]').type('1995-05-20');

    // Address
    cy.contains('span', 'Add Address').click();
    cy.get('select[data-testid="address-use"]').select('home');
    cy.get('select[data-testid="address-type"]').select('postal');
    cy.get('input[placeholder="Line 1"]').type('123 Haleakala St');
    cy.get('input[placeholder="Line 2"]').type('4567 Apt 89');
    cy.get('input[placeholder="City"]').type('Anytown');
    cy.get('input[placeholder="State"]').type('LA');
    cy.get('input[placeholder="Postal Code"]').type('12345');

    // Marital Status
    cy.get('input[name="maritalStatus"]').type('unmarried');
    cy.contains('div[role="option"]', 'unmarried').click();

    // Uploading patient photo
    cy.get('button[title="Add"]').click();
    cy.get('input[data-testid="upload-file-input"]').attachFile(user.profilePic);

    // Chooose practiotioner as the care provider
      cy.contains('button', 'Add General Practitioner').click();
         cy.get('select[data-testid="reference-input-resource-type-select"]').select('Practitioner');
    cy.get('input[name="generalPractitioner.0-id"]').type('Dr');
    cy.contains('div[role="option"]', 'Dr Maria').click();
    // Selecting Organization 
        cy.get('input[name="managingOrganization-id"]').type('Healthcare');
    cy.contains('div[role="option"]', 'Healthcare Essentials').click();
        cy.get('button').contains('Create').click();



  });
});

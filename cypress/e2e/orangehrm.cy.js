describe('OrangeHRM Test', () => {
  beforeEach(() => {
    // Visit the OrangeHRM application before each test
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });
  it('should interact with employees using arrays', () => {
    // Array of employee names to add
    const employeeNamesToAdd = ['John Doe', 'Jane Smith', 'Bob Johnson'];
    // Login to OrangeHRM
    cy.get('input[name="username"]').as('username');                                
    cy.get('input[type="password"]').as('password');      
    cy.get('@username').type('Admin');                                              
    cy.get('@password').type('admin123');
    cy.get('.oxd-button').click();
    cy.contains('PIM').click();
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button').click();    //xpath
    // Add employees from the array
    cy.wrap(employeeNamesToAdd).each((employeeName) => {
      // Navigate to the "Add Employee" page
      // Fill in employee details
    cy.get('input[placeholder="First Name"]').type(employeeName.split(' ')[0]);
    cy.get('input[placeholder="Last Name"]').type(employeeName.split(' ')[1]);
    cy.contains('Save').click();
    });
  });
});
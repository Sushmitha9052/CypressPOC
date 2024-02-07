const url="https://www.demoblaze.com/";
const valid={ username: 'akash', password: '123'}
const name='Akash';
const country='India';
const city='Hyd';
const mob='1212121212';
const month='May';
 
describe('DemoBlaze Test', () => {
  it('should add a product to the cart', () => {
    // Visit the DemoBlaze application
    cy.visit(url);
    cy.contains('Laptops').click();
    cy.contains('MacBook air').click();
    cy.contains('Add to cart').click();
    cy.get('#cartur').click();
    cy.get('body').should('contain.text', 'MacBook air');
    cy.contains('Place Order').click();
    cy.xpath('//*[@id="name"]').type('AKash');
    cy.contains('Country').type('India');
    cy.xpath('/html/body/div[3]/div/div/div[2]/form/div[3]/input').type('Hyderabad');
    cy.get('#card').type('998877665544332211');
    cy.get('#month').type('May');
    cy.contains('Purchase').click();
     if(cy.contains('Thank you for your purchase!')){
        console.log('True')
    }else{
        console.log('False')
    }
    cy.get('.confirm').click();
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
    cy.contains('Home').click();
    cy.contains('Nexus 6').click();
    cy.contains('Add to cart').click();
    cy.contains('cart').click();   
  });
});
describe('Pizza Order Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/order');
    });
  
    it('İsim input etmeli', () => {
      cy.get('input[name="user-name"]').type('Fatih Süslü');
      cy.get('input[name="user-name"]').should('have.value', 'Fatih Süslü');
    });
  
    it('Malzeme seçmeli', () => {
      cy.get('input[type="checkbox"][name="pepperoni"]').check();
      cy.get('input[type="checkbox"][name="tomato"]').check();
      cy.get('input[type="checkbox"][name="pepper"]').check();
      cy.get('input[type="checkbox"][name="onion"]').check();
      cy.get('input[type="checkbox"][name="pepperoni"]').should('be.checked');
      cy.get('input[type="checkbox"][name="tomato"]').should('be.checked');
      cy.get('input[type="checkbox"][name="pepper"]').should('be.checked');
      cy.get('input[type="checkbox"][name="onion"]').should('be.checked');
    });
  
    it('formu submit etmeli', () => {
      cy.get('input[name="user-name"]').type('Fatih Süslü');
      cy.get('input[type="radio"][value="medium"]').check();
      cy.get('select[name="dough"]').select('thin');
      cy.get('input[type="checkbox"][name="pepperoni"]').check();
      cy.get('input[type="checkbox"][name="tomato"]').check();
      cy.get('input[type="checkbox"][name="pepper"]').check();
      cy.get('input[type="checkbox"][name="onion"]').check();
      cy.get('input[name="quantity"]').clear().type('2');
      cy.get('textarea[name="order-note"]').type('Sıcak gelsin');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/success');
    });
  });
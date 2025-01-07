describe('Bug Tracker Dashboard', () => {
    it('should display the Bug Tracker title', () => {
      cy.visit('/');
  
      // Ensure the title is visible
      cy.contains('Welcome to the Bug Tracker Dashboard').should('be.visible');
    });
  
    // it('should navigate to the Bug List page', () => {
    //   cy.visit('/');
  
    //   // Ensure the "View Bug List" link exists before clicking
    //   cy.get('a').contains('View Bug List').should('be.visible').click();
  
    //   // Verify the URL and check if the Bug List is displayed
    //   cy.url().should('include', '/bugs');
    //   cy.contains('Bug List');
    // });
  
    it('should display the bug list table', () => {
      cy.visit('/bugs');
  
      // Ensure the bug table is displayed
      cy.get('table').should('exist');
      cy.get('thead th').should('have.length', 3);
      cy.get('tbody tr').should('have.length.greaterThan', 0);
    });

    it('should show a loading message while fetching bugs', () => {
        cy.visit('/');
        cy.contains('Loading bugs...').should('be.visible');
      });
      
      it('should display an error message if the API call fails', () => {
        cy.intercept('GET', '/api/bugs', { forceNetworkError: true }).as('getBugsError');
      
        cy.visit('/');
        cy.wait('@getBugsError');
        cy.contains('Failed to fetch bugs. Please try again later.').should('be.visible');
      });
      
  });
  
/// <reference types="cypress" />

describe('MVC Project', () => {
  
    it('displays four features of teacher', () => {
      cy.visit('http://localhost:5000/?controller=teacher')
      cy.get('input[id=teacher_create]').click()
      cy.url().should('include', '&action=create')
      cy.go('back')
      cy.get('input[id=teacher_list]').click()
      cy.url().should('include', '&action=read')
      cy.go('back')
      cy.get('input[id=teacher_update]').click()
      cy.url().should('include', '&action=update')
      cy.go('back')
      cy.get('input[id=teacher_delete]').click()
      cy.url().should('include', '&action=delete')
      cy.go('back')
    })
  
    it('Add teacher functionality', () => {
      cy.visit('http://localhost:5000/?controller=teacher&action=create')
      cy.get('input[id=teacher_firstname]').type('eren').should('have.value', 'eren')
      cy.get('input[id=teacher_lastname]').type('jaeger').should('have.value', 'jaeger')
    })
  
    it('Update teacher functionality', () => {
      cy.visit('http://localhost:5000/?controller=teacher&action=update')
      cy.get('input[id=teacher_id]').type(2).should('have.value', 2)
      cy.get('input[id=teacher_firstname]').type('Monisa').should('have.value', 'Monisa')
      cy.get('input[id=teacher_lastname]').type('Hassan').should('have.value', 'Hassan')
    })
  
    it('Delete teacher functionality', () => {
      cy.visit('http://localhost:5000/?controller=teacher&action=delete')
      cy.get('input[id=teacher_id]').type(3).should('have.value', 3)
    })
  
  })
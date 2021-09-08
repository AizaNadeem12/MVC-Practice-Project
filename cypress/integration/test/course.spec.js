/// <reference types="cypress" />

describe('MVC Project', () => {
  
    it('displays four features of course', () => {
      cy.visit('http://localhost:5000/?controller=course')
      cy.get('input[id=course_create]').click()
      cy.url().should('include', '&action=create')
      cy.go('back')
      cy.get('input[id=course_list]').click()
      cy.url().should('include', '&action=read')
      cy.go('back')
      cy.get('input[id=course_update]').click()
      cy.url().should('include', '&action=update')
      cy.go('back')
      cy.get('input[id=course_delete]').click()
      cy.url().should('include', '&action=delete')
      cy.go('back')
    })
  
    it('Add teacher functionality', () => {
      cy.visit('http://localhost:5000/?controller=course&action=create')
      cy.get('input[id=course_name]').type('eren').should('have.value', 'eren')
    })
  
    it('Update teacher functionality', () => {
      cy.visit('http://localhost:5000/?controller=course&action=update')
      cy.get('input[id=course_id]').type(2).should('have.value', 2)
      cy.get('input[id=course_name]').type('Monisa').should('have.value', 'Monisa')
    })
  
    it('Delete teacher functionality', () => {
      cy.visit('http://localhost:5000/?controller=course&action=delete')
      cy.get('input[id=course_id]').type(3).should('have.value', 3)
    })
  
  })
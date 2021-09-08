/// <reference types="cypress" />

describe('MVC Project', () => {

  it('displays three buttons by default', () => {
    cy.visit('http://localhost:5000/')
    cy.get('input[id=student_default]').click()
    cy.url().should('include', 'controller=student')
    cy.go('back')
    cy.get('input[id=teacher_default]').click()
    cy.url().should('include', 'controller=teacher')
    cy.go('back')
    cy.get('input[id=course_default]').click()
    cy.url().should('include', 'controller=course')
    cy.go('back')
  })

  it('displays four features of student', () => {
    cy.visit('http://localhost:5000/?controller=student')
    cy.get('input[id=student_create]').click()
    cy.url().should('include', '&action=create')
    cy.go('back')
    cy.get('input[id=student_list]').click()
    cy.url().should('include', '&action=read')
    cy.go('back')
    cy.get('input[id=student_update]').click()
    cy.url().should('include', '&action=update')
    cy.go('back')
    cy.get('input[id=student_delete]').click()
    cy.url().should('include', '&action=delete')
    cy.go('back')
  })

  it('Add student functionality', () => {
    cy.visit('http://localhost:5000/?controller=student&action=create')
    cy.get('input[id=student_firstname]').type('eren').should('have.value', 'eren')
    cy.get('input[id=student_lastname]').type('jaeger').should('have.value', 'jaeger')
  })

  it('Update student functionality', () => {
    cy.visit('http://localhost:5000/?controller=student&action=update')
    cy.get('input[id=student_id]').type(2).should('have.value', 2)
    cy.get('input[id=student_firstname]').type('Monisa').should('have.value', 'Monisa')
    cy.get('input[id=student_lastname]').type('Hassan').should('have.value', 'Hassan')
  })

  it('Delete student functionality', () => {
    cy.visit('http://localhost:5000/?controller=student&action=delete')
    cy.get('input[id=student_id]').type(3).should('have.value', 3)
  })

})
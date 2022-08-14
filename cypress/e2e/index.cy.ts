describe('Test the presence of elements on the page', () => {
  it('There should be 4 links on the page', () => {
    cy.visit('/')
    cy.get("a").should("have.length" , 4)
  })

  // 1 button for language & 1 button for hamburger menu
  it('There should be 2 buttons on the page', () => {
    cy.visit('/')
    cy.get("button").should("have.length" , 2)
  })

  // dropdown 
  it('There should be dropdown on the page', () => {
    cy.visit('/')
    cy.get("#dropdown").should("exist")
  })
})

describe('Responsive', () => {
  it('In extra small / small devices, the sidebar should be displayed and in medium / large / extra large devices , sidebar should hidden', () => {
    cy.visit('/')
    // minimum width for medium devices
    cy.viewport(992, 500);
    cy.get("#mobile-menu").should("have.css", "display", "none")
    // maximum width for small devices
    cy.viewport(767, 500);
    cy.get("#mobile-menu").should("have.css" , "display" , "flex")


  })

})

describe('Click on links and buttons', () => {
  it('By clicking on the links, the page will be redirected correctly', () => {
    cy.visit('/')
    cy.get('a[href="/"]').click()
    cy.url().should('include', '/')
    cy.get('a[href="/Events"]').click()
    cy.url().should('include', '/Events')
    cy.visit('/')
    cy.get('a[href="/AboutUs"]').click()
    cy.url().should('include', '/AboutUs')
    cy.visit('/')
    cy.get('a[href="/ContactUs"]').click()
    cy.url().should('include', '/ContactUs')
  })

  it('By clicking on the language button must dropdown open', () => {
    cy.visit('/')
    cy.get("#dropdownButton").click();
    cy.get("#dropdown").should("not.have.class" , "hidden")
  })

  it('By clicking on the sidebar button must sidebar open', () => {
    cy.visit('/')
    // maximum width for small devices
    cy.viewport(767, 500);
    cy.get("#mobile-menu > button").click();
    cy.get("#sidebar").should("have.class" , "-translate-x-0")
  })

})

describe('Change Language', () => {
  it('When the language is changed, the labels and page direction should be changed according to the language', () => {
    cy.visit('/')
    // persian language
    cy.get("#dropdownButton").click();
    cy.get("#farsiLanguage").click();
    cy.get("nav").should("have.css", "direction", "rtl");
    cy.get("a").should("contain.text", "خانه").and("contain.text", "رویدادها").and("contain.text", "درباره ما").and("contain.text", "تماس با ما");
    cy.get("#dropdownButton").should("contain.text", "فارسی");

    // english language
    cy.get("#dropdownButton").click();
    cy.get("#englishLanguage").click();
    cy.get("nav").should("have.css", "direction", "ltr");
    cy.get("a").should("contain.text", "HOME").and("contain.text", "EVENTS").and("contain.text", "ABOUT US").and("contain.text", "CONTACT US");
    cy.get("#dropdownButton").should("contain.text", "English");

  })
})




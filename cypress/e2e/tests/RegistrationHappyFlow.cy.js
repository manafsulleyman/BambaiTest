import { baseUrl } from "../../fixtures/test-environment";
import {
  registrationData,
  generateSchoolName,
} from "../../fixtures/registration-test-data";

const registrationdata = registrationData;
let { fullName, phoneNumber, Password } = registrationdata;

describe("User Registraion", () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("should validate that a user is able to register successfully", () => {
    cy.visit(baseUrl);

    cy.intercept({
      method: "POST",
      url: "https://bamb.ai/api/auth/signup",
    }).as("SignUp");

    cy.get("#fullName").type(fullName);
    cy.get("#phoneNumber").type(phoneNumber);
    cy.get("#registrationType").select("independent");
    cy.get("#regionName").type(registrationData.schoolName);
    cy.get("#default-01").type(registrationData.email);
    cy.get("#profileType").select("private");
    cy.get("#password").type(Password);
    cy.get("#modeOfNotice").select("social media");
    cy.get(".btn").click();

    cy.wait("@SignUp").then((data) => {
      expect(data.response.statusCode, "Response Status Code").to.equal(200);
    });
    cy.get(".is-alter").submit();
    cy.url().should("contains", "https://bamb.ai/daily-summary");
  });
});

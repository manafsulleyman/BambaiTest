export const registrationData = {
  fullName: "Abdul Manaf Sulley",
  phoneNumber: "0445643564",
  Password: "Admin@123",
};

// Function to generate random emails 
function generateUniqueEmail(baseEmail) {
  const timestamp = Date.now();
  return `${baseEmail.replace('@', `.${timestamp}@`)}`;
}
registrationData.email = generateUniqueEmail("test@gmail.com");


// Function to generate a random school name
export function generateSchoolName() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letter = letters.charAt(Math.floor(Math.random() * letters.length));
  const schoolName = "School" + letter + letter;
  return schoolName;
}

// Generate and print 10 random school names
for (let i = 0; i < 10; i++) {
  registrationData.schoolName = generateSchoolName()
}





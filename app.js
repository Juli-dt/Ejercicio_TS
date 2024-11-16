function calculateAge(birthDateString) {
    var birthDate = new Date(birthDateString);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var hasBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!hasBirthdayPassed) {
        age--;
    }
    return age;
}
console.log(calculateAge("2004-06-22"));

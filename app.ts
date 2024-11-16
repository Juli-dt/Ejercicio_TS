function calculateAge(birthDateString: string): number {
    const birthDate: Date = new Date(birthDateString);
    const today: Date = new Date();
  
    let age: number = today.getFullYear() - birthDate.getFullYear();
  
    const hasBirthdayPassed: boolean = 
      today.getMonth() > birthDate.getMonth() || 
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  
    if (!hasBirthdayPassed) {
      age--;
    }
  
    return age;
  }
  

  
  console.log(calculateAge("2004-06-22"))
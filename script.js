const names = ["John", "Jessica", "Mark", "Julia"];

for (let i = 0; i < names.length; i++) {
  const name = names[i];

  if (name.charAt(0).toLowerCase() === 'j') {
    console.log(`Goodbye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}
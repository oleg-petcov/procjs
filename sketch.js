let a = 0.0; let inc = TWO_PI / 25.0;
for (let i = 0; i < 25; i++) {
  //line(i * 4, 50, i * 4, 50 + sin(a) * 40.0);
  console.log(a);
  a = a + inc;
}

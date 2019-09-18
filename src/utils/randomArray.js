function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);

    ctr--;

    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  console.tron.log(arra1.length);
  return arra1;
}

export default shuffle;

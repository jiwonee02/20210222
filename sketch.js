let jj;

function preload() {
  jj = loadImage("jj.png");
}

function setup() {
  createCanvas(jj.width, jj.height);
}

function draw() {
  image(jj, 0, 0);

  triangle(571, 344, 568, 317, 617, 336);
  triangle(568, 317, 547, 257, 610, 276);
  triangle(568, 317, 617, 336, 610, 276);
  triangle(617, 336, 610, 276, 674, 311);
  triangle(645, 361, 674, 311, 708, 336);
  triangle(547, 257, 610, 276, 592, 210);
  triangle(610, 276, 592, 210, 654, 231);
  triangle(610, 276, 674, 311, 654, 231);
  beginShape();
  vertex(674, 311);
  vertex(708, 336);
  vertex(698, 274);
  vertex(654, 231);
  endShape(CLOSE);
  triangle(708, 336, 698, 274, 786, 329);
  triangle(708, 336, 753, 379, 786, 329);
  triangle(654, 231, 698, 274, 755, 271);
  triangle(698, 274, 786, 329, 755, 271);
  triangle(786, 329, 755, 271, 818, 267);
  triangle(786, 329, 847, 323, 818, 267);
  triangle(654, 231, 755, 271, 757, 231);
  triangle(755, 271, 818, 267, 757, 231);
  triangle(592, 210, 654, 231, 676, 166);
  triangle(654, 231, 676, 166, 757, 231);
  triangle(757, 231, 818, 267, 826, 217);
  triangle(592, 210, 584, 151, 676, 166);
  triangle(584, 151, 676, 166, 672, 120);
  triangle(676, 166, 672, 120, 739, 128);
  triangle(676, 166, 757, 231, 739, 128);
  triangle(757, 231, 739, 128, 826, 217);
  noStroke();
}

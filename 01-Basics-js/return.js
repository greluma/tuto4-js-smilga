const width = 2;
const height = 2;
let dimensions = [width, height];

const CALC_DIM = (w, h) => w * h;
const CALC_INC = (dim) => dim * 2.54;

const resp = CALC_INC(CALC_DIM(dimensions[0], dimensions[1]));
console.log(resp);

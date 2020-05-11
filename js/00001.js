// 関数宣言
function double(x) {
  return x * 2;
}

// 関数式
const double = function (x) {
  return x * 2;
};

// アロー関数 （関数式の代替構文）
const double = (x) => {
  return x * 2;
};

// アロー関数 （引数が1つのときは丸括弧を省力可）
// prettier-ignore
const double = x => {
  return x * 2;
};

// アロー関数 （returnだけの場合は1行で記述可）
// prettier-ignore
const double = x => x * 2;

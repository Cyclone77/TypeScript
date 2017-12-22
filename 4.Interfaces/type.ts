//额外的属性检查
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { colour: string; width: number } {
    // ...
    return null;
}

let mySquare = createSquare({ colour: "red", width: 100 });

//函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
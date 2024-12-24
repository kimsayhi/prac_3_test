import { chunk } from "./chunk";

describe("chunk함수 테스트", () => {
  let array: any[] = [];
  beforeEach(() => {
    array = ["a", "b", "c", "d"];
    console.log(array);
  });

  it("배열과 사이즈를 입력하면 사이즈값만큼의 요소를 가진 배열로 분할하여반환합니다.", () => {
    //arrange
    const size = 2;
    const output = [
      ["a", "b"],
      ["c", "d"],
    ];
    //art
    const actual = chunk(array, size);
    //assert
    expect(actual).toEqual(output);
  });

  it("사이즈가 0이하일 때 빈배열을 반환합니다.", () => {
    //arrange
    const size = 0;
    const output = [];
    //art
    const actual = chunk(array, size);
    //assert
    expect(actual).toEqual(output);
  });

  it("사이즈를 설정하지 않았을 때 기본값은은 1입니다.", () => {
    //arrange
    const output = [["a"], ["b"], ["c"], ["d"]];
    //art
    const actual = chunk(array);
    //assert
    expect(actual).toEqual(output);
  });

  it("사이즈를 설정하지 않았을 때 기본값은은 1입니다.", () => {
    //arrange
    const output = [["a"], ["b"], ["c"], ["d"]];
    //art
    const actual = chunk(array);
    //assert
    expect(actual).toEqual(output);
  });

  it("배열의 길이보다 사이즈가 크면 하나의 배열로 반환합니다.", () => {
    //arrange
    const output = [["a", "b", "c", "d"]];
    const size = 5;
    //art
    const actual = chunk(array, size);
    //assert
    expect(actual).toEqual(output);
  });
});

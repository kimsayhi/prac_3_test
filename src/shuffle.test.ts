import shuffle from "./shuffle";

describe("shuffle함수 테스트", () => {
  let array: any[] = [];
  beforeEach(() => {
    array = ["a", "b", "c", "d"];
  });

  it("빈 배열을 입력하면 빈 배열을 반환합니다", () => {
    //arrange
    array = [];
    const output = [];
    //art
    const actual = shuffle(array);
    //assert
    expect(actual).toEqual(output);
  });

  it("배열의 요소가 하나면 그대로 반환합니다.", () => {
    //arrange
    array = [3];
    const output = [3];
    //art
    const actual = shuffle(array);
    //assert
    expect(actual).toEqual(output);
  });

  it("반환된 배열은 원래 배열의 모든 요소를 가지고 있습니다.", () => {
    //arrange
    //art
    const actual = shuffle(array);
    //assert
    array.forEach((value) => {
      expect(actual).toContain(value);
    });
  });

  it("배열을 입력하면 배열의 요소를 랜덤하게 섞어 반환합니다.", () => {
    //arrange
    const output = ["a", "b", "c", "d"];
    //art
    const actual = shuffle(array);
    //assert
    expect(actual).not.toEqual(output);
  });
});

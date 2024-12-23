import slice from "./slice";

describe("slice 함수 테스트", () => {
  it("Array에 빈 배열을 넣으면 빈 배열을 반환합니다.", () => {
    //arrange
    const array = [];
    const output = [];
    //act
    const actual = slice(array);
    //assert
    expect(actual).toEqual(output);
  });

  it("Array에 배열을 넣고 start와 end를 설정하지 않으면 start는 0, end는 배열의 length로 설정되어 그대로 반환됩니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const output = [1, 2, 3, 4];
    //act
    const actual = slice(array);
    //assert
    expect(actual).toEqual(output);
  });

  it("start값을 양수로로 설정하하면 start값 부터 끝까지 배열을 반환합니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = 1;
    const output = [2, 3, 4];
    //act
    const actual = slice(array, start);
    //assert
    expect(actual).toEqual(output);
  });

  it("start값을 음수로 설정하하면 배열의 끝에서 부터 start값 만큼의 배열을 반환합니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = -2;
    const output = [3, 4];
    //act
    const actual = slice(array, start);
    //assert
    expect(actual).toEqual(output);
  });

  it("end값을 양수로 설정하면 start 값부터 end index 직전까지 배열을을 리턴합니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = 0;
    const end = 3;
    const output = [1, 2, 3];
    //act
    const actual = slice(array, start, end);
    //assert
    expect(actual).toEqual(output);
  });

  it("end값을 음수로 설정하면 start 값부터 배열의 끝에서 end의 값 만큼 까지의 배열을 반환합니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = 2;
    const end = -1;
    const output = [3];
    //act
    const actual = slice(array, start, end);
    //assert
    expect(actual).toEqual(output);
  });

  it("start값을 배열의 길이보다 크게 설정하면면 빈 배열을 반환합니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = 5;
    const output = [];
    //act
    const actual = slice(array, start);
    //assert
    expect(actual).toEqual(output);
  });

  it("end값을 배열의 길이보다 크게 설정하면 start값 부터 배열의 끝까지 반환합니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = 1;
    const end = 5;
    const output = [2, 3, 4];
    //act
    const actual = slice(array, start, end);
    //assert
    expect(actual).toEqual(output);
  });

  it("start의 값을 end의 값보다 크게 설정하면 빈 배열을 반환합니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = 3;
    const end = 2;
    const output = [];
    //act
    const actual = slice(array, start, end);
    //assert
    expect(actual).toEqual(output);
  });

  it("start의 값이 음수이고 절댓값이 배열의 길이보다 크면 start가 0으로 설정됩니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = -5;
    const output = [1, 2, 3, 4];
    //act
    const actual = slice(array, start);
    //assert
    expect(actual).toEqual(output);
  });

  it("end의 값이 음수이고 절댓값이 배열의 길이보다 크면 빈 배열을 반환합니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = 0;
    const end = -5;
    const output = [];
    //act
    const actual = slice(array, start, end);
    //assert
    expect(actual).toEqual(output);
  });

  it("start와 end의 값이 음수이고 end의 값이 start보다 크고 절댓값이 배열의 길이보다 짧을 때 뒤에서부터 start값 까지 부터 end값 이전 까지의 배열을 반환합니다.", () => {
    //arrange
    const array = [1, 2, 3, 4];
    const start = -3;
    const end = -1;
    const output = [2, 3];
    //act
    const actual = slice(array, start, end);
    //assert
    expect(actual).toEqual(output);
  });
});

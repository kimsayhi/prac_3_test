import { toUpperCase } from "./util";

/**
 * AAA 패턴
 * Arrange: 테스트에 필요한 파라미터, 예상값 등 테스트에 필요한 데이터를 정의의
 * Act: 테스트 대상 함수를 호출출
 * Assert: 테스트 결과를 검증증
 */
describe("toUpperCase 테스트입니다.", () => {
  it("소문자를 넣으면 대문자를 반환합니다.", () => {
    //Arrange
    const input = "hello";
    const output = "HELLO";

    //Act
    //actual: "실제로" 함수를 호출한 결과과
    const actual = toUpperCase(input);

    //Assert
    //실제로 함수를 호출한 결과가 output과 같은지 검증
    expect(actual).toBe(output);
  });

  it("소문자를 넣으면 대문자를 반환합니다.", () => {
    const input = "hello";
    const output = "hello";

    const actual = toUpperCase(input);

    expect(actual).not.toBe(output);
  });

  it("특수문자를 넣으면 그대로 반환합니다", () => {
    const input = "!@#";
    const output = "!@#";

    const actual = toUpperCase(input);

    expect(actual).toBe(output);
  });

  it("빈 문자열을 넣으면 에러를 반환합니다.", () => {
    const input = "";

    expect(() => toUpperCase(input)).toThrow;
  });
});

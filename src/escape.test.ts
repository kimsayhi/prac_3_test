import { escape, unescape } from "./escape";

describe("escape함수 테스트", () => {
  it(`문자 "&", "<", ">", '"' 및 "'"를 해당 HTML 엔터티로 변환합니다.`, () => {
    //arrange
    const string = `&, <, >, ", '`;
    const output = `&amp;, &lt;, &gt;, &quot;, &#39;`;
    //art
    const actual = escape(string);
    //assert
    expect(actual).toEqual(output);
  });

  it("빈 문자열을 입력하면 빈 문자열을 반환합니다", () => {
    const string = "";
    const output = "";

    const actual = escape(string);

    expect(actual).toEqual(output);
  });
});

describe("unescape함수 테스트", () => {
  it(`HTML 엔티티 &amp;, &lt;, &gt;, &quot;, &#39;를 역으로 변환합니다.`, () => {
    //arrange
    const string = `&amp;, &lt;, &gt;, &quot;, &#39;`;
    const output = `&, <, >, ", '`;
    //art
    const actual = unescape(string);
    console.log(actual);

    //assert
    expect(actual).toEqual(output);
  });

  it("빈 문자열을 입력하면 빈 문자열을 반환합니다", () => {
    const string = "";
    const output = "";

    const actual = unescape(string);

    expect(actual).toEqual(output);
  });
});

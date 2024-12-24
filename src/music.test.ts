import { Music, MusicPlayer } from "./music";

describe("music player 클래스 테스트", () => {
  let musicPlayer: MusicPlayer;

  beforeEach(() => {
    //공유 자원 등 초기화
    musicPlayer = new MusicPlayer([]);
  });

  const newMusic: Music = {
    artist: "뉴진스",
    genre: "팝",
    releaseDate: "2023-01-01",
    title: "hype boy",
  };

  const firstMusic: Music = {
    artist: "뉴진스",
    genre: "팝",
    releaseDate: "2023-01-01",
    title: "첫번째 음악",
  };
  const secondMusic: Music = {
    artist: "뉴진스",
    genre: "팝",
    releaseDate: "2023-01-01",
    title: "두번째 음악",
  };
  const thirdMusic: Music = {
    artist: "뉴진스",
    genre: "팝",
    releaseDate: "2023-01-01",
    title: "세번째 음악",
  };

  it("음악을 추가하면 음악 리스트에 추가된다.", () => {
    //Arrange

    const newMusic: Music = {
      artist: "뉴진스",
      genre: "팝",
      releaseDate: "2023-01-01",
      title: "hype boy",
    };

    const output = [newMusic];

    //Act
    const actual = musicPlayer.addMusic(newMusic);
    //toBe가 아니라 toEqual을 사용해야함
    //toBe는 객체의 주소값을 비교하기 때문에 실패
    expect(actual).toEqual(output);
  });

  it("음악을 넣고 getMusicList함수를 호출하면 음악 리스트를 반환한다.", () => {
    //Arrange

    const output = [newMusic];
    musicPlayer.addMusic(newMusic);

    //Act
    const actual = musicPlayer.getMusicList();

    //Assert
    expect(actual).toEqual(output);
  });

  it("addMusic을 호출하지 않고 getMusicList함수를 호출하면 빈 배열을 반환한다.", () => {
    const actual = musicPlayer.getMusicList();
    expect(actual).toEqual([]);
  });

  it("음악을 추가하고 아티스트를 검색할 수 있다.", () => {
    //Arrange
    musicPlayer.addMusic(newMusic);
    //act
    const actual = musicPlayer.getMusicByArtist(newMusic.artist);
    //assert
    expect(actual).toEqual(newMusic);
  });

  it("음악을 추가하지 않고 아티스트로 검색할 수 없다.", () => {
    //arrange

    //act
    const actual = musicPlayer.getMusicByArtist(newMusic.artist);

    //assert
    expect(actual).toBeUndefined();
  });

  it("playMusic을 호출하면 현재 음악악이 바뀐다.", () => {
    //arrange
    musicPlayer.playMusic(newMusic);

    //act
    const actual = musicPlayer.getCurrentMusic();

    //assert
    expect(actual).toEqual(newMusic);
  });

  it("음악을 재생하지 않고 getCurrentMusic을 호출하면 null을 반환한다.", () => {
    //arrange

    //act
    const actual = musicPlayer.getCurrentMusic();

    //assert
    expect(actual).toBeNull();
  });

  it("음악을 재생하면 현재 음악을 리턴한다다.", () => {
    //arrange

    //act
    const actual = musicPlayer.playMusic(newMusic);

    //assert
    expect(actual).toEqual(newMusic);
  });

  it("음악을 재생하다가 멈추면 null이 리턴됩니다.", () => {
    //arrange
    musicPlayer.playMusic(newMusic);

    //act
    const actual = musicPlayer.stopMusic();

    //assert
    expect(actual).toBeNull();
  });

  it("음악이 재생중이지 않을 때 nextMusic을 호출하면 에러가 발생한다", () => {
    //arrange
    //act
    //assert
    try {
      const actual = musicPlayer.nextMusic();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("음악을 재생하고 있지 않습니다.");
    }

    //혹은 expect(() => musicPlayer.nextMusic()).toThrow();
  });

  it("nextMusic을 호출하면 다음 음악이 재생된다.", () => {
    //arrange

    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);

    musicPlayer.playMusic(firstMusic);

    //act
    const actual = musicPlayer.nextMusic();

    //assert
    expect(actual).toEqual(secondMusic);
  });

  it("마지막 음악을 재생중일 때 nextMusic을 호출하면 첫번째 음악이 재생된다.", () => {
    //arrange
    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);

    musicPlayer.playMusic(thirdMusic);

    //act
    const actual = musicPlayer.nextMusic();

    //assert
    expect(actual).toEqual(firstMusic);
  });

  it("현재 음악이 재생중이지 않을 때 prevMusic을 호출하면 에러가 발생한다", () => {
    //arrange
    //art
    //assert
    expect(() => musicPlayer.prevMusic()).toThrow();
  });

  it("prevMusic을 호출하면 이전 음악이 재생된다.", () => {
    //arrange
    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);

    musicPlayer.playMusic(secondMusic);

    //art
    const actual = musicPlayer.prevMusic();

    //assert
    expect(actual).toBe(firstMusic);
  });

  it("첫번째째 음악을 재생중일 때 prevMusic을 호출하면 마지막 음악이 재생된된다.", () => {
    //arrange
    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);

    musicPlayer.playMusic(firstMusic);

    //art
    const actual = musicPlayer.prevMusic();

    //assert
    expect(actual).toBe(thirdMusic);
  });

  it("음악 리스트가 비어있을 때 삭제를 하면 에러를 던진진다.", () => {
    //arrange
    //act
    //assert
    expect(() => {
      musicPlayer.removeMusic(newMusic);
    }).toThrow();
  });

  it("삭제할 음악이 음악 리스트에 없으면 에러를 던진다", () => {
    //arrange
    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);
    //art
    //assert
    expect(() => {
      musicPlayer.removeMusic(newMusic);
    }).toThrow();
  });

  it("삭제할 음악이 음악 리스트에 있으면 해당 음악을 삭제하고 삭제된 음악을 리턴한다", () => {
    //arrange
    musicPlayer.addMusic(firstMusic);
    musicPlayer.addMusic(secondMusic);
    musicPlayer.addMusic(thirdMusic);
    //art
    const actual = musicPlayer.removeMusic(thirdMusic);
    //assert
    expect(actual).toEqual(thirdMusic);
    expect(musicPlayer.getMusicList()).not.toContain(thirdMusic);
  });
});

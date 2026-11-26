# Request Hub

펌프 방송용 신청곡 매니저입니다. 유튜브 라이브 채팅의 신청을 받아 곡 목록과 대조하고, 대기열을 관리자 화면과 OBS 오버레이에 실시간으로 보여 줍니다. PC 안의 작은 서버로 동작하며 설치가 필요 없습니다.

> 비공식 팬 제작 도구입니다. 펌프 잇 업 및 관련 상표는 각 권리자의 것입니다.

- **사용 설명서**: https://woongdev.github.io/requesthub/
- **내려받기**: 오른쪽 [Releases](../../releases)에서 최신 버전의 `RequestHub.exe`와 `CardKeyMaker.exe`

## 들어 있는 프로그램

| 파일 | 하는 일 |
|---|---|
| `RequestHub.exe` | 본 프로그램. 실행하면 트레이에 아이콘이 생기고 브라우저로 관리자 화면(`http://localhost:8787/`)이 열립니다. |
| `CardKeyMaker.exe` | 카드키 생성기. YouTube API 키를 비밀번호로 암호화해 `.piukey` 파일로 만듭니다. 인터넷에 연결하지 않습니다. |

Windows 10/11 64비트에서 설치 없이 실행됩니다.

## 내려받은 파일 확인하기

릴리스 설명에 적힌 SHA-256 값과 내려받은 파일의 값이 같은지 확인하세요. 다르면 실행하지 마세요.

```powershell
Get-FileHash .\RequestHub.exe -Algorithm SHA256
Get-FileHash .\CardKeyMaker.exe -Algorithm SHA256
```

서명되지 않은 프로그램이라 처음 실행할 때 Windows SmartScreen이 경고할 수 있습니다. 값을 확인한 뒤 **추가 정보 → 실행**을 누르면 됩니다.

## 빠른 시작

1. Google Cloud에서 YouTube Data API v3 키를 만듭니다. ([준비하기](docs/setup.md))
2. `CardKeyMaker.exe`로 카드키를 만듭니다.
3. `RequestHub.exe`를 켜고 카드키와 비밀번호로 로그인합니다.
4. 연결 메뉴에 라이브 주소를 넣습니다.
5. OBS 브라우저 소스에 `http://127.0.0.1:8787/overlay`를 넣습니다.

자세한 내용은 [사용 설명서](docs/index.md)를 보세요.

## 소스 코드

이 저장소에는 설명서와 배포 파일만 있고 소스 코드는 올리지 않습니다.

## 제3자 고지

[THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)

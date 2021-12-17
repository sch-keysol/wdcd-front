# wdcd-front
WDCD Frontend Repository

이 저장소는 WDCD 프로젝트의 프론트엔드 코드가 담긴 공간입니다. 다음과 같은 절차를 통해 이용하실 수 있습니다.

## 시작하기

Node.js, npm, yarn을 설치해주세요. 버전은 아래와 같습니다.

- Node.js 16.13.0 LTS : [공식 사이트](https://nodejs.org/en/)
- npm은 Node.js에 설치된 버전을 기준으로 이용해주시면 됩니다.
- yarn berry

> **주의**: create-react-app과의 충돌 문제로 인해 yarn 2.x부터 지원하는 PnP(Plug n Play) 기능은 당분간 사용하지 않습니다.

### yarn 설치하기

- Windows 기준 
  - Windows 로고를 오른쪽 클릭하여 명령 프롬토트, PowerShell 혹은 Windows 터미널을 실행해주세요. 관리자 권한은 필요하지 않습니다.
- Linux 혹은 Windows Subsystems for Linux 기준
  - 터미널을 실행해주세요.
  - Windows Subsystems for Linux의 경우 배포판 이름으로 된 바로가기가 시작메뉴에 존재하거나, Windows 터미널을 이용하여 사용하실 수 있습니다.

> npm install -g yarn

혹은

> corepack enable

위 명령어를 입력하고 Enter 키를 눌러주세요. 만약 권한 오류가 날 경우 `sudo` 를 앞에 붙여주시면 됩니다.

### 프로젝트 설정하기

아래 내용은 프로젝트에 변경사항을 만들고 원래 저장소(`wdcd-front`)로 변경사항을 보낼 때를 기준으로 작성되었습니다.

- `wdcd-front` 프로젝트 페이지 [#](https://github.com/sch-keysol/wdcd-front) 에서 오른쪽 상단 fork 버튼을 눌러 저장소를 fork합니다.

- 자신의 계정에 fork된 저장소가 저장되어 있는지 확인합니다. 

- GitHub Desktop이 설치되어 있다면
  - GitHub Desktop을 실행합니다.
  - Current Repository 부분을 누릅니다. 만약 `wdcd-front` 라면 별도의 동작을 수행할 필요는 없습니다.
  - Add 버튼을 누르고 Clone Repository...를 누릅니다.
  - **Your repositories** 라고 굵은 글씨로 적힌 부분 아래에 `계정명/wdcd-front` 로 표기된 항목을 클릭합니다.
  - 하단 `Local path` 란에서 `Choose...` 버튼을 눌러 이 저장소의 내용물이 보관되길 바라는 폴더를 선택합니다. 이 폴더의 주소를 잘 기억해주세요.
  - 파란색 Clone 버튼을 누르면 무언가 묻는 창이 나타날 것입니다. 원래 저장소로 변경사항을 보낼 목적으로 작업하는 저장소이므로 *To contribute to the parent repository*를 선택합니다.

- Clone이 완료되면 Windows 키를 오른쪽 클릭하여 명령 프롬토트, Windows PowerShell, Windows 터미널 중 하나를 선택합니다. (기기별로 다름)

  > cd localpath로입력한주소

- 아까 선택한 `Local path`의 주소로 이동합니다. 위처럼 cd 명령어를 사용하면 됩니다.

  > ls -la

- `ls` 명령어로 폴더에 어떤 내용이 있는지 확인해보면, `wdcd-front` 폴더가 보일 것입니다. 해당 폴더 내에 실제 React 앱이 있으므로 이동해줍니다.

  > cd wdcd-front

- 해당 폴더에서 작업을 수행하기 전 아래 명령어로 설치해야 할 패키지를 설치해주세요.

  > yarn install

- (선택사항) WSL이 아닌 Windows 환경에서 실행하시는 경우, 프로젝트 폴더의 `.env` 파일을 아래와 같이 수정해주세요. 단, 이 경우 되도록 해당 파일이 Git에 올라가지 않도록 신경써주세요.

  > SASS_PATH=./node_modules

- 이제 모든 준비가 끝났습니다. 수고 많으셨습니다!

### 프로젝트 시범 실행 및 빌드

React 앱을 만들고 나면, 잘 작동하는지 시행해 보아야 할 때가 있습니다. 그럴 때는 '프로젝트 폴더'에서 아래 명령어를 입력하세요.

> yarn start

완성한 뒤에는 테스트 서버 혹은 자신의 서버에 업로드하여 작동을 확인할 수 있습니다. 아래 명령어로 서버에 업로드할 파일을 만드시면 됩니다.

> yarn build

'프로젝트 폴더' 밑에 `build` 폴더가 생성될 것입니다. 해당 폴더 안에 있는 내용물을 서버로 올리면 작동 여부를 확인하실 수 있습니다.

> **주의**: `build` 폴더 안의 내용물을 Git에 올리지 마세요.


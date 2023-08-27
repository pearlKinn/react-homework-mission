# 프론트엔드 스쿨 6기 리액트 과제 - 웹 사이트 랜딩 페이지 구현
[멋사 클론코딩](https://pearlkinn.github.io/react-homework-mission03/)
## 🏷️Tree
```
📦src
 ┣ 📂api
 ┃ ┗ 📜pocketbase.js
 ┣ 📂assets
 ┃ ┣ 📜react.svg
 ┃ ┗ 📜vite.svg
 ┣ 📂components
 ┃ ┣ 📜Alert.jsx
 ┃ ┣ 📜Button.jsx
 ┃ ┣ 📜Heading.jsx
 ┃ ┣ 📜Logo.jsx
 ┃ ┣ 📜Spinner.jsx
 ┃ ┣ 📜Status.jsx
 ┃ ┗ 📜TechitByLikeLionLogo.jsx
 ┣ 📂contexts
 ┃ ┗ 📜Auth.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useDocumentTitle.js
 ┃ ┣ 📜useFetchData.js
 ┃ ┣ 📜useMouse.js
 ┃ ┗ 📜useStorage.js
 ┣ 📂layout
 ┃ ┣ 📂home
 ┃ ┃ ┗ 📜CampSection.jsx
 ┃ ┣ 📜Contents.jsx
 ┃ ┣ 📜FooterBar.jsx
 ┃ ┣ 📜HeaderBar.jsx
 ┃ ┣ 📜Nav.jsx
 ┃ ┗ 📜RootLayout.jsx
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜Register.jsx
 ┃ ┣ 📜Station.jsx
 ┃ ┣ 📜Techit.jsx
 ┃ ┗ 📜Track.jsx
 ┣ 📂styles
 ┃ ┣ 📜Button.module.css
 ┃ ┣ 📜global.css
 ┃ ┗ 📜tailwind.css
 ┣ 📂utils
 ┃ ┣ 📜currency.js
 ┃ ┣ 📜debounce.js
 ┃ ┣ 📜filterItemsByState.js
 ┃ ┣ 📜getNode.js
 ┃ ┣ 📜getPbImageURL.js
 ┃ ┣ 📜getRandomMinMax.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜numberWithComma.js
 ┃ ┗ 📜validation.js
 ┣ 📂views
 ┃ ┗ 📜BootCamp.jsx
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜routes.jsx
```

## 🏷️프로젝트 소개
포켓베이스를 사용하여 서버와 통신하는 SPA 테킷 홈페이지 구현
![](https://velog.velcdn.com/images/pearlx_x/post/7f627c4c-5601-4f7a-a1ac-0f41d7a0a107/image.gif)
![](https://velog.velcdn.com/images/pearlx_x/post/206f85ac-2f47-403d-bec3-3ffd9b9676cc/image.png)


### LOGIN
- 이메일과 비밀번호 유효성 검사
- 유효성 검사가 된 아이디와 비밀번호가 입력되었을 때 로그인 버튼 활성화
- 로그인 & 로그아웃 후 알림 메시지 출력
### REGISTER
- 이름, 아이디, 비밀번호, 비밀번호 확인 유효성 검사
- 유효성 검사가 된 이름, 아이디, 비밀번호, 비밀번호 확인란이 입력되었을 때 가입버튼 활성화
- 회원가입 후 확인 메시지 출력

# 프론트엔드 스쿨 6기 리액트 과제 - 웹 사이트 랜딩 페이지 구현
## 🏷️폴더 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜react.svg
 ┃ ┗ 📜vite.svg
 ┣ 📂components
 ┃ ┣ 📜Button.jsx
 ┃ ┣ 📜Heading.jsx
 ┃ ┣ 📜Logo.jsx
 ┃ ┣ 📜Spinner.jsx
 ┃ ┣ 📜Status.jsx
 ┃ ┗ 📜TechitByLikeLionLogo.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useDocumentTitle.js
 ┃ ┣ 📜useFetchData.js
 ┃ ┗ 📜useMouse.js
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
 ┃ ┣ 📜Station.jsx
 ┃ ┣ 📜Techit.jsx
 ┃ ┗ 📜Track.jsx
 ┣ 📂styles
 ┃ ┣ 📜Button.module.css
 ┃ ┣ 📜global.css
 ┃ ┗ 📜tailwind.css
 ┣ 📂utils
 ┃ ┣ 📜currency.js
 ┃ ┣ 📜getNode.js
 ┃ ┣ 📜getPbImageURL.js
 ┃ ┣ 📜getRandomMinMax.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜numberWithComma.js
 ┣ 📂views
 ┃ ┗ 📜BootCamp.jsx
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜routes.jsx
```

## 🏷️프로젝트 소개
테킷 홈페이지를 컴포넌트를 구성하고 컴포넌트를 조립하여 SPA로 구현하였다.
![](https://velog.velcdn.com/images/pearlx_x/post/6329557c-1b9f-42c3-a5e2-abfa4d6b7633/image.gif)

## 🏷️컴포넌트 설명
### ✨Status
```jsx
function Status({state='신청마감'}) {

  let color = ''
  if(state==='모집중') {
    color="border-blue-500 text-blue-700"
  }else if(state==='사전알림신청') {
    color="border-teal-500 text-emerald-600"
  }else {
    color="border-red-500 text-red-700"
  }
  return (
    <div className={`${color} inline-flex items-center rounded border px-2 py-1 text-xs font-semibold sm:text-sm`}>
      {state}
    </div>
  );
}

export default Status
```
state 값에 따라 스타일링과 값이 변경된다.

### ✨Contents
```jsx
function Contents({ filterKeyWord = '' }) {
  const { error, data, isLoading } = useFetchData(PB_BOOTCAMP_ENDPOINT);
  let dataItems = data.items;
  let filteredData = null

  const filterItemsByState = (items, status) => {
    if (!status) return items;

    return items?.filter((item) => item.state === status);
  };


  if (data) {
    if (filterKeyWord.length === 0) {
      filteredData = filterItemsByState(dataItems);
    } else {
      filteredData = filterItemsByState(dataItems, filterKeyWord);
    }
  }

  if (isLoading) {
    return <Spinner size={160} title="데이터 가져오는 중이에요." />;
  }

  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:gap-x-6">
      {filteredData?.map((item) => (
        <BootCamp key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Contents;
```
`filterItemsByState` 함수를 통해 상태에 따라 데이터를 필터링 해주고
필터링한 데이터 리스트를 화면에 렌더링 해준다.

### ✨BootCamp
```jsx
export default function BootCamp({ item }) {
  return (
    <figure>
      <div className="shrink-0 overflow-hidden rounded md:rounded-lg mb-4">
        <img src={getPbImageURL(item, 'contentImage')} alt={item.title}  className="h-full w-full object-cover"/>
      </div>

      <Status state={item.state} />
      <figcaption>
        <dl>
          <dt className="mb-2 mt-4 text-base font-semibold md:text-xl">
            {item.skillName ? `${item.title} : ${item.skillName}` : item.title}
          </dt>
          <dd className="text-xs font-medium md:text-base lg:text-base lg:font-normal xl:text-lg mb-2">
            {item.description}
          </dd>
        </dl>
      </figcaption>
    </figure>
  );
}
```
전달 받은 props를 통해 이미지를 불러오고 화면에 렌더링 해주는 컴포넌트
skillName의 여부에 따라 렌더링되는 화면이 달라진다.

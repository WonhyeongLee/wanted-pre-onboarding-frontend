# 원티드 프론트엔드 인터십 (4월) 사전과제

 [사전과제 레포](https://github.com/walking-sunset/selection-task)에 따라서 작성한 선발 과제 레포입니다.

## 배포링크

  https://enchanting-boba-587e02.netlify.app/

## 프로젝트 실행방법

1. git clone 혹은 zip파일로 다운로드
2. `npm install & npm start`

## 진행가이드 체크리스트

- [x] CRA를 이용해 구현
- [x] git clone 후, `npm install & npm start` 로 별다른 설정없이 실행 가능 해야함
- [x] 함수 컴포넌트를 이용해서 진행
- [x] README.md 작성
- [x] 아래 라이브러리만 사용해서 구현
  - React Router
  - HTTP Client 라이브러리(Axios 등)
  - 스타일링 관련 라이브러리
  - 아이콘 등 UI 관련 라이브러리
  - 기능과 직접적인 연관이 없는 라이브러리

## 구현 체크리스트

**가이드라인에 명시된 `test-id` 속성이 제대로 부여돼야함**

- [x] 이메일 input --> `email-input`
- [x] 패스워드 input  --> `password-input`
- [x] 회원가입 button  --> `signup-button`
- [x] 로그인 button  --> `signin-button`
- [x] todo 추가 input  --> `new-todo-input`
- [x] todo 추가 button  --> `new-todo-add-button`
- [x] 수정 button  --> `modify-button`
- [x] 삭제 button  --> `delete-button`
- [x] todo 수정 input  --> `modify-input`
- [x] 제출 button  --> `submit-button`
- [x] 취소 button  --> `cancel-button`

## 구현 된 요구사항
### 로그인 / 회원가입

- `/signup`경로에 회원가입 기능을 개발할 것
- `/signin`경로에 회원가입 기능을 개발할 것
- 페이지 안에 이메일 input, 비밀번호 input, 제출 button이 포함된 형태로 구현할 것
- 두 페이지의 UI는 동일해도 무방
- test-id에 유의

**Assignment 1**

- [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 별도의 추가 조건 부여 없이 위의 조건대로만 진행
- [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성을 부여해주세요.
- [x] 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

**Assignment 2**

- [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요

**Assignment 3**

- [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요.

**Assignment 4**

- [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요.
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트 시켜주세요

### TODO LIST

**Assignment 5**
- [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [x] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- [x] TODO의 완료 여부는 `<input type="checkbox" />`를 통해 표현해주세요
- [x] TODO는 `<li>` tag를 이용해 감싸주세요

예시)

```
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 2</span>
  </label>
</li>
```

**Assignment 6**

- [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
  - TODO 입력 input에 `data-testid="new-todo-input"` 속성을 부여해주세요
  - TODO 추가 button에는 `data-testid="new-todo-add-button"` 속성을 부여해주세요
- [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- [x] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.  

**Assignment 7**

- [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요

**Assignment 8**

- [x] TODO 우측에 수정버튼과 삭제 버튼을 만들어 주세요
  - 수정 버튼에는 `data-testid="modify-button"` 속성을 부여해주세요
  - 삭제 버튼에는 `data-testid="delete-button"` 속성을 부여해주세요

**Assignment 9**

- [x] 투두 리스트의 삭제 기능을 구현해주세요
  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

**Assignment 10**

- [x] 투두 리스트의 수정 기능을 구현해주세요
  - TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요
  - 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.
  - 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
    - 수정 input창에는 `data-testid="modify-input"` 속성을 부여해주세요
  - 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
    - 제출버튼에는 `data-testid="submit-button"` 속성을 부여해주세요
    - 취소버튼에는 `data-testid="cancel-button"` 속성을 부여해주세요
  - 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요

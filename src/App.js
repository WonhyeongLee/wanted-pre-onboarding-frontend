import "./App.css";
import Main from "./pages/Main";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <Main />
      <button type='button' onClick={() => navigate("/signin")}>
        로그인
      </button>
      <button type='button' onClick={() => navigate("/signup")}>
        회원가입
      </button>
    </div>
  );
}

export default App;

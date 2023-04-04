import "./App.css";
import Main from "./pages/Main";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const renderButton = location.pathname !== "/signin" && location.pathname !== "/signup";
  return (
    <div className='App'>
      <Main />
      {renderButton && (
        <>
          <button type='button' onClick={() => navigate("/signin")}>
            로그인
          </button>
          <button type='button' onClick={() => navigate("/signup")}>
            회원가입
          </button>
        </>
      )}
    </div>
  );
}

export default App;

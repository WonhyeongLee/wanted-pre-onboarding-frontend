import React from "react";

function TodoLayout({ children }) {
  return (
    <div>
      <header>TodoList</header>
      <div>{children}</div>
    </div>
  );
}

export default TodoLayout;

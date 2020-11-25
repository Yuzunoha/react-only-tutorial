/**
関数コンポーネント。引数は1つで、propsと呼ばれる。
`<Tweet content=”Hello”/>`と記述するとprops.contentにHelloが入る。
関数コンポーネントはJSXをreturnする。
JSXの中で{}の中身はJSとして評価される。
*/
function Tweet(props) {
  return <div>{props.content}</div>;
}

function App() {
  return (
    <div>
      <Tweet content='Hello' />
      <Tweet content='React!' />
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);

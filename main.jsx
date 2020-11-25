/**
関数コンポーネント。引数は1つで、propsと呼ばれる。
`<Tweet content=”Hello”/>`と記述するとprops.contentにHelloが入る。
関数コンポーネントはJSXをreturnする。
JSXの中で{}の中身はJSとして評価される。
*/
function Tweet(props) {
  return (
    <div className='tweet'>
      <div className='icon-container'>{props.icon}</div>
      <div className='body-container'>
        <div className='status-display'>
          <span className='display-name'>{props.displayName}</span>
          <span className='account-name'>@{props.accountName}</span>
        </div>
        <div className='content'>{props.content}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Tweet icon='🌽' displayName='もろこし太郎' accountName='morokoshi' content='今日も1日もろこしがうまい' />
      <Tweet icon='🦐' displayName='エビデンス' accountName='evidence' content='かにみそたべたい' />
    </div>
  );
}

const target = document.querySelector('#app');
ReactDOM.render(<App />, target);

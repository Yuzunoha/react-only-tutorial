/**
関数コンポーネント。引数は1つで、propsと呼ばれる。
`<Tweet content=”Hello”/>`と記述するとprops.contentにHelloが入る。
関数コンポーネントはJSXをreturnする。
JSXの中で{}の中身はJSとして評価される。
*/
function Tweet(props) {
  // Reactからこのコンポーネントの
  // like値と、likeの値をセットするための関数を取り出す
  // デフォルト値はfalseにする
  const [liked, setLike] = React.useState(false);
  const toggleLike = React.useCallback(() => {
    return setLike(
      (prev) => {
        return !prev;
      },
      [setLike]
    );
  });

  return (
    <div className='tweet'>
      <div className='icon-container'>{props.icon}</div>
      <div className='body-container'>
        <div className='status-display'>
          <span className='display-name'>{props.displayName}</span>
          <span className='account-name'>@{props.accountName}</span>
        </div>
        <div className='content'>{props.content}</div>
        <div className='status-action'>
          <span onClick={toggleLike}>{liked ? '❤️' : '♡'}</span>
        </div>
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

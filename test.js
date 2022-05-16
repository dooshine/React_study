import logo from './logo.svg';
import './App.css';

function Title(props){
    return <header>
        <h1><a href="/" onClick={function(event){
            event.preventDefault();
            props.onChangeMode(props.title);
        }}>{props.title}</a></h1>
    </header>
}
function Nav(props){
    const lis = []
    let i=-1
    while(i++<pros.topics.length-1){
        lis.push(<li><a href={"/read/"+pros.topics[i].id} onClick={function(event){
            event.preventDefault();
            props.onChangeMode(props.topics[i].id);
        }}>{pros.topics[i].title}</a></li>)
    }
    return  <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}
function Article(props){
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}
function Test(){
    const topics = [
        {id:1, title:"html", body:"html is ..."},
        {id:2, title:"css", body:"css is ..."},
        {id:3, title:"javascript", body:"javacript is ..."}
    ]

    return (
        <div>
            <Header title="WEB" onChangeMode={function(target){
                alert(target);
            }}></Header>
            <Nav topics={topics} onChangeMode={function(key){
                alert(key);
            }}></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

export default App;

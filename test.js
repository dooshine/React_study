import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
    return <header>
        <h1><a href="/" onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props) {
    const lis = []
    let i = -1
    while (++i < props.topics.length) {
        let t = props.topics[i];
        lis.push(<li><a id={t.id} href={"/read/" + props.topics[i].id} onClick={function (event) {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
        }}>{props.topics[i].title}</a></li>)
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

function Article(props) {
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}

function App() {
    const [mode, setMode] = useState("WELCOME");
    const [id, setId] = useState(null);
    const topics = [
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javacript is ..." }
    ]

    let content = null;
    if (mode === "WELCOME") {
        content = <Article title="Welcome" body="Hello, WEB"></Article>;
    } else if (mode === "HTMLLAN") {
        let i = -1;
        while (++i < topics.length) {
            if (topics[i].id === id) {
                content = <Article title={topics[i].title} body={topics[i].body}></Article>;
            }
        }
    }

    return (
        <div>
            <Header title="WEB" onChangeMode={function () {
                setMode("WELCOME");
            }}></Header>
            <Nav topics={topics} onChangeMode={function (_id) {
                setMode("HTMLLAN");
                setId(_id);
            }}></Nav>
            {content}
        </div>
    );
}

export default App;

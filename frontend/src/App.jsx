import Widget from './widget/Widget';
import './App.css';

// DO NOT CHANGE
function App() {
    return (
        <>
            <h1 className="main-title">Austin Code Mentorship Widgets</h1>
            <div className="widgets">
                <Widget />
            </div>
            <a
                href="https://github.com/me-julian/acm-widgets"
                target="_blank"
                referrerPolicy="noReferrer"
                className="link link--grey"
            >
                Click here to learn more about this website
            </a>
        </>
    );
}

export default App;

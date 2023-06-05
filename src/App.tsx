import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/header/header";

function App() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://timepad.ru/js/tpwf/loader/min/loader.js";
        script.async = true;
        script.defer = true
        script.charset = "UTF-8"
        script.dataset.dataTwf2sEventId = "2405047"
        script.dataset.dataTimepadWidgetV2 = "2405047"
        document.body.appendChild(script);
    })

    return (
        <div className="App">
            <Header />
            <div className="form__container">
                <script
                    type="text/javascript" async={true} defer={true} charSet="UTF-8"
                    src="https://timepad.ru/js/tpwf/loader/min/loader.js" data-timepad-customized="25905"
                    data-twf2s-event--id="2405047" data-timepad-widget-v2="event_register"
                >
                </script>
            </div>

        </div>
    );
}

export default App;

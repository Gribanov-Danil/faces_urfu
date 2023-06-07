import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "../header/header";
import {ymPageView, ymReachGoal} from "../../utils/constants/ym/ymPageView";

function App() {

    function execute() {
        setTimeout(() => {
            const iframe = document.getElementsByTagName("iframe");
            if (iframe.length > 0) {
                const innerDoc = iframe[0].contentDocument || iframe[0].contentWindow?.document;

                const timePadButtons = innerDoc?.querySelectorAll(".b-reg-table__plusminus_btn")
                const inputs = innerDoc?.querySelectorAll<HTMLInputElement>(".b-input")
                const buy = innerDoc?.querySelector(".b-pro-wiget__reg-button")

                timePadButtons?.forEach((timePadButton, index) => {
                    if (index % 2 !== 0) {
                        timePadButton.addEventListener("click", () => {
                            ymReachGoal("add ticket")
                        } )
                    }
                })
                buy?.addEventListener("click", () => {
                    ymReachGoal("clicked button eventRegister")
                })
                if (inputs && inputs.length > 0) {
                    inputs[1].addEventListener("change", (e: any) => {
                        const value = inputs[1].value
                        if (value.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu)) {
                            ymReachGoal("add email in form")
                        }
                    })

                    inputs[4].addEventListener("change", (e: any) => {
                        const value = inputs[4].value
                        if (value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
                            ymReachGoal("add phone number in form")
                        }

                    })
                }
            }
        }, 1500)
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://timepad.ru/js/tpwf/loader/min/loader.js";
        // script.async = true;
        // script.defer = true

        script.charset = "UTF-8"
        script.dataset.dataTwf2sEventId = "2405047"
        script.dataset.dataTimepadWidgetV2 = "2405047"
        script.onload = execute
        document.body.appendChild(script);
        ymPageView()
    }, [])

    return (
        <div className="App">
            <Header/>
            <div className="form__container">
                <script
                    type="text/javascript" charSet="UTF-8"
                    src="https://timepad.ru/js/tpwf/loader/min/loader.js" data-timepad-customized="25905"
                    data-twf2s-event--id="2405047" data-timepad-widget-v2="event_register"
                    // onLoad={execute}
                >
                </script>
            </div>
        </div>
    );
}

export default App;

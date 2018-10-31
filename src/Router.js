import React from 'react';
import { NativeRouter, Route, Switch } from "react-router-native";
import NumberInputPage from './components/NumberInputPage';
import CustomTextInputPage from './components/CustomTextInputPage';


const Router = () => {
    return (
        <NativeRouter>
            <Switch>
                <Route path={"/"} exact component={NumberInputPage} />
                <Route path={"/CustomTextInputPage"} component={CustomTextInputPage} />
            </Switch>
        </NativeRouter>
    );
}

export default Router;
import React from "react";
import { AppHeader, AppRow, AppCol } from "../../components/"


export default function TopBar() {
    return (
        <AppHeader ><AppRow justify='end'>
            <AppCol >Menu links</AppCol>
            <AppCol flex='auto' >Right Side Buttons</AppCol>
            <AppCol>Theme Buttons</AppCol>
        </AppRow></AppHeader>
    )
}
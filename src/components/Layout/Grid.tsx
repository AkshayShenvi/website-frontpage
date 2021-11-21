import React from "react";
import { Row, Col, RowProps, ColProps } from "antd";



export function AppRow({ children, ...props }: RowProps) {
    return <Row {...props}>{children}</Row>;
}


export function AppCol({ children, ...props }: ColProps) {
    return <Col {...props}>{children}</Col>;
}
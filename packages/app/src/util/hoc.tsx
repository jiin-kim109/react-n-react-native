/* eslint-disable */
import React, { FunctionComponent } from "react";
/**
 * A wrapper component that prevents child components to rerender. Use this only for optimization purposes.
 */
export const StaticRenderee: FunctionComponent = (props) => {
    return (
        <>
            {React.useMemo(() => (
                props.children
            ), [])}
        </>
    )
}
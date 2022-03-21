import React from "react";
import { useState } from "@wordpress/element";


const FocusContext = React.createContext({
    focus: 'default',
    set_focus: ( value ) => {}
});

export default FocusContext;

export function FocusContextProvider( props ) {
    const [focus, set_focus] = useState( 'fromprovider' );

    return <FocusContext.Provider value={ {set_focus, focus} }>{ props.children }</FocusContext.Provider>
}
import { createContext, useState } from "@wordpress/element";

type FocusEvent = {
	name: string;
	options: object;
}

const FocusContext = createContext<{focusEvent: FocusEvent, setFocusEvent: ( event: FocusEvent ) => void}>({
	focusEvent: { name: null, options:null },
	setFocusEvent: ( event: FocusEvent ) => {}
});

export default FocusContext;

export function FocusContextProvider( props ): JSX.Element {
	const [focusEvent, setFocusEvent] = useState<FocusEvent>({name: null, options:null});

	return <FocusContext.Provider value={ {
		focusEvent,
		setFocusEvent
	} } >
		{props.children}
	</FocusContext.Provider>;
}
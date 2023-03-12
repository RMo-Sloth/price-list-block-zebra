import { createContext } from "@wordpress/element";
import { SettingsRecord } from "./SettingsRecord";

const SettingsContext = createContext<SettingsRecord>({
	add: false,
	delete: false,
	edit_description: false,
	edit_price: false,
	order_items: false
});

export default SettingsContext;

// Settings in this context are received from outside the component. So no modification of the settings should happen here. Thus a Provider implementation would be redundant.
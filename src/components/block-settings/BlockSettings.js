import { InspectorControls } from '@wordpress/block-editor';
import { CheckboxControl, Panel, PanelRow, PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function BlockSettings( props ) {
    const [settings, set_settings] = useState(() => ({
        delete: true,
        add: true,
        edit_description: true,
        edit_price: true,
        order_items: true
    }) );

    function toggle_delete() {
        set_settings({
            ...settings,
            delete: !settings.delete
        });
    }

    function toggle_add() {
        set_settings({
            ...settings,
            add: !settings.add
        });
    }

    function toggle_edit_price() {
        set_settings({
            ...settings,
            edit_price: !settings.edit_price
        });
    }

    function toggle_edit_description() {
        set_settings({
            ...settings,
            edit_description: !settings.edit_description
        });
    }

    function toggle_order_items() {
        set_settings({
            ...settings,
            order_items: !settings.order_items
        });
    }

    return ( <InspectorControls key="setting">
        <Panel>
            <PanelBody title='Editing Experience' icon='edit' initialOpen={false} >
                <PanelRow>
                    <CheckboxControl label='Delete Items' checked={settings.delete} onChange={toggle_delete} />
                </PanelRow>
                <PanelRow>
                    <CheckboxControl label='Add Items' checked={settings.add} onChange={toggle_add} />
                </PanelRow>
                <PanelRow>
                    <CheckboxControl label='Edit Price' checked={settings.edit_price} onChange={toggle_edit_price} />
                </PanelRow>
                <PanelRow>
                    <CheckboxControl label='Edit Description' checked={settings.edit_description} onChange={toggle_edit_description} />
                </PanelRow>
                <PanelRow>
                    <CheckboxControl label='Order Items' checked={settings.order_items} onChange={toggle_order_items} />
                </PanelRow>
            </PanelBody>
        </Panel>
    </InspectorControls>);
}
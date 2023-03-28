/** @typedef {typeof __propDef.props}  TriggerProps */
/** @typedef {typeof __propDef.events}  TriggerEvents */
/** @typedef {typeof __propDef.slots}  TriggerSlots */
export default class Trigger extends SvelteComponentTyped<{
    [x: string]: any;
    class?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TriggerProps = typeof __propDef.props;
export type TriggerEvents = typeof __propDef.events;
export type TriggerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};

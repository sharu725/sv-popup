/** @typedef {typeof __propDef.props}  ContentProps */
/** @typedef {typeof __propDef.events}  ContentEvents */
/** @typedef {typeof __propDef.slots}  ContentSlots */
export default class Content extends SvelteComponent<{
    [x: string]: any;
    class?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ContentProps = typeof __propDef.props;
export type ContentEvents = typeof __propDef.events;
export type ContentSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
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
    exports?: {};
    bindings?: string;
};
export {};

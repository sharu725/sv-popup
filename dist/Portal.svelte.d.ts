/** @typedef {typeof __propDef.props}  PortalProps */
/** @typedef {typeof __propDef.events}  PortalEvents */
/** @typedef {typeof __propDef.slots}  PortalSlots */
export default class Portal extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type PortalProps = typeof __propDef.props;
export type PortalEvents = typeof __propDef.events;
export type PortalSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};

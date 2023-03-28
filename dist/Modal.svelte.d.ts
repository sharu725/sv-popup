/** @typedef {typeof __propDef.props}  ModalProps */
/** @typedef {typeof __propDef.events}  ModalEvents */
/** @typedef {typeof __propDef.slots}  ModalSlots */
export default class Modal extends SvelteComponentTyped<{
    [x: string]: any;
    small?: boolean;
    big?: boolean;
    fullscreen?: boolean;
    button?: boolean;
    basic?: boolean;
    close?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        small?: boolean;
        big?: boolean;
        fullscreen?: boolean;
        button?: boolean;
        basic?: boolean;
        close?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};

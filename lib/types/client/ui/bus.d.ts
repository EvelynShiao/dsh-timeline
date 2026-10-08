/**
 * 微型外部 store：命令式 API（toast.show / dropdown.show 等）与 React
 * 宿主组件（useSyncExternalStore）之间的桥。原扩展的各 GlobalXxxManager
 * 是 window 单例 + 直接操作 DOM；DSH 下改为模块单例 + React 渲染。
 */
/** 可订阅的值容器。 */
export declare class Bus<T> {
    private value;
    private readonly listeners;
    constructor(initial: T);
    get(): T;
    set(next: T): void;
    update(fn: (prev: T) => T): void;
    subscribe: (listener: () => void) => (() => void);
}

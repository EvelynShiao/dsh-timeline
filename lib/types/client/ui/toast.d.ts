/** toast 类型。 */
export type ToastType = 'success' | 'error' | 'info' | 'warning';
/** 主题配色（原 config.types[type].color）。 */
interface ToastColors {
    readonly backgroundColor: string;
    readonly textColor: string;
    readonly borderColor: string;
}
/** show 的可选配置（与原版对齐）。 */
export interface ToastOptions {
    /** 目标元素（相对定位）；不传则屏幕中央堆叠。 */
    readonly target?: HTMLElement | null;
    readonly duration?: number;
    readonly position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
    /** 传 false 跳过内联配色（由 className 的 CSS 接管）。 */
    readonly color?: {
        readonly light: ToastColors;
        readonly dark: ToastColors;
    } | false;
    readonly icon?: string;
    readonly gap?: number;
    readonly className?: string;
    /** 内置图标类型（check 为 SVG 对勾，优先于 icon）。 */
    readonly iconType?: 'check';
    /** 跳过默认视觉样式，由 CSS 类接管（AI 完成胶囊用）。 */
    readonly useClassStyles?: boolean;
}
declare function show(type: ToastType, message: string, options?: ToastOptions): void;
/** 命令式 Toast API（等价原 window.globalToastManager）。 */
export declare const toast: {
    show: typeof show;
    success: (message: string, target?: HTMLElement | null, options?: ToastOptions) => void;
    error: (message: string, target?: HTMLElement | null, options?: ToastOptions) => void;
    info: (message: string, target?: HTMLElement | null, options?: ToastOptions) => void;
    warning: (message: string, target?: HTMLElement | null, options?: ToastOptions) => void;
    forceHideAll: () => void;
};
/**
 * Toast 宿主：渲染队列并按原版算法定位。
 * portal 到 body，且仅在有 toast 时挂载，保证插在收藏弹窗之后、不被挡住。
 * @param props - dark 为宿主主题（决定 light/dark 配色取值）。
 * @returns toast 列表。
 */
export declare function ToastHost({ dark }: {
    readonly dark: boolean;
}): import("react").ReactPortal | null;
export {};

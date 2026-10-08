/** 单套 tooltip 配色。 */
export interface TooltipColor {
    readonly backgroundColor: string;
    readonly textColor: string;
    readonly borderColor: string;
}
/** show 的可选配置。 */
export interface TooltipOptions {
    readonly placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    readonly maxWidth?: number;
    readonly showDelay?: number;
    readonly hideDelay?: number;
    readonly gap?: number;
    readonly noArrow?: boolean;
    /** 尺寸档位（控制内边距与字号），缺省 medium 即原始样式。 */
    readonly size?: 'small' | 'medium' | 'large';
    /**
     * 自定义配色，缺省用 BUTTON_COLORS（原 show 的 color 形态）。
     * 传 { light, dark } 按页面主题选用；直接传一套 TooltipColor 则不随主题、固定生效。
     */
    readonly color?: TooltipColor | {
        readonly light: TooltipColor;
        readonly dark: TooltipColor;
    };
}
/** 命令式 Tooltip API（等价原 window.globalTooltipManager 的 button/overlay 面）。 */
export declare const tooltip: {
    /** 显示 button 型 tooltip（原 show(id,'button',target,content)，富内容对应原 html 形态）。 */
    show(id: string, target: HTMLElement, content: React.ReactNode, options?: TooltipOptions): void;
    hide(immediate?: boolean): void;
    forceHideAll(): void;
    isShowing(id: string): boolean;
    /** 二级悬浮 mini tooltip（原 showOverlay）。 */
    showOverlay(target: HTMLElement, text: string, options?: {
        placement?: "top" | "bottom";
        theme?: "light" | "dark";
    }): void;
    hideOverlay(): void;
};
/**
 * Tooltip 宿主。
 * @param props - dark 为宿主主题。
 * @returns button 型 tooltip + mini tooltip。
 */
export declare function TooltipHost({ dark }: {
    readonly dark: boolean;
}): import("react").JSX.Element;

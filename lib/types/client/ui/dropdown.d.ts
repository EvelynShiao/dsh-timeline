/**
 * 全局下拉菜单：移植原扩展 GlobalDropdownManager。
 * - 智能定位（bottom-left 等四方位 + 视口边界翻转/修正）；
 * - 透明遮罩阻挡下层点击；点击外部/滚动/resize 关闭；
 * - 菜单项：图标（ReactNode）、分割线、禁用、danger / create-action 变体；
 * - 子菜单：hover 展开、最多三级、右侧优先左侧回退、mouseleave 分层关闭。
 * 命令式 API（dropdown.show）+ React 宿主（DropdownHost，portal 到 body）。
 */
import { type ReactNode } from 'react';
/** 菜单项（原 items 元素；icon 从 HTML 字符串改为 ReactNode）。 */
export interface DropdownItem {
    readonly type?: 'divider';
    readonly label?: string;
    readonly icon?: ReactNode;
    readonly disabled?: boolean;
    /** 变体：danger（红）/ create-action（斜体弱化 + 品牌紫图标）。 */
    readonly className?: 'danger' | 'create-action';
    readonly children?: readonly DropdownItem[];
    readonly onClick?: (item: DropdownItem) => void;
}
/** show 配置（与原版对齐）。 */
export interface DropdownShowOptions {
    readonly trigger: HTMLElement;
    readonly items: readonly DropdownItem[];
    readonly onSelect?: (item: DropdownItem) => void;
    readonly position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    readonly width?: number;
    /** 附加到主菜单容器的自定义样式类（原 config.className）。 */
    readonly className?: string;
    readonly id?: string;
}
/** 命令式 Dropdown API（等价原 window.globalDropdownManager）。 */
export declare const dropdown: {
    show(options: DropdownShowOptions): void;
    hide(immediate?: boolean): void;
    forceHideAll(): void;
    isVisible(): boolean;
};
/**
 * Dropdown 宿主。
 * portal 到 body：收藏弹窗等也在 body / 更高层叠上下文，挂在 shell.overlay
 * 里会被挡住，表现为「收藏到」点击无反应。
 * @param props - dark 为宿主主题（portal 后需自带 data-theme 才能吃暗色样式）。
 * @returns 遮罩 + 主菜单 + 已展开的子菜单链。
 */
export declare function DropdownHost({ dark }: {
    readonly dark: boolean;
}): import("react").ReactPortal | null;

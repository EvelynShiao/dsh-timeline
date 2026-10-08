import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
import type { TimelineItem } from './TimelineBar.tsx';
/** 气泡组件 props。 */
export interface DotTooltipProps {
    readonly item: TimelineItem;
    readonly anchorRect: DOMRect;
    readonly isStarred: boolean;
    readonly isPinned: boolean;
    readonly onToggleStar: () => void;
    readonly onTogglePin: () => void;
    readonly onPointerEnter: () => void;
    readonly onPointerLeave: () => void;
    readonly t: TranslateNS<typeof NS>;
}
/**
 * 圆点悬浮气泡。
 * @param props - 节点、锚点矩形、收藏态与回调。
 * @returns fixed 定位的气泡。
 */
export declare function DotTooltip({ item, anchorRect, isStarred, isPinned, onToggleStar, onTogglePin, onPointerEnter, onPointerLeave, t }: DotTooltipProps): import("react").JSX.Element;

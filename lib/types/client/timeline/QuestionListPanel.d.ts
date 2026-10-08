import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
import type { StarRecord } from './store.ts';
import type { TimelineItem } from './TimelineBar.tsx';
/** 问题列表面板 props。 */
export interface QuestionListPanelProps {
    readonly items: readonly TimelineItem[];
    readonly starred: Record<string, StarRecord>;
    /** 已标记图钉的节点 key 集合。 */
    readonly pinned: ReadonlySet<string>;
    readonly activeKey: string | null;
    readonly onJump: (key: string) => void;
    readonly onToggleStar: (item: TimelineItem) => void;
    readonly onTogglePin: (item: TimelineItem) => void;
    readonly onClose: () => void;
    readonly t: TranslateNS<typeof NS>;
}
/**
 * 问题列表面板。
 * @param props - 节点、收藏集、激活态与回调。
 * @returns 面板（占据轴条位置）。
 */
export declare function QuestionListPanel({ items, starred, pinned, activeKey, onJump, onToggleStar, onTogglePin, onClose, t }: QuestionListPanelProps): import("react").JSX.Element;

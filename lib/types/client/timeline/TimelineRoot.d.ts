import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
import type { StarRecord } from './store.ts';
import { type TimelineItem } from './TimelineBar.tsx';
/** 根容器 props（由 TimelineAction 传入，纯数据 + 回调）。 */
export interface TimelineRootProps {
    readonly sessionId: string;
    readonly items: readonly TimelineItem[];
    readonly starred: Record<string, StarRecord>;
    /** 已标记图钉的节点 key 集合。 */
    readonly pinned: ReadonlySet<string>;
    /** AI 是否正在生成（完成提醒的触发信号）。 */
    readonly running: boolean;
    readonly collapsed: boolean;
    readonly onSetCollapsed: (collapsed: boolean) => void;
    /** 添加收藏（弹窗确认后携带自定义标题与所属文件夹）。 */
    readonly onStar: (item: TimelineItem, title: string, folderId: string | null) => void;
    /** 取消收藏。 */
    readonly onUnstar: (item: TimelineItem) => void;
    /** 切换图钉标记。 */
    readonly onTogglePin: (item: TimelineItem) => void;
    readonly t: TranslateNS<typeof NS>;
}
/**
 * 时间轴根容器。
 * @param props - 提问节点、收藏集、折叠状态与回调。
 * @returns wrapper + 折叠按钮（portal 到 body 的 fixed 布局由外层完成）。
 */
export declare function TimelineRoot({ sessionId, items, starred, pinned, running, collapsed, onSetCollapsed, onStar, onUnstar, onTogglePin, t }: TimelineRootProps): import("react").JSX.Element;

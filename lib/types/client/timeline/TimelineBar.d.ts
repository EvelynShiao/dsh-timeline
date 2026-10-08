import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
import type { StarRecord } from './store.ts';
/** 时间轴上的一个提问节点。 */
export interface TimelineItem {
    /** Chat 节点 key（同时是 DOM 上的 data-chat-flow-key 锚点）。 */
    readonly key: string;
    /** 摘要全文（行数截断由展示层负责）。 */
    readonly title: string;
    /** 提问时间（Unix epoch ms）。 */
    readonly time: number;
    /** 随后一条可见助手回复的正文预览；尚无回复时为空。 */
    readonly reply: string;
}
/** 轴条组件 props。 */
export interface TimelineBarProps {
    readonly items: readonly TimelineItem[];
    readonly starred: Record<string, StarRecord>;
    /** 已标记图钉的节点 key 集合。 */
    readonly pinned: ReadonlySet<string>;
    readonly activeKey: string | null;
    /** AI 是否正在生成（底部 padding 生成中冻结，原 isAIGenerating）。 */
    readonly running: boolean;
    readonly onActiveChange: (key: string | null) => void;
    readonly onJump: (key: string) => void;
    readonly onToggleStar: (item: TimelineItem) => void;
    readonly onTogglePin: (item: TimelineItem) => void;
    readonly t: TranslateNS<typeof NS>;
}
/**
 * 查找会话滚动容器（宿主 DOM 锚点）。
 * @returns 滚动容器；不存在时 null。
 */
export declare function findScrollContainer(): HTMLElement | null;
/**
 * 按 Chat 节点 key 查找消息元素。
 * @param key - Chat 节点 key。
 * @returns 消息元素；不存在时 null。
 */
export declare function findMessageElement(key: string): HTMLElement | null;
/**
 * 时间轴轴条。
 * @param props - 节点、收藏集、激活态与回调。
 * @returns 轴条（含 tooltip）。
 */
export declare function TimelineBar({ items, starred, pinned, activeKey, running, onActiveChange, onJump, onToggleStar, onTogglePin, t }: TimelineBarProps): import("react").JSX.Element;

import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
import { collectAllTurns } from './collect.ts';
/** loadFullHistory 的进度/取消回调。 */
export interface LoadFullHistoryOptions {
    readonly onProgress?: (count: number) => void;
    readonly shouldCancel?: () => boolean;
}
/** loadFullHistory 拉全历史后返回的最新快照切片。 */
export interface FullHistorySlice {
    readonly order: readonly string[];
    readonly nodes: Parameters<typeof collectAllTurns>[1];
}
/** 完整 props：会话头部动作槽位运行时 + 词典 + 注入的图片解析器与历史拉取。 */
export type ExportActionProps = PropsRuntime<'conversation.session.header.actions'> & PropsLocale<typeof NS> & {
    /** 会话图片字节解析（ctx.sessions.binding(id).session.readAttachment）。 */
    readonly resolveAttachment: (sessionId: string, attachmentId: string) => Promise<{
        readonly mediaType: string;
        readonly width: number;
        readonly height: number;
        readonly name?: string;
        readonly data: Uint8Array;
    } | null>;
    /** 向前翻页拉全会话历史（窗口默认只含最近一页），返回最新 chat.order/nodes。 */
    readonly loadFullHistory: (sessionId: string, options?: LoadFullHistoryOptions) => Promise<FullHistorySlice | null>;
};
/**
 * 会话头部导出入口。
 * @param props - 槽位运行时 + 词典 + 图片解析器。
 * @returns 导出按钮；设置关闭时不渲染。
 */
export declare function ExportAction({ sessionId, useChat, useSessions, resolveAttachment, loadFullHistory, t }: ExportActionProps): import("react").JSX.Element | null;

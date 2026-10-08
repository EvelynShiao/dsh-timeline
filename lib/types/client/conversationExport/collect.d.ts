/**
 * 对话导出：数据采集。原扩展的 adapters 通过 DOM 爬取 + 滚动加载采集对话；
 * DSH 下会话窗口按页装载，调用方先经 loadFullHistory 向前翻页拉全历史，
 * 再把最新快照的 chat.order/nodes 交给这里配对成轮次（等价于原 SCROLL 策略），
 * 图片经 readAttachment 解析成 blob URL。
 */
import type { ChatNodeStore } from '@deepseek-ai/dsh-client-ui-chat/client';
import type { ExportTurn } from './constants.ts';
/** 一次 readAttachment 解析结果的最小形态。 */
export interface ResolvedAttachment {
    readonly mediaType: string;
    readonly width: number;
    readonly height: number;
    readonly name?: string;
    readonly data: Uint8Array;
}
/** 会话图片解析器（由 ctx.sessions.binding(id).session.readAttachment 注入）。 */
export type AttachmentResolver = (attachmentId: string) => Promise<ResolvedAttachment | null>;
/** 采集进度/取消回调（对齐原 collectAllTurns 的 options）。 */
export interface CollectOptions {
    readonly onProgress?: (count: number) => void;
    readonly shouldCancel?: () => boolean;
}
/**
 * 从会话快照采集全部轮次（原 collectAllTurns 的 DSH 等价实现）。
 * @param order - chat.order 节点键序。
 * @param nodes - chat.nodes 节点表。
 * @param resolveAttachment - 图片字节解析器。
 * @param options - 进度与取消回调。
 * @returns 轮次数组（用户消息为界，其后的助手消息并入该轮）。
 */
export declare function collectAllTurns(chatOrder: readonly string[], nodes: ChatNodeStore, resolveAttachment: AttachmentResolver, options?: CollectOptions): Promise<ExportTurn[]>;
/**
 * 公式定界符归一化：\[...\] 与 $$...$$ 统一为独占行的 $$ 围栏，\(...\) → $...$。
 * DeepSeek 回复与 dsh 渲染层同时支持 $ 系与 TeX 系定界符，而下游导出器
 * （PNG 的块解析 / PDF / Markdown）只识别 $ 系；代码围栏内不做替换。
 */
export declare function normalizeMathDelimiters(markdown: string): string;
/**
 * Markdown → 纯文本（原 adapters 由 DOM innerText 提供；此处从 markdown 剥离标记，
 * 覆盖：代码围栏（含未闭合）、块级/行内公式定界符、表格（分隔行丢弃、单元格转制表符）、
 * 分隔线、标题、图片/链接、行内标记、引用、列表符号）。
 */
export declare function markdownToPlainText(markdown: string): string;

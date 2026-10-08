/** 会话内容块的纯文本与时间格式化工具（时间轴各组件共用）。 */
/**
 * 把一条用户消息的内容块拼成摘要文本（保留原文，由 CSS 负责行数截断）。
 * @param content - 消息内容块（未知块被跳过）。
 * @param maxLength - 防御性最大长度（极端长文截断，默认 2000）。
 * @returns 摘要文本；无文本内容时返回空字符串。
 */
export declare function summarizeBlocks(content: readonly unknown[], maxLength?: number): string;
/**
 * 把助手消息的 text 块拼成预览（推理/工具块跳过）。
 * @param blocks - 助手 blocks。
 * @param maxLength - 防御性最大长度，默认 2000。
 * @returns 预览文本；无正文时返回空字符串。
 */
export declare function summarizeAssistantBlocks(blocks: readonly unknown[], maxLength?: number): string;
/**
 * 提问时间的展示格式（移植原扩展 ChatTimeRecorder.formatNodeTime）：
 * 今天只显示时分；今年显示月日时分；跨年补年份。
 * @param timestamp - Unix epoch ms。
 * @returns 格式化时间；无效时间返回空字符串。
 */
export declare function formatNodeTime(timestamp: number): string;
/**
 * 完整年月日时分（移植原扩展 ChatTimeRecorder.formatFullNodeTime，
 * 时间标签点击展开用）。
 * @param timestamp - Unix epoch ms。
 * @returns `YYYY年MM月DD日 HH:mm`；无效时间返回空字符串。
 */
export declare function formatFullNodeTime(timestamp: number): string;
/**
 * 只有默认格式不显示年份（本年）的时间才支持点击切换完整格式
 * （移植原 isNodeTimeToggleable）。
 * @param timestamp - Unix epoch ms。
 */
export declare function isNodeTimeToggleable(timestamp: number): boolean;

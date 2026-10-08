/**
 * 对话导出：文本类导出器（Markdown / TXT / JSON / CSV）与下载工具。
 * 移植原 conversationExport/exporters.js（CETextExporters + ceTriggerDownload），
 * 文案改由 CeTexts 注入。
 */
import { type CeTexts, type ExportFormat, type ExportJob } from './constants.ts';
/** Markdown 导出（原 buildMarkdown）。 */
export declare function buildMarkdown(job: ExportJob, texts: CeTexts): string;
/** TXT 导出（原 buildTxt）。 */
export declare function buildTxt(job: ExportJob, texts: CeTexts): string;
/** JSON 导出（原 buildJson）。 */
export declare function buildJson(job: ExportJob, texts: CeTexts): string;
/**
 * CSV 导出（原 buildCsv）：每轮一行，RFC4180 转义 + UTF-8 BOM。
 */
export declare function buildCsv(job: ExportJob, texts: CeTexts): string;
/**
 * 触发浏览器下载（原 ceTriggerDownload）。
 * @param filenameBase - 不含扩展名的文件名（已清洗）。
 * @param format - 格式定义。
 * @param content - 文本内容或 Blob。
 */
export declare function ceTriggerDownload(filenameBase: string, format: ExportFormat, content: string | Blob): void;

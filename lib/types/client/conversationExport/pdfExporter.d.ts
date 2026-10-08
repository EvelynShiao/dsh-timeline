import { type CeTexts, type ExportJob } from './constants.ts';
import type { CEPngExporter } from './pngExporter.ts';
export declare class CEPdfExporter {
    private parser;
    private texts;
    /**
     * 导出 PDF（原 export）。
     * @param job - 导出任务。
     * @param themeId - 主题色 id。
     * @param texts - 文案面。
     * @param markdownParser - 复用其 parseMarkdownBlocks。
     */
    export(job: ExportJob, themeId: string, texts: CeTexts, markdownParser?: CEPngExporter): Promise<void>;
    private buildHtml;
    private css;
    private turnHtml;
    private assistantHtml;
    private blocksToHtml;
    /**
     * 行内 markdown → HTML（原 _inlineToHtml）：先挖出行内公式/代码占位，
     * 转义后再处理图片/链接/粗体/斜体，最后还原占位。
     */
    private inlineToHtml;
    /** LaTeX → MathML（temml；同公式复制功能的转换引擎），失败返回 null 由调用方回退。 */
    private latexToMathML;
    private imageHtml;
    private escapeHtml;
    private attr;
    private printHtml;
}

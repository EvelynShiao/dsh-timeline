import { type CeTexts, type ExportJob } from './constants.ts';
/** markdown 轻量块（原 _parseMarkdownBlocks 输出）。 */
export type MarkdownBlock = {
    kind: 'paragraph';
    text: string;
} | {
    kind: 'heading';
    level: number;
    text: string;
} | {
    kind: 'listitem';
    depth: number;
    ordered: boolean;
    index: number;
    text: string;
} | {
    kind: 'quote';
    text: string;
} | {
    kind: 'code';
    lang: string;
    code: string;
} | {
    kind: 'formula';
    latex: string;
};
export declare class CEPngExporter {
    private readonly PAGE_WIDTH;
    private readonly PADDING_X;
    private readonly contentWidth;
    /** 正文区左右留白（原 BODY_PADDING_X）。 */
    private readonly BODY_PADDING_X;
    /** 左侧 Q/A 标记栏宽（原 MARKER_GUTTER）。 */
    private readonly MARKER_GUTTER;
    private readonly contentX;
    private readonly bodyWidth;
    private readonly IMAGE_LOAD_TIMEOUT;
    private readonly MAX_IMAGE_HEIGHT;
    private readonly fontFamily;
    private readonly monoFamily;
    private readonly colors;
    private texts;
    private formulaCapable;
    private formulaImages;
    /** 导出 PNG（原 export）。 */
    export(job: ExportJob, themeId: string, texts: CeTexts): Promise<Blob>;
    /** 渲染整张长图到 canvas（原 renderCanvas，供 PNG / PDF 复用）。 */
    renderCanvas(job: ExportJob, themeId: string, texts: CeTexts): Promise<HTMLCanvasElement>;
    private layout;
    private paintTruncationNotice;
    private buildHeader;
    private fillThemeBackground;
    private buildBodyOps;
    private spacerOp;
    /** 给内容块 op 附加左侧「Q / A」圆形标记（原 _withRoleMarker）。 */
    private withRoleMarker;
    private paintRoleMarker;
    private dividerOp;
    private userTextOp;
    private paragraphOp;
    /**
     * 通用富文本块渲染（原 _richTextOp）：支持内联公式混排、
     * 可选列表标记 / 引用竖条 / 缩进。
     */
    private richTextOp;
    /** 含内联公式的文本切分为 token（原 _tokenizeInline）。 */
    private tokenizeInline;
    /** 行内混排布局：文本按字符换行，公式作为整体盒子换行（原 _layoutInline）。 */
    private layoutInline;
    private markdownBlockOp;
    private formulaBlockOp;
    private paintCenteredText;
    private headingOp;
    private listItemOp;
    private quoteOp;
    private codeOp;
    private imageOp;
    private paintImagePlaceholder;
    parseMarkdownBlocks(markdown: string): MarkdownBlock[];
    /** 去除 markdown 内联标记（原 _cleanInline）。 */
    private cleanInline;
    private preloadImages;
    private loadImage;
    /** 探测公式图片渲染是否可用且不污染 canvas（原 _probeFormulaRendering）。 */
    private probeFormulaRendering;
    /** 预渲染选中对话中出现的全部公式（去重，原 _preloadFormulas）。 */
    private preloadFormulas;
    /** 从 markdown 收集公式（原 _collectFormulas）。 */
    collectFormulas(markdown: string): {
        latex: string;
        display: boolean;
    }[];
    /**
     * LaTeX → 图片（原 _renderLatexToImage，MathJax 改 temml）。
     * 原版依赖页面全局 MathJax（tex2svg 出纯矢量 SVG）；dsh 页面没有 MathJax，
     * 改用插件打包的 temml 转 MathML，先在隐藏 DOM 中按目标字号实测像素尺寸，
     * 再包进 SVG foreignObject 作为图片加载（浏览器原生渲染 MathML）。
     */
    private renderLatexToImage;
    private setFont;
    private wrapText;
    private clipToWidth;
    private roundRect;
    private canvasToBlob;
}

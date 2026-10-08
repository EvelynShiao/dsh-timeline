/**
 * 从公式元素中解析 LaTeX 源码，按优先级尝试多种方式。
 * @param formulaElement - 公式 DOM 元素。
 * @returns LaTeX 源码，失败返回 null。
 */
export declare function parseLatex(formulaElement: Element | null): string | null;
/**
 * 判断字符串是否为合法 LaTeX 数学公式。
 * @param text - 待检测文本（可含 $...$ 等分隔符）。
 * @returns 是否合法。
 */
export declare function isValidLatex(text: string): boolean;
/**
 * 从公式元素中解析 MathML（通过已提取的 LaTeX 即 data-latex-source 经 temml 转换）。
 * @param formulaElement - 公式 DOM 元素。
 * @returns MathML XML 字符串，失败返回 null。
 */
export declare function parseMathML(formulaElement: Element | null): string | null;
/** 剥离 LaTeX 数学分隔符：\(...\)  \[...\]  $$...$$  $...$（原 _stripMathDelimiters）。 */
export declare function stripMathDelimiters(text: string): string;
/**
 * 通过 temml 引擎将 LaTeX 公式转为 MathML 标记。
 * @param latex - LaTeX 源码。
 * @returns MathML 字符串，转换失败返回 null。
 */
export declare function latexToMathML(latex: string): string | null;
/** 移除 MathML 中的 annotation/semantics 包装（原 TODO：后续重新实现，暂原样返回）。 */
export declare function stripMathMLWrapper(mathml: string): string;
/**
 * 转换为 Word 兼容的 MathML：Word 要求所有 MathML 标签带 mml: 命名空间前缀。
 * @param mathml - 标准 MathML 字符串。
 * @returns Word 兼容的 MathML 字符串。
 */
export declare function prefixForWord(mathml: string): string;

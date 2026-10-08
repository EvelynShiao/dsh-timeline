import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
type T = TranslateNS<typeof NS>;
/** FormulaHost props。 */
export interface FormulaHostProps {
    readonly t: T;
    readonly dark: boolean;
    /** 当前会话 id（变化时清理交互标记，对应原 url:change）。 */
    readonly currentSessionId: string | undefined;
}
/**
 * 公式复制宿主：挂在 UiHost 下，承载扫描引擎与 hover tooltip 的渲染。
 * @param props - 词典 + 主题 + 当前会话。
 * @returns 公式 tooltip 或 null。
 */
export declare function FormulaHost({ t, dark, currentSessionId }: FormulaHostProps): import("react").JSX.Element | null;
export {};

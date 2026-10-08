import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
/** 完整 props：输入工具行槽位运行时 + 词典。 */
export type PromptButtonProps = PropsRuntime<'conversation.input.left'> & PropsLocale<typeof NS>;
/**
 * 提示词按钮（含下拉与智能回车挂载）。
 * @param props - 槽位运行时 + 词典。
 * @returns 提示词按钮；设置关闭时不渲染。
 */
export declare function PromptButton({ useInput, useSession, inputActions, t }: PromptButtonProps): import("react").JSX.Element | null;

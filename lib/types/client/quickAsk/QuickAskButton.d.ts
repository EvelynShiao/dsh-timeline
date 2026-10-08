import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
/** 完整 props：输入工具行槽位运行时 + 词典。 */
export type QuickAskButtonProps = PropsRuntime<'conversation.input.left'> & PropsLocale<typeof NS>;
/**
 * 追问浮动按钮。挂 composer 槽位（仅会话页存在），按钮本体 portal 到 body。
 * @param props - 槽位运行时 + 词典。
 * @returns 有有效选区时渲染浮动按钮，否则不渲染。
 */
export declare function QuickAskButton({ useInput, useSession, inputActions, t }: QuickAskButtonProps): import("react").ReactPortal | null;

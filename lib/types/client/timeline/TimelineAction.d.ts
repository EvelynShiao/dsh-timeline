import type { PropsLocale, PropsRuntime, PropsStore } from '@deepseek-ai/dsh-client-ui-slots';
import { NS } from '../locales.ts';
import type { createTimelineStore } from './store.ts';
/** 完整 props：会话头部动作槽位运行时 + 声明的 store + 词典。 */
export type TimelineActionProps = PropsRuntime<'conversation.session.header.actions'> & PropsStore<ReturnType<typeof createTimelineStore>> & PropsLocale<typeof NS>;
/**
 * 会话头部的时间轴入口。
 * @param props - 槽位运行时 + store + 词典。
 * @returns 开关按钮；开启且有提问时渲染时间轴。
 */
export declare function TimelineAction({ sessionId, useChat, useSession, useSessions, useStore, actions, t }: TimelineActionProps): import("react").JSX.Element | null;

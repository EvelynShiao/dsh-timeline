/**
 * dsh-timeline，浏览器半：注册词典与会话头部的时间轴入口。
 * 时间轴数据来自 Chat 快照（useChat），显隐与收藏走会话级持久化 store。
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis';
import { type TimelineKey } from './locales.ts';
declare module '@deepseek-ai/dsh-client-ui-slots' {
    interface LocaleNamespaceMap {
        /** 时间轴插件文案。 */
        'dshTimeline': TimelineKey;
    }
}
export type { TimelineActionProps } from './timeline/TimelineAction.tsx';
export { createTimelineStore } from './timeline/store.ts';
/** 词典注册、槽位贡献、会话导航、Conversation 装配与主题服务。 */
export declare const inject: string[];
/**
 * 客户端插件体：注册词典与会话头部时间轴入口。
 * @param ctx - 客户端根上下文。
 */
export declare function apply(ctx: ClientContext): void;

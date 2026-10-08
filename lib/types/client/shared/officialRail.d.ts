/**
 * 隐藏宿主自带的轮次导航条（ui-chat 的 TurnNavigator）：它硬编码在 ChatView
 * 内部，没有槽位也没有设置项，插件只能用 CSS 盖掉。选择器不依赖哈希类名，
 * 而是用两条稳定契约：消息流列的 data-chat-flow 属性，以及轨道 <nav> 自带的
 * aria-label（轨道槽位是消息流列的前一个兄弟）。规则本体见
 * timeline.module.css 的 "宿主轮次导航" 段，由本模块通过根节点属性开关。
 *
 * 显隐跟随插件自己的 timelineEnabled：用户关掉插件时间轴时，宿主的轨道恢复。
 */
import type { Context as ClientContext } from '@deepseek-ai/cordis';
/**
 * 绑定宿主轨道隐藏（index.ts 的 apply 中调用）。
 * 随插件 fiber 卸载解除订阅并移除根属性，宿主轨道随之恢复。
 * @param ctx - 客户端上下文。
 */
export declare function bindOfficialRailHiding(ctx: ClientContext): void;

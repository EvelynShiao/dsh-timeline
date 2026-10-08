import { type SmartEnterMode } from '../shared/settings.ts';
/** 换行/发送提示文案的翻译函数形态。 */
type ToastText = (mode: SmartEnterMode) => string;
/** 智能回车挂载 hook：composer 槽位组件调用（随会话生命周期附加/清理）。 */
export declare function useSmartEnter(getToastText: ToastText): void;
export {};

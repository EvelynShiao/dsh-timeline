import { type TimelineItem } from './TimelineBar.tsx';
/** 时间标签宿主 props。 */
export interface TimeLabelsProps {
    readonly items: readonly TimelineItem[];
    readonly dark: boolean;
}
/** 时间标签宿主（挂在 TimelineRoot 内）。 */
export declare function TimeLabels({ items, dark }: TimeLabelsProps): import("react").JSX.Element;

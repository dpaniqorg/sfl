import { totalWeeksByYear } from '@entities/utils/date';
import { GamePlayer } from './store/new-game.store';

export const isCurrentCaptain = ({
  team,
  disable,
  isCaptain,
}: GamePlayer): boolean => {
  return;
};

const totalWeeksOfYear = totalWeeksByYear(new Date());

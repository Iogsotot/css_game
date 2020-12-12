export default class StatsManager {
  constructor(levels) {
    this.statusEnum = { cheat: 0, solved: 1 };
    this.cheatUsed = false;
    this.levels = levels.levelsTemplate;
  }

  getCompleteStats() {
    const completeStats = localStorage.getItem('completeStats');
    return JSON.parse(completeStats);
  }

  setCompleteStats(currentLevel) {
    let completeStats = this.getCompleteStats();
    if (this.cheatUsed) {
      this.levels[`level${currentLevel}`].isComplete = this.statusEnum.cheat;
    } else {
      this.levels[`level${currentLevel}`].isComplete = this.statusEnum.solved;
    }
    if (completeStats) {
      if (!(currentLevel in completeStats)) {
        completeStats = { ...completeStats, [currentLevel]: this.levels[`level${currentLevel}`].isComplete };
      }
    } else {
      completeStats = { [currentLevel]: this.levels[`level${currentLevel}`].isComplete };
    }
    localStorage.setItem('completeStats', JSON.stringify(completeStats));
  }
}

import getCompleteStats from './getCompleteStats';

const progressBar = document.querySelector('#progressBar');

export default function updateProgressBar(maxLevel) {
  const completeStats = getCompleteStats();
  const progress = completeStats ? Object.keys(completeStats).length : 0;
  progressBar.style.width = `${progress * (100 / maxLevel)}%`;
}

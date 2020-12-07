export default function getCompleteStats() {
  const completeStats = localStorage.getItem('completeStats');
  return JSON.parse(completeStats);
}

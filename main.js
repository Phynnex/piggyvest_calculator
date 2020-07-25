const dailyInterest = (principal) => {
  const interestRate = 0.1;
  const dailyInterestRate = interestRate / 360;

  return principal * dailyInterestRate;
};

const calculateTotalInterest = (principal, investmentInterval, period) => {
  console.log('Amount \t Day \t Earning');
  let cumulativeInvestment = principal;
  let totalInterest = 0;
  let interval = investmentInterval;

  for (let dayIndex = 1; dayIndex <= period; dayIndex++) {
      if (dayIndex === interval + 1) {
          cumulativeInvestment += principal;
          interval += investmentInterval;
      }

      totalInterest += dailyInterest(cumulativeInvestment);

      console.log(`${cumulativeInvestment} \t ${dayIndex} \t ${totalInterest.toFixed(2)}`);
  }

  return totalInterest;
};

const resultToBrowser = () => {
  const principal = document.querySelector('input.principal').value;
  const interval = document.querySelector('input.interval').value;
  const period = document.querySelector('input.period').value;
  console.log(`${principal} ${interval} ${period}`);
  document.querySelector('p.result').innerText = calculateTotalInterest(principal, interval, period);
}

console.log(calculateTotalInterest(1000, 30, 90));
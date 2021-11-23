const txtMax = document.getElementById('txtMax');
const txtResult = document.getElementById('txtResult');
const fldMax = document.getElementById('fldMax');
const btnCalc = document.getElementById('btnCalc');

btnCalc.addEventListener('click', (ev) => {
    ev.preventDefault();

    const max = Number(fldMax.value);
    const result = numberOfPrimes(max);
    txtMax.textContent = max;
    txtResult.textContent = result;
});

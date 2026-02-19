export function sideEffectButtonRegressiveActivation(list,button,exception) {
    const index = list.findIndex(item => item === button);
    console.log(index)
    if (index === 0) return;
    if (exception.includes(index)) return;
    console.log(exception.includes(index))
    for (let i = index - 1; i >= 0; i--) {
      const buttonToActivate = list[i];
      if (exception.includes(i)) continue;
      if (!buttonToActivate) continue;
      buttonToActivate.onClick(true);
    }
}

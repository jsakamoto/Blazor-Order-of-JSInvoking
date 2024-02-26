export const delay = (ms) => {
    console.log(`begin delay(${ms})`);
    return new Promise(resolve => setTimeout(() => {
        resolve();
        console.log(`end delay(${ms})`);
    }, ms));
}
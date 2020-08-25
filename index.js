import { fromEvent } from 'rxjs';


const observer = {
    next: (value) => console.log('next', value),
    error: (err) => console.log('error', err),
    complete: () => console.log('complete'),
};

const source$ = fromEvent(document, 'keyup');

const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(() => {
    console.log('Unsubscribe');
    subOne.unsubscribe();
}, 3000);
// enum EOperator {
//   ADD = '+',
//   SUBTRACT = '-',
//   MULTIPLY = '*',
//   DIVIDE = '/',
// }

// enum EAction {
//   CLEAR = 'AC',
//   PLUS_OR_MINUS = '+/-',
//   PERCENT = '%',
// }

// enum ENumber {
//   ZERO = 0,
//   ONE = 1,
//   TWO = 2,
//   THREE = 3,
//   FOUR = 4,
//   FIVE = 5,
//   SIX = 6,
//   SEVEN = 7,
//   EIGHT = 8,
//   NINE = 9,
//   DOT = ',',
// }

// type TOperationFunction = (a: number, b: number) => number;

// const operationFunctions: Record<EOperator | EAction, TOperationFunction> = {
//   [EOperator.ADD]: (a, b) => a + b,
//   [EOperator.SUBTRACT]: (a, b) => a - b,
//   [EOperator.MULTIPLY]: (a, b) => a * b,
//   [EOperator.DIVIDE]: (a, b) => a / b,
//   [EAction.CLEAR]: () => 0,
//   [EAction.PLUS_OR_MINUS]: (a) => -a,
//   [EAction.PERCENT]: (a) => a / 100,
// };

// interface IHistory {
//   operation: EOperator;
//   leftNum: number;
//   rightNum: number;
// }

// type TDisplayElement = HTMLDivElement;

// abstract class Calculator {
//   protected previousOperand: string;
//   protected currentOperand: string;
//   protected operation: EOperator | undefined;
//   protected previousOperandTextElement: TDisplayElement;
//   protected currentOperandTextElement: TDisplayElement;

//   constructor(
//     previousOperandTextElement: TDisplayElement,
//     currentOperandTextElement: TDisplayElement
//   ) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.previousOperand = '';
//     this.currentOperand = '';
//     this.clear();
//     this.clear();
//   }

//   public clear(): void {
//     this.currentOperand = '';
//     this.previousOperand = '';
//     this.operation = undefined;
//   }

//   public delete(): void {
//     this.currentOperand = this.currentOperand.slice(0, -1);
//   }

//   public appendNumber(number: string): void {
//     if (number === '.' && this.currentOperand.includes('.')) return;

//     this.currentOperand = this.currentOperand + number;
//   }

//   public chooseOperation(operation: EOperator): void {
//     if (this.currentOperand === '') return;

//     if (this.previousOperand !== '') {
//       this.compute();
//     }

//     this.operation = operation;
//     this.previousOperand = this.currentOperand;
//     this.currentOperand = '';
//   }

//   public compute(): void {
//     let computation: number;

//     const prev = parseFloat(this.previousOperand);
//     const current = parseFloat(this.currentOperand);

//     if (isNaN(prev) || isNaN(current)) return;

//     switch (this.operation) {
//       case EOperator.ADD:
//         computation = prev + current;
//         break;
//       case EOperator.SUBTRACT:
//         computation = prev - current;
//         break;
//       case EOperator.MULTIPLY:
//         computation = prev * current;
//         break;
//       case EOperator.DIVIDE:
//         computation = prev / current;
//         break;
//       default:
//         return;
//     }

//     this.currentOperand = computation.toString();
//     this.operation = undefined;
//     this.previousOperand = '';
//   }

//   public getDisplayNumber(number: string): string {
//     const stringNumber = number;
//     const integerDigits = parseFloat(stringNumber.split('.')[0]);
//     const decimalDigits = stringNumber.split('.')[1];

//     let integerDisplay: string;

//     if (isNaN(integerDigits)) {
//       integerDisplay = '';
//     } else {
//       integerDisplay = integerDigits.toLocaleString('en', {
//         maximumFractionDigits: 0,
//       });
//     }

//     if (decimalDigits != null) {
//       return `${integerDisplay}.${decimalDigits}`;
//     } else {
//       return integerDisplay;
//     }
//   }

//   public updateDisplay(): void {
//     this.currentOperandTextElement.innerText = this.getDisplayNumber(
//       this.currentOperand
//     );
//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
//         this.previousOperand
//       )} ${this.operation}`;
//     } else {
//       this.previousOperandTextElement.innerText = '';
//     }
//   }
// }

// class SingletonCalculator extends Calculator {
//   private static _instance: SingletonCalculator;

//   private constructor(
//     previousOperandTextElement: TDisplayElement,
//     currentOperandTextElement: TDisplayElement
//   ) {
//     super(previousOperandTextElement, currentOperandTextElement);
//   }

//   public static getInstance(
//     previousOperandTextElement: TDisplayElement,
//     currentOperandTextElement: TDisplayElement
//   ): SingletonCalculator {
//     if (!SingletonCalculator._instance) {
//       SingletonCalculator._instance = new SingletonCalculator(
//         previousOperandTextElement,
//         currentOperandTextElement
//       );
//     }

//     return SingletonCalculator._instance;
//   }
// }

// const numberBtns = Array.from(
//   document.querySelectorAll('[data-number]')
// ) as HTMLButtonElement[];
// const operatorBtns = document.querySelectorAll('[data-operator]');
// const actionBtns = document.querySelectorAll('[data-action]');
// const screenInput = document.querySelector(
//   '[data-screen-input]'
// ) as TDisplayElement;
// const screenOutput = document.querySelector(
//   '[data-screen-output]'
// ) as TDisplayElement;

// const calculator = SingletonCalculator.getInstance(screenInput, screenOutput);

// numberBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     calculator.appendNumber(btn.innerText);
//     calculator.updateDisplay();
//   });
// });

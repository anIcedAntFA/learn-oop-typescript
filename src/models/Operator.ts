// enum EOperator {
//   ADD = '+',
//   SUBTRACT = '-',
//   MULTIPLY = '*',
//   DIVIDE = '/',
// }

// type TOperationFunction = (a: number, b: number) => number;

// const operationFunctions: Record<EOperator, TOperationFunction> = {
//   [EOperator.ADD]: (a, b) => a + b,
//   [EOperator.SUBTRACT]: (a, b) => a - b,
//   [EOperator.MULTIPLY]: (a, b) => a * b,
//   [EOperator.DIVIDE]: (a, b) => a / b,
// };

// interface IOperand {
//   value: string;
//   appendNumber(number: string): void;
//   clear(): void;
//   getDisplayValue(): string;
// }

// enum EOperandType {
//   CURRENT = 'current',
//   PREVIOUS = 'previous',
// }

// abstract class Operand implements IOperand {
//   protected _value: string;

//   constructor() {
//     this._value = '';
//   }

//   get value() {
//     return this._value;
//   }

//   appendNumber(number: string) {
//     if (number === '.' && this._value.includes('.')) return;

//     this._value += number;
//   }

//   clear(): void {
//     this._value = '';
//   }

//   abstract getDisplayValue(): string;
// }

// class CurrentOperand extends Operand {
//   getDisplayValue(): string {
//     if (this._value === '') return '0';

//     return this._value;
//   }
// }

// class PreviousOperand extends Operand {
//   private _operator: EOperator | undefined;

//   chooseOperator(operator: EOperator) {
//     if (this._value === '') return;

//     this._operator = operator;
//   }

//   getDisplayValue(): string {
//     if (this._operator === undefined) return '';

//     return `${this._value} ${this._operator}`;
//   }
// }

// class OperandFactory {
//   static createOperand(type: EOperandType): IOperand {
//     switch (type) {
//       case EOperandType.CURRENT:
//         return new CurrentOperand();
//       case EOperandType.PREVIOUS:
//         return new PreviousOperand();
//       default:
//         throw new Error('Invalid operand type');
//     }
//   }
// }

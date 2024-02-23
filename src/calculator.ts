enum EButtonType {
  NUMBER = 'number',
  OPERATOR = 'operator',
  ACTION = 'action',
}

interface IButton {
  type: EButtonType;
  value: string;
}

interface ICalculator {
  calculate: (input: string) => number;
}

abstract class Calculator implements ICalculator {
  protected _input: string;
  protected _output: number;

  constructor(input: string) {
    this._input = input;
    this._output = 0;
  }

  abstract calculate(input: string): number;

  getInput() {
    return this._input;
  }

  setInput(input: string) {
    this._input = input;
  }
}

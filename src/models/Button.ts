enum EButtonType {
  NUMBER = 'number',
  OPERATOR = 'operator',
  ACTION = 'action',
}

interface IButton {
  type: EButtonType;
  value: string;
}

class Button implements IButton {
  readonly type: EButtonType;
  readonly value: string;

  constructor(data: IButton) {
    this.type = data.type;
    this.value = data.value;
  }
}

class NumberButton extends Button {
  constructor(value: string) {
    super({ type: EButtonType.NUMBER, value });
  }
}

class OperatorButton extends Button {
  constructor(value: string) {
    super({ type: EButtonType.OPERATOR, value });
  }
}

class ActionButton extends Button {
  constructor(value: string) {
    super({ type: EButtonType.ACTION, value });
  }
}

class ButtonFactory {
  private static buttonTypeMap = new Map<
    EButtonType,
    new (value: string) => Button
  >([
    [EButtonType.NUMBER, NumberButton],
    [EButtonType.OPERATOR, OperatorButton],
    [EButtonType.ACTION, ActionButton],
  ]);

  static createButton(data: IButton): Button {
    const ButtonType = this.buttonTypeMap.get(data.type);

    if (!ButtonType) {
      throw new Error(`Invalid button type: ${data.type}`);
    }

    return new ButtonType(data.value);
  }
}

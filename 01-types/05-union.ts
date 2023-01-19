{
  /**
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function moveBy(direction: Direction) {
    console.log(direction);
  }
  moveBy('down');
  moveBy('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailStatus = {
    reason: string;
  };
  type LoginState = SuccessState | FailStatus;

  function login1(id: string, passwords: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginStates)
  // success -> 👏 body
  // fail -> 😢 reason
  function printLoginState1(state: LoginState) {
    if ('response' in state) {
      console.log(`👏 ${state.response.body}`);
    } else {
      console.log(`😢 ${state.reason}`);
    }
  }
}

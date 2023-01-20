{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailStatus = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailStatus;

  function login2(id: string, passwords: string): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginStates)
  // success -> 👏 body
  // fail -> 😢 reason
  function printLoginState2(state: LoginState) {
    if (state.result === 'success') {
      console.log(`👏 ${state.response.body}`);
    } else {
      console.log(`😢 ${state.reason}`);
    }
  }
}

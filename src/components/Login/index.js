import {Component} from 'react'

import {
  MainContainer,
  FormContainer,
  LoginWebsiteLogo,
  InputContainer,
  LoginButton,
} from './styledComponents'

class Login extends Component {
  state = {
    userName: ' ',
    passWord: ' ',
    showSubmitError: false,
    errorMsg: '',
    isCheckedPassword: false,
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <MainContainer>
        <FormContainer>
          <LoginWebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUserNameInput()}</InputContainer>
          <InputContainer>{this.renderPassword()}</InputContainer>
          <LoginButton type="button"> Login</LoginButton>
        </FormContainer>
      </MainContainer>
    )
  }
}

export default Login

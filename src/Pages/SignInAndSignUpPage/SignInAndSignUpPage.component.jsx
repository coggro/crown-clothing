import React from 'react'

import SignIn from '../../Components/SignIn/SignIn.component'
import SignUp from '../../Components/SignUp/SignUp.component'

import './SignInAndSignUpPage.styles.scss'

const SignInAndSignUpPage = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
)

export default SignInAndSignUpPage

import styled from 'styled-components';
import { ThemeColorContext } from '../../context/context';
import { useContext, useState } from 'react';
import { Button } from './common';
import { useRecoilValue } from 'recoil';
import { emailAtom, genderAtom, isSubmittedAtom, userNameAtom } from '../../recoil/atom';

const Layout = ({children}) => {
	const context = useContext(ThemeColorContext);
	const [mode, setMode] = useState(context.blueTheme);
	const isSubmitted = useRecoilValue(isSubmittedAtom);

	const userName = useRecoilValue(userNameAtom);
	const email = useRecoilValue(emailAtom);
    // 과제1
    const gender = useRecoilValue(genderAtom);

	const handleMode = (e) => {
		const value = e.target.value;
		if(value === "blue"){
			setMode(context.blueTheme);
		} else if(value === "green"){
			setMode(context.greenTheme);
		} else if(value === "pink"){
			setMode(context.pinkTheme);
		}
	}
	return (
		<ThemeColorContext.Provider value={mode}>
			<Wrapper>
				{/*mode={mode.main}*/}
				<Header mode={mode.main}>
					<Button value="blue" onClick={handleMode}>blue</Button>
					<Button value="green" onClick={handleMode}>green</Button>
					<Button value="pink" onClick={handleMode}>pink</Button>
				</Header>
				<div>{children}</div>
				<Footer mode={mode.main}>
					{isSubmitted ? `${userName}(${gender})의 공간! | ${email}` : "2025 LIKELION"}
				</Footer>
			</Wrapper>
		</ThemeColorContext.Provider>

	);
};

export default Layout

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

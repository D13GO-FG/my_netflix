import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
	const user = useSelector(selectUser);
	console.log(user);
	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen__body">
				<h1>Profile</h1>
				<div className="profileScreen__info">
					<img
						src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
						alt=""
					/>
					<div className="profileScreen__details">
						<h2>{user.email}</h2>
						<div className="profileScreen__plans">
							{/* <h3>Datos</h3>
							<div>
								<h2>{user.email}</h2>
								<h3></h3>
							</div> */}
							<PlansScreen />
							<button
								onClick={() => auth.signOut()}
								className="profileScreen__signOut"
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;

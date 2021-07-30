import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../state/actions/studentActions";

const Navbar = () => {
	// Controlling the profile drop down menu state
	const [profileDropDown, setProfileDropDown] = useState(false);

	// Toggling the profile dropdown
	const toggleMenu = () => {
		setProfileDropDown(!profileDropDown);
	};

	// mobile menu state
	const [mobileMenuDropDown, setMobileMenuDropDown] = useState(false);

	// Toggling the mobile menu dropdown
	const toggleMobileMenu = () => {
		setMobileMenuDropDown(!mobileMenuDropDown);
	};

	// styles for active link
	const activeStyle = {
		color: "white",
		backgroundColor: "rgba(31, 41, 55)", // bg-gray-700
		// border: "4px solid rgba(6, 95, 70)",
	};

	const dispatch = useDispatch();
	const history = useHistory();

	// student state
	const { student, accessToken: studentToken } = useSelector(
		(state) => state.studentDetails
	);

	// staff state
	const { staff, accessToken: staffToken } = useSelector(
		(state) => state.staffDetails
	);

	return (
		<nav className="bg-gray-900 border-b-2 border-gray-700 font-mono">
			<div className="2xl:max-w-8xl max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-1">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Menu Button for mobile */}
						<button
							onClick={toggleMobileMenu}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>

							{/* 
                                The menu icon for when the menu isnt open. ( the three bars  ) 
                                menu states and their classes: menu closed -> 'block' , menu open -> 'hidden' 
                            */}

							<svg
								className={`${
									!mobileMenuDropDown ? "block" : "hidden"
								} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>

							{/* 
                                The menu icon for when the menu is open. ( the cross ) 
                                menu states and their classes: menu open -> 'block' , menu closed -> 'hidden' 
                            */}

							<svg
								className={`${
									mobileMenuDropDown ? "block" : "hidden"
								} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex-shrink-0 flex items-center">
							<img
								className="block lg:hidden h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Workflow"
							/>
							<img
								className="hidden lg:block h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Workflow"
							/>
						</div>
						<div className="hidden sm:block sm:ml-6">
							{studentToken ? (
								<div className="flex space-x-4">
									<NavLink
										exact
										to="/"
										activeStyle={activeStyle}
										className="text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 "
										aria-current="page"
									>
										Dashboard
									</NavLink>
									{/* <NavLink
                                        to='/class'
                                        activeStyle={activeStyle}
                                        className='text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 '
                                        aria-current='page'
                                    >
                                        Class
                                    </NavLink> */}
									<NavLink
										to="/results"
										activeStyle={activeStyle}
										className="text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 "
										aria-current="page"
									>
										Results
									</NavLink>
								</div>
							) : staffToken ? (
								<div className="flex space-x-4">
									<NavLink
										exact
										to="/dashboard"
										activeStyle={activeStyle}
										className="text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 "
										aria-current="page"
									>
										Dashboard
									</NavLink>
									<NavLink
										to="/notifications"
										activeStyle={activeStyle}
										className="text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 "
										aria-current="page"
									>
										Notifications
									</NavLink>
								</div>
							) : (
								<div className="flex space-x-4">
									<NavLink
										exact
										to="/login"
										activeStyle={activeStyle}
										className="text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 "
										aria-current="page"
									>
										Login
									</NavLink>
									<NavLink
										to="/student-register"
										activeStyle={activeStyle}
										className="text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 "
										aria-current="page"
									>
										Student Registration
									</NavLink>
									<NavLink
										to="/staff-register"
										activeStyle={activeStyle}
										className="text-gray-300 px-3 py-2 rounded-md text-lg font-light border border-transparent hover:text-gray-100 hover:bg-gray-700 "
										aria-current="page"
									>
										Staff Registration
									</NavLink>
								</div>
							)}
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						{/* <!-- Profile dropdown --> */}
						<div className="ml-3 relative">
							<div>
								<button
									// onBlur={() => setProfileDropDown(false)}
									onClick={toggleMenu}
									type="button"
									className={
										"bg-gray-800 flex text-sm rounded-full focus:outline-none " +
										(!studentToken && "cursor-default") +
										(profileDropDown &&
											"focus:ring-2 focus:ring-white ")
									}
									id="user-menu"
									aria-expanded="false"
									aria-haspopup="true"
								>
									<span className="sr-only">Open user menu</span>
									{studentToken && student.image ? (
										<img
											className="w-12 h-12 object-cover rounded-full "
											src={student.image}
											alt=""
										/>
									) : (
										<div className="h-12 w-12 rounded-full flex justify-center items-center">
											<i className="text-gray-500 text-2xl fas fa-user"></i>
										</div>
									)}
								</button>
							</div>

							{/*Dropdown menu, show/hide based on menu state.*/}
							{(studentToken || staffToken) && (
								<div
									className={` ${
										profileDropDown ? "block" : "hidden"
									} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu"
								>
									<Link
										to="/profile"
										onClick={toggleMenu}
										className={`${
											profileDropDown ? "block" : "hidden"
										} px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 `}
										aria-current="page"
										role="menuitem"
									>
										Profile
									</Link>
									<button
										onClick={() => {
											dispatch(logout());
											toggleMenu();
											history.push("/login");
										}}
										className={`${
											profileDropDown ? "block" : "hidden"
										} px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 focus:outline-none`}
										aria-current="page"
										role="menuitem"
									>
										Sign Out
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			<div
				className={`${mobileMenuDropDown ? "block" : "hidden"} sm:hidden`}
				id="mobile-menu"
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					{studentToken ? (
						<>
							<NavLink
								exact
								to="/"
								onClick={toggleMobileMenu}
								activeStyle={activeStyle}
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								aria-current="page"
							>
								Dashboard
							</NavLink>

							<NavLink
								to="/class"
								onClick={toggleMobileMenu}
								activeStyle={activeStyle}
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Class
							</NavLink>

							<NavLink
								to="/results"
								onClick={toggleMobileMenu}
								activeStyle={activeStyle}
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Results
							</NavLink>
						</>
					) : (
						<>
							<NavLink
								exact
								to="/register"
								onClick={toggleMobileMenu}
								activeStyle={activeStyle}
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								aria-current="page"
							>
								Register
							</NavLink>

							<NavLink
								to="/login"
								onClick={toggleMobileMenu}
								activeStyle={activeStyle}
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Login
							</NavLink>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

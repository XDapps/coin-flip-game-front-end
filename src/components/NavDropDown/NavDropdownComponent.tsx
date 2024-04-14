import DropdownItemCallback from "@components/NavDropDown/DropdownItem/DropdownItemCallback";
import DropdownItemLink from "@components/NavDropDown/DropdownItem/DropdownItemLink";
import StackModal from "@components/Modal/StackModal";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useAppDispatch } from "store/hooks/appDispatch";
import hamburger from "../../assets/svg/hamburger.svg";
import thankyou from "../../assets/svg/thank-you.svg";
import password from "../../assets/svg/password.svg";
import { LOGOUT } from '../../constants/actionTypes';
import ThankYouModal from "../Modal/ThankYouModal";
import logout from "../../assets/svg/logout.svg";
import rules from "../../assets/svg/rules.svg";
import stack from "../../assets/svg/stack.svg";
import RulesModal from "../Modal/RulesModal";

const NavDropdownComponent = (): JSX.Element => {
	const [open, setOpen] = useState(false);
	const [rulesOpen, setRulesOpen] = useState(false);
	const [stackOpen, setStackOpen] = useState(false);
	const [thankYouOpen, setThankYouOpen] = useState(false);
	const user = useSelector((state: RootState) => state.login.user);
	const menuRef = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();

	const handleLogout = (): void => {
		dispatch({ type: LOGOUT });
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setOpen(false);
			document.removeEventListener("mousedown", handleClickOutside);
		}
	};

	const toggleDropdown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.stopPropagation();
		if (open) {
			document.removeEventListener("mousedown", handleClickOutside);
			setOpen(false);
		} else {
			setOpen(true);
			setTimeout(() => document.addEventListener("mousedown", handleClickOutside), 0);
		}
	};

	useEffect(() => {
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className='menu-container'>
			<StackModal open={stackOpen} handleClose={()=>setStackOpen(false)} />
			<RulesModal open={rulesOpen} handleClose={()=>setRulesOpen(false)} />
			<ThankYouModal open={thankYouOpen} handleClose={() => setThankYouOpen(false)} />
			<div className="menu-trigger" onClick={toggleDropdown}>
				<img src={hamburger} alt="Menu" />
			</div>
			{open && (
				<div ref={menuRef}>
					<div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
						<h3>Good Luck <br /> <span>{user?.name}</span></h3>
						<ul>
							<DropdownItemCallback callback={() => setRulesOpen(true)} text='Rules' image={rules} />
							<DropdownItemCallback callback={() => setStackOpen(true)} text='Stack' image={stack} />
							<DropdownItemCallback callback={() => setThankYouOpen(true)} text='Thank You' image={thankyou} />
							<DropdownItemLink image={password} text='Password' link="/password" />
							<DropdownItemCallback callback={handleLogout} text='Logout' image={logout} />
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};
export default NavDropdownComponent;

import { Link } from 'react-router-dom';

interface IDropdownItemLinkProps {
	link: string;
	image: string;
	text: string;
}

const DropdownItemLink = (props: IDropdownItemLinkProps): JSX.Element => {
	return (
		<li className='dropdownItem'>
			<img src={props.image} alt={props.text}></img>
			<Link to={props.link}>{props.text}</Link>
		</li>
	);
};
export default DropdownItemLink;
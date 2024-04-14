
interface IDropdownItemCallbackProps {
	callback: () => void;
	image: string;
	text: string;
}

const DropdownItemCallback = (props: IDropdownItemCallbackProps): JSX.Element => {
	return (
		<li className='dropdownItem' onClick={props.callback}>
			<img src={props.image} alt={props.text}></img>
			<div>{props.text}</div>
		</li>
	);
};
export default DropdownItemCallback;
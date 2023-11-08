import React from "react";
import style from './Botao.module.scss'

interface BotaoProps {
	type?: "button" | "submit" | "reset" | undefined,
	onClick?: () => void,
	children?: React.ReactNode;
}

class Botao extends React.Component<BotaoProps> {
	render() {
		return (
			<button onClick={this.props.onClick} type={this.props.type} className={style.botao}>
				{this.props.children}
			</button>
		)
	}
}

export default Botao;
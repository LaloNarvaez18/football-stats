import React from 'react'

function Button({ isDisabled, icon, text, style, onClick }) {
	return (
		<button
			disabled={isDisabled}
			className={style}
			onClick={onClick}
		>
			{icon && icon}
			{text}
		</button>
	)
}

export default Button
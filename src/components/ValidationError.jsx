import React, { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
	const { error } = useSelector((state) => state.auth);

	const errorMessage = useCallback(() => {
		return Object.keys(error).map((name) => {
			const msg = error[name].join(", ");
			return `${name}-${msg}`;
		});
	}, [error]);
	// console.log(error != null && errorMessage());
	return (
		error != null && (
			<div className="text-center mt-4">
				{errorMessage().map((err, indx) => (
					<p
						key={indx}
						className=" text-red-400 font-medium text-2xl md:text-xl"
					>
						{err}
					</p>
				))}
			</div>
		)
	);
};

export default ValidationError;

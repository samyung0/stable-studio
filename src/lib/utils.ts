import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const darkColors = ["#9f8787", "#6d908b", "#7a95a4", "#8787a3"];

export const toRoman = (num: number) => {
	const romanNumerals = [
		{ value: 1000, symbol: "M" },
		{ value: 900, symbol: "CM" },
		{ value: 500, symbol: "D" },
		{ value: 400, symbol: "CD" },
		{ value: 100, symbol: "C" },
		{ value: 90, symbol: "XC" },
		{ value: 50, symbol: "L" },
		{ value: 40, symbol: "XL" },
		{ value: 10, symbol: "X" },
		{ value: 9, symbol: "IX" },
		{ value: 5, symbol: "V" },
		{ value: 4, symbol: "IV" },
		{ value: 1, symbol: "I" },
	];
	let result = "";
	for (let i = 0; i < romanNumerals.length; i++) {
		while (num >= romanNumerals[i].value) {
			result += romanNumerals[i].symbol;
			num -= romanNumerals[i].value;
		}
	}
	return result;
};

export const getRelativeXY = (e: MouseEvent, el: HTMLElement | null) => {
	let m_posx = 0,
		m_posy = 0,
		e_posx = 0,
		e_posy = 0,
		obj = el;
	if (e.pageX || e.pageY) {
		m_posx = e.pageX;
		m_posy = e.pageY;
	} else if (e.clientX || e.clientY) {
		m_posx =
			e.clientX +
			document.body.scrollLeft +
			document.documentElement.scrollLeft;
		m_posy =
			e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	//get parent element position in document
	if (obj?.offsetParent) {
		do {
			e_posx += obj.offsetLeft;
			e_posy += obj.offsetTop;
		} while ((obj = obj.offsetParent as HTMLElement));
	}

	return { x: m_posx - e_posx, y: m_posy - e_posy };
};

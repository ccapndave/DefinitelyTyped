interface TransformStatic {
	(el: Element): any;
	(el: Element, transform: any): any;
	set(el: Element, transform: any): any;
}

declare module 'css-transformer' {
	var t: TransformStatic;
	export = t
}

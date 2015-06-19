interface ClassDictionary {
	[id: string]: boolean;
}

declare module "classnames" {
	function classNames(...classes: (string|ClassDictionary)[]): string;
	export = classNames
}
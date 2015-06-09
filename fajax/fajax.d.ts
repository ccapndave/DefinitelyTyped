declare module 'fajax' {
	function get(url: string): Promise<{ body: any }>;
	function post(url: string, data?: any): Promise<{ body: any }>;
	
	export = { default: get, get, post }
}